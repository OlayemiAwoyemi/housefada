import { useEffect, useMemo, useState } from "react";
import { X, Receipt, Trash2, Mail, MessageCircle, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { TRANSACTION_STATUSES, TransactionStatus, formatNaira, toTitleCase, toSentenceCase } from "@/lib/services";
import { downloadReceiptPdf, ReceiptData } from "@/lib/receiptPdf";
import {
  buildEmailUrl,
  buildWhatsappUrl,
  downloadPdfFor,
} from "@/lib/shareReceipt";

interface Transaction {
  id: string;
  invoice_number: string;
  client_name: string;
  client_email: string;
  client_whatsapp: string;
  service_type: string;
  status: TransactionStatus;
  total_amount: number;
  notes: string | null;
  paid_at: string | null;
  created_at: string;
}

interface Item {
  id: string;
  service_type: string | null;
  item_name: string;
  quantity: number;
  unit_price: number;
}

type ShareIntent = {
  channel: "email" | "whatsapp";
  type: "INVOICE" | "RECEIPT";
  data: ReceiptData;
  url: string;
};

export const TransactionDetail = ({
  transactionId,
  onClose,
  onChanged,
}: {
  transactionId: string;
  onClose: () => void;
  onChanged: () => void;
}) => {
  const [tx, setTx] = useState<Transaction | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [savingStatus, setSavingStatus] = useState(false);
  const [busy, setBusy] = useState<string | null>(null);
  const [shareIntent, setShareIntent] = useState<ShareIntent | null>(null);

  const load = async () => {
    setLoading(true);
    const [{ data: txData }, { data: itemData }] = await Promise.all([
      supabase.from("transactions").select("*").eq("id", transactionId).single(),
      supabase.from("transaction_items").select("*").eq("transaction_id", transactionId),
    ]);
    setTx(txData as Transaction | null);
    setItems((itemData as Item[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transactionId]);

  const groupedItems = useMemo(() => {
    const map = new Map<string, Item[]>();
    items.forEach((it) => {
      const key = it.service_type || tx?.service_type || "Other";
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(it);
    });
    return Array.from(map.entries());
  }, [items, tx]);

  const updateStatus = async (newStatus: TransactionStatus) => {
    if (!tx) return;
    setSavingStatus(true);
    const patch: { status: TransactionStatus; paid_at?: string } = { status: newStatus };
    if (newStatus === "paid" && !tx.paid_at) patch.paid_at = new Date().toISOString();
    const { error } = await supabase.from("transactions").update(patch).eq("id", tx.id);
    setSavingStatus(false);
    if (error) {
      toast({ title: "Update failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Status updated", description: `Marked as ${newStatus.replace("_", " ")}.` });
    await load();
    onChanged();
  };

  const remove = async () => {
    if (!tx) return;
    if (!confirm(`Delete invoice ${tx.invoice_number}? This cannot be undone.`)) return;
    const { error } = await supabase.from("transactions").delete().eq("id", tx.id);
    if (error) {
      toast({ title: "Delete failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Deleted", description: `Invoice ${tx.invoice_number} removed.` });
    onChanged();
    onClose();
  };

  const buildData = (type: "INVOICE" | "RECEIPT"): ReceiptData | null => {
    if (!tx) return null;
    return {
      type,
      ...tx,
      items: items.map((i) => ({
        item_name: i.item_name,
        quantity: i.quantity,
        unit_price: i.unit_price,
        service_type: i.service_type ?? tx.service_type,
      })),
    };
  };

  const isPaid = tx?.status === "paid" || tx?.status === "completed";

  const handle = async (action: "download" | "email" | "whatsapp", type: "INVOICE" | "RECEIPT") => {
    const data = buildData(type);
    if (!data) return;
    if (type === "RECEIPT" && !isPaid) {
      toast({
        title: "Not paid yet",
        description: "Mark the transaction as Paid before generating a receipt.",
        variant: "destructive",
      });
      return;
    }
    const key = `${action}-${type}`;
    setBusy(key);
    try {
      if (action === "download") {
        await downloadReceiptPdf(data);
      } else {
        // Build URL upfront so we can validate (e.g., WhatsApp number) before showing the prompt.
        const url = action === "email" ? buildEmailUrl(data) : buildWhatsappUrl(data);
        setShareIntent({ channel: action, type, data, url });
      }
    } catch (e) {
      toast({
        title: "Failed",
        description: e instanceof Error ? e.message : "Could not complete action.",
        variant: "destructive",
      });
    } finally {
      setBusy(null);
    }
  };

  const confirmShare = async () => {
    if (!shareIntent) return;
    const { url, data, channel, type } = shareIntent;
    try {
      await downloadPdfFor(data);
      if (channel === "email") {
        window.location.href = url;
      } else {
        window.open(url, "_blank", "noopener,noreferrer");
      }
      toast({
        title: "PDF downloaded",
        description: `Attach the ${type.toLowerCase()} PDF in the ${
          channel === "email" ? "email draft" : "WhatsApp chat"
        } that just opened.`,
      });
    } catch (e) {
      toast({
        title: "Failed",
        description: e instanceof Error ? e.message : "Could not share.",
        variant: "destructive",
      });
    } finally {
      setShareIntent(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <div className="bg-card w-full sm:max-w-2xl sm:rounded-2xl border border-border min-h-screen sm:min-h-0 sm:my-8 shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-card to-card/80 backdrop-blur border-b border-border px-5 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div className="min-w-0">
            <h2 className="text-xl font-display font-bold tracking-tight truncate">{tx?.invoice_number ?? "Loading…"}</h2>
            <p className="text-xs text-muted-foreground truncate">{tx?.service_type}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-lg shrink-0" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        {loading || !tx ? (
          <div className="p-10 text-center text-muted-foreground">Loading…</div>
        ) : (
          <div className="p-5 space-y-6">
            {/* Client */}
            <section className="grid sm:grid-cols-2 gap-3 text-sm bg-secondary/30 border border-border rounded-xl p-4">
              <div>
                <p className="text-muted-foreground text-[10px] uppercase tracking-[0.15em]">Client</p>
                <p className="font-semibold mt-0.5">{toTitleCase(tx.client_name)}</p>
                <p className="text-muted-foreground">{tx.client_email.toLowerCase()}</p>
                <p className="text-muted-foreground">WhatsApp: {tx.client_whatsapp}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-[10px] uppercase tracking-[0.15em]">Created</p>
                <p className="mt-0.5">{new Date(tx.created_at).toLocaleString("en-NG")}</p>
                {tx.paid_at && (
                  <>
                    <p className="text-muted-foreground text-[10px] uppercase tracking-[0.15em] mt-2">Paid</p>
                    <p className="text-emerald-400">{new Date(tx.paid_at).toLocaleString("en-NG")}</p>
                  </>
                )}
              </div>
            </section>

            {/* Status control */}
            <section className="space-y-2">
              <Label>Status</Label>
              <Select value={tx.status} onValueChange={(v) => updateStatus(v as TransactionStatus)} disabled={savingStatus}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {TRANSACTION_STATUSES.map((s) => (
                    <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </section>

            {/* Items grouped by service */}
            <section>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Items</p>
              <div className="border border-border rounded-xl overflow-hidden">
                {groupedItems.map(([svc, list]) => (
                  <div key={svc}>
                    <div className="px-4 py-2 bg-secondary/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {svc}
                    </div>
                    <div className="divide-y divide-border">
                      {list.map((it) => (
                        <div key={it.id} className="px-4 py-3 flex justify-between gap-3 text-sm">
                          <div>
                            <p className="font-medium">{toTitleCase(it.item_name)}</p>
                            <p className="text-muted-foreground text-xs">
                              {it.quantity} × {formatNaira(it.unit_price)}
                            </p>
                          </div>
                          <div className="font-semibold whitespace-nowrap">
                            {formatNaira(it.quantity * it.unit_price)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="px-4 py-3 flex justify-between bg-secondary/50 border-t border-border">
                  <span className="font-semibold">Total</span>
                  <span className="font-display text-lg font-bold text-accent">
                    {formatNaira(tx.total_amount)}
                  </span>
                </div>
              </div>
            </section>

            {tx.notes && (
              <section className="text-sm">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Notes</p>
                <p className="whitespace-pre-wrap">{toSentenceCase(tx.notes)}</p>
              </section>
            )}

            {/* Invoice actions */}
            <section className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" /> Invoice
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Button variant="secondary" onClick={() => handle("download", "INVOICE")} disabled={busy === "download-INVOICE"}>
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
                <Button variant="secondary" onClick={() => handle("email", "INVOICE")} disabled={busy === "email-INVOICE"}>
                  <Mail className="w-4 h-4 mr-2" /> Email
                </Button>
                <Button variant="secondary" onClick={() => handle("whatsapp", "INVOICE")} disabled={busy === "whatsapp-INVOICE"}>
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
              </div>
            </section>

            {/* Receipt actions */}
            <section className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-[0.15em] flex items-center gap-2">
                <Receipt className="w-3.5 h-3.5" /> Receipt {!isPaid && <span className="text-destructive normal-case tracking-normal">(mark Paid first)</span>}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <Button onClick={() => handle("download", "RECEIPT")} disabled={!isPaid || busy === "download-RECEIPT"}>
                  <Download className="w-4 h-4 mr-2" /> Download
                </Button>
                <Button onClick={() => handle("email", "RECEIPT")} disabled={!isPaid || busy === "email-RECEIPT"}>
                  <Mail className="w-4 h-4 mr-2" /> Email
                </Button>
                <Button onClick={() => handle("whatsapp", "RECEIPT")} disabled={!isPaid || busy === "whatsapp-RECEIPT"}>
                  <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                </Button>
              </div>
            </section>

            <button
              onClick={remove}
              className="w-full mt-2 flex items-center justify-center gap-2 text-sm text-destructive hover:bg-destructive/10 py-2 rounded-lg"
            >
              <Trash2 className="w-4 h-4" /> Delete invoice
            </button>
          </div>
        )}
      </div>

      <AlertDialog open={!!shareIntent} onOpenChange={(o) => !o && setShareIntent(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Attach the PDF manually</AlertDialogTitle>
            <AlertDialogDescription>
              Browsers don't allow files to be auto-attached to{" "}
              {shareIntent?.channel === "email" ? "email" : "WhatsApp"} from a web page.
              <br /><br />
              When you continue, the {shareIntent?.type.toLowerCase()} PDF will download to your device,
              and your {shareIntent?.channel === "email" ? "email app" : "WhatsApp"} will open with a
              prefilled message. Please attach the downloaded PDF before sending.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmShare}>
              Download &amp; open {shareIntent?.channel === "email" ? "Email" : "WhatsApp"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
