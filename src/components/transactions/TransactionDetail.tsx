import { useEffect, useState } from "react";
import { X, Download, FileText, Receipt, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { TRANSACTION_STATUSES, TransactionStatus, formatNaira } from "@/lib/services";
import { generateReceiptPdf } from "@/lib/receiptPdf";

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
  item_name: string;
  quantity: number;
  unit_price: number;
}

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

  const downloadInvoice = () => {
    if (!tx) return;
    generateReceiptPdf({
      type: "INVOICE",
      ...tx,
      items: items.map((i) => ({ item_name: i.item_name, quantity: i.quantity, unit_price: i.unit_price })),
    });
  };

  const downloadReceipt = () => {
    if (!tx) return;
    if (tx.status !== "paid" && tx.status !== "completed") {
      toast({
        title: "Not paid yet",
        description: "Mark the transaction as Paid before generating a receipt.",
        variant: "destructive",
      });
      return;
    }
    generateReceiptPdf({
      type: "RECEIPT",
      ...tx,
      items: items.map((i) => ({ item_name: i.item_name, quantity: i.quantity, unit_price: i.unit_price })),
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <div className="bg-card w-full sm:max-w-2xl sm:rounded-2xl border border-border min-h-screen sm:min-h-0 sm:my-8">
        <div className="sticky top-0 bg-card border-b border-border px-5 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <h2 className="text-xl font-display font-bold">{tx?.invoice_number ?? "Loading…"}</h2>
            <p className="text-xs text-muted-foreground">{tx?.service_type}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {loading || !tx ? (
          <div className="p-10 text-center text-muted-foreground">Loading…</div>
        ) : (
          <div className="p-5 space-y-6">
            {/* Client */}
            <section className="grid sm:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Client</p>
                <p className="font-semibold">{tx.client_name}</p>
                <p className="text-muted-foreground">{tx.client_email}</p>
                <p className="text-muted-foreground">WhatsApp: {tx.client_whatsapp}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">Created</p>
                <p>{new Date(tx.created_at).toLocaleString("en-NG")}</p>
                {tx.paid_at && (
                  <>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider mt-2">Paid</p>
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

            {/* Items */}
            <section>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Items</p>
              <div className="border border-border rounded-xl divide-y divide-border overflow-hidden">
                {items.map((it) => (
                  <div key={it.id} className="px-4 py-3 flex justify-between gap-3 text-sm">
                    <div>
                      <p className="font-medium">{it.item_name}</p>
                      <p className="text-muted-foreground text-xs">
                        {it.quantity} × {formatNaira(it.unit_price)}
                      </p>
                    </div>
                    <div className="font-semibold whitespace-nowrap">
                      {formatNaira(it.quantity * it.unit_price)}
                    </div>
                  </div>
                ))}
                <div className="px-4 py-3 flex justify-between bg-secondary/50">
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
                <p className="whitespace-pre-wrap">{tx.notes}</p>
              </section>
            )}

            {/* Actions */}
            <section className="grid sm:grid-cols-2 gap-3 pt-2">
              <Button variant="secondary" onClick={downloadInvoice}>
                <FileText className="w-4 h-4 mr-2" /> Download Invoice PDF
              </Button>
              <Button onClick={downloadReceipt} disabled={tx.status !== "paid" && tx.status !== "completed"}>
                <Receipt className="w-4 h-4 mr-2" /> Download Receipt PDF
              </Button>
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
    </div>
  );
};
