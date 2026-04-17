import { useMemo, useState } from "react";
import { Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SERVICE_TYPES, formatNaira, generateInvoiceNumber } from "@/lib/services";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface Item {
  service_type: string;
  item_name: string;
  quantity: number;
  unit_price: number;
}

export const TransactionForm = ({ onClose, onCreated }: { onClose: () => void; onCreated: () => void }) => {
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientWhatsapp, setClientWhatsapp] = useState("");
  const [notes, setNotes] = useState("");
  const [items, setItems] = useState<Item[]>([
    { service_type: "Cleaning Services", item_name: "", quantity: 1, unit_price: 0 },
  ]);
  const [submitting, setSubmitting] = useState(false);

  const total = items.reduce((s, it) => s + (it.quantity || 0) * (it.unit_price || 0), 0);

  // Aggregate selected services for the transaction's primary service_type field
  const selectedServices = useMemo(() => {
    const set = new Set<string>();
    items.forEach((i) => i.service_type && set.add(i.service_type));
    return Array.from(set);
  }, [items]);

  const updateItem = (idx: number, patch: Partial<Item>) =>
    setItems((arr) => arr.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  const addItem = () =>
    setItems((a) => [
      ...a,
      { service_type: a[a.length - 1]?.service_type ?? "Cleaning Services", item_name: "", quantity: 1, unit_price: 0 },
    ]);
  const removeItem = (idx: number) => setItems((a) => a.filter((_, i) => i !== idx));

  const submit = async () => {
    if (!clientName.trim() || !clientEmail.trim() || !clientWhatsapp.trim()) {
      toast({ title: "Missing info", description: "Please fill all client fields.", variant: "destructive" });
      return;
    }
    const cleanItems = items.filter((i) => i.item_name.trim() && i.quantity > 0 && i.service_type);
    if (cleanItems.length === 0) {
      toast({ title: "No items", description: "Add at least one item with a service.", variant: "destructive" });
      return;
    }

    setSubmitting(true);
    const invoice_number = generateInvoiceNumber();
    const primaryService = selectedServices.join(", ");

    const { data: tx, error: txErr } = await supabase
      .from("transactions")
      .insert({
        invoice_number,
        client_name: clientName.trim(),
        client_email: clientEmail.trim(),
        client_whatsapp: clientWhatsapp.trim(),
        service_type: primaryService,
        notes: notes.trim() || null,
        total_amount: total,
        status: "pending",
      })
      .select()
      .single();

    if (txErr || !tx) {
      setSubmitting(false);
      toast({ title: "Failed", description: txErr?.message ?? "Could not create invoice.", variant: "destructive" });
      return;
    }

    const { error: itemsErr } = await supabase.from("transaction_items").insert(
      cleanItems.map((it) => ({
        transaction_id: tx.id,
        service_type: it.service_type,
        item_name: it.item_name.trim(),
        quantity: it.quantity,
        unit_price: it.unit_price,
      }))
    );

    setSubmitting(false);
    if (itemsErr) {
      toast({ title: "Items failed", description: itemsErr.message, variant: "destructive" });
      return;
    }

    toast({ title: "Invoice created", description: `Invoice ${invoice_number} saved.` });
    onCreated();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-start sm:items-center justify-center p-0 sm:p-4 overflow-y-auto">
      <div className="bg-card w-full sm:max-w-2xl sm:rounded-2xl border border-border min-h-screen sm:min-h-0 sm:my-8">
        <div className="sticky top-0 bg-card border-b border-border px-5 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <h2 className="text-xl font-display font-bold">New Invoice</h2>
          <button onClick={onClose} className="p-2 hover:bg-secondary rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-6">
          {/* Client */}
          <section className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Client</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="cn">Name</Label>
                <Input id="cn" value={clientName} onChange={(e) => setClientName(e.target.value)} placeholder="Full name" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="ce">Email</Label>
                <Input id="ce" type="email" value={clientEmail} onChange={(e) => setClientEmail(e.target.value)} placeholder="client@email.com" />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="cw">WhatsApp Number</Label>
                <Input id="cw" value={clientWhatsapp} onChange={(e) => setClientWhatsapp(e.target.value)} placeholder="+234 800 000 0000" />
              </div>
            </div>
            {selectedServices.length > 0 && (
              <p className="text-xs text-muted-foreground">
                Services on this invoice: <span className="font-medium text-foreground">{selectedServices.join(", ")}</span>
              </p>
            )}
          </section>

          {/* Items */}
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Items (multi-service)</h3>
              <Button type="button" size="sm" variant="secondary" onClick={addItem}>
                <Plus className="w-4 h-4 mr-1" /> Add item
              </Button>
            </div>

            <div className="space-y-3">
              {items.map((it, idx) => {
                const sub = (it.quantity || 0) * (it.unit_price || 0);
                return (
                  <div key={idx} className="bg-secondary/40 border border-border rounded-xl p-3 space-y-2">
                    <div className="grid grid-cols-12 gap-2">
                      <div className="col-span-12 sm:col-span-5 space-y-1">
                        <Label className="text-xs">Service</Label>
                        <Select
                          value={it.service_type}
                          onValueChange={(v) => updateItem(idx, { service_type: v })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            {SERVICE_TYPES.map((s) => (
                              <SelectItem key={s} value={s}>{s}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="col-span-12 sm:col-span-7 space-y-1">
                        <Label className="text-xs">Item / description</Label>
                        <Input
                          placeholder="e.g. Full House Cleaning"
                          value={it.item_name}
                          onChange={(e) => updateItem(idx, { item_name: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-2 items-end">
                      <div className="col-span-3 space-y-1">
                        <Label className="text-xs">Qty</Label>
                        <Input
                          type="number"
                          min={0}
                          step="1"
                          value={it.quantity}
                          onChange={(e) => updateItem(idx, { quantity: parseFloat(e.target.value) || 0 })}
                        />
                      </div>
                      <div className="col-span-5 space-y-1">
                        <Label className="text-xs">Unit price (NGN)</Label>
                        <Input
                          type="number"
                          min={0}
                          step="0.01"
                          value={it.unit_price}
                          onChange={(e) => updateItem(idx, { unit_price: parseFloat(e.target.value) || 0 })}
                        />
                      </div>
                      <div className="col-span-3 text-right text-sm font-semibold">
                        {formatNaira(sub)}
                      </div>
                      <div className="col-span-1 flex justify-end">
                        {items.length > 1 && (
                          <button
                            onClick={() => removeItem(idx)}
                            className="p-2 text-destructive hover:bg-destructive/10 rounded-lg"
                            type="button"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Notes */}
          <section className="space-y-1.5">
            <Label htmlFor="notes">Notes (optional)</Label>
            <Textarea id="notes" rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Delivery details, terms, etc." />
          </section>

          {/* Total */}
          <div className="flex items-center justify-between bg-secondary/60 border border-border rounded-xl px-4 py-3">
            <span className="font-semibold">Total</span>
            <span className="text-xl font-display font-bold text-accent">{formatNaira(total)}</span>
          </div>
        </div>

        <div className="sticky bottom-0 bg-card border-t border-border px-5 py-4 flex gap-3 rounded-b-2xl">
          <Button variant="secondary" className="flex-1" onClick={onClose} disabled={submitting}>
            Cancel
          </Button>
          <Button className="flex-1" onClick={submit} disabled={submitting}>
            {submitting ? "Creating..." : "Create Invoice"}
          </Button>
        </div>
      </div>
    </div>
  );
};
