import { useEffect, useMemo, useState } from "react";
import { Plus, Search, LogOut, FileText, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { AdminGate, isAuthed } from "@/components/transactions/AdminGate";
import { TransactionForm } from "@/components/transactions/TransactionForm";
import { TransactionDetail } from "@/components/transactions/TransactionDetail";
import {
  TRANSACTION_STATUSES,
  TransactionStatus,
  formatNaira,
} from "@/lib/services";

interface Row {
  id: string;
  invoice_number: string;
  client_name: string;
  client_email: string;
  service_type: string;
  status: TransactionStatus;
  total_amount: number;
  created_at: string;
  paid_at: string | null;
}

const statusMeta = (s: TransactionStatus) => TRANSACTION_STATUSES.find((x) => x.value === s)!;

const Transactions = () => {
  const [authed, setAuthed] = useState(isAuthed());
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showForm, setShowForm] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from("transactions")
      .select("id, invoice_number, client_name, client_email, service_type, status, total_amount, created_at, paid_at")
      .order("created_at", { ascending: false });
    setRows((data as Row[]) ?? []);
    setLoading(false);
  };

  useEffect(() => {
    if (authed) load();
  }, [authed]);

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      if (statusFilter !== "all" && r.status !== statusFilter) return false;
      if (!search.trim()) return true;
      const q = search.toLowerCase();
      return (
        r.invoice_number.toLowerCase().includes(q) ||
        r.client_name.toLowerCase().includes(q) ||
        r.client_email.toLowerCase().includes(q) ||
        r.service_type.toLowerCase().includes(q)
      );
    });
  }, [rows, search, statusFilter]);

  const stats = useMemo(() => {
    const totals = { count: rows.length, paid: 0, pending: 0, revenue: 0 };
    for (const r of rows) {
      if (r.status === "paid" || r.status === "completed") {
        totals.paid += 1;
        totals.revenue += Number(r.total_amount) || 0;
      } else if (r.status === "pending" || r.status === "in_progress") {
        totals.pending += 1;
      }
    }
    return totals;
  }, [rows]);

  if (!authed) return <AdminGate onUnlock={() => setAuthed(true)} />;

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border bg-card/50 backdrop-blur sticky top-0 z-30">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center">
              <FileText className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h1 className="text-lg font-display font-bold leading-tight">Transactions</h1>
              <p className="text-xs text-muted-foreground">SatGo Admin</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={load} title="Refresh">
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                sessionStorage.removeItem("satgo_admin_authed");
                setAuthed(false);
              }}
              title="Sign out"
            >
              <LogOut className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard label="Total Invoices" value={String(stats.count)} />
          <StatCard label="Paid" value={String(stats.paid)} accent />
          <StatCard label="Outstanding" value={String(stats.pending)} />
          <StatCard label="Revenue" value={formatNaira(stats.revenue)} />
        </section>

        {/* Toolbar */}
        <section className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              className="pl-9"
              placeholder="Search invoice, client, email…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="sm:w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All statuses</SelectItem>
              {TRANSACTION_STATUSES.map((s) => (
                <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button onClick={() => setShowForm(true)}>
            <Plus className="w-4 h-4 mr-2" /> New Invoice
          </Button>
        </section>

        {/* List */}
        <section>
          {loading ? (
            <div className="text-center text-muted-foreground py-12">Loading…</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-border rounded-2xl">
              <FileText className="w-10 h-10 mx-auto text-muted-foreground mb-3" />
              <p className="font-semibold">No transactions yet</p>
              <p className="text-sm text-muted-foreground mb-4">Create your first invoice to get started.</p>
              <Button onClick={() => setShowForm(true)}>
                <Plus className="w-4 h-4 mr-2" /> New Invoice
              </Button>
            </div>
          ) : (
            <div className="space-y-2">
              {filtered.map((r) => {
                const meta = statusMeta(r.status);
                return (
                  <button
                    key={r.id}
                    onClick={() => setOpenId(r.id)}
                    className="w-full text-left bg-card hover:bg-secondary/50 border border-border rounded-xl px-4 py-3 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-sm font-semibold">{r.invoice_number}</span>
                          <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${meta.color}`}>
                            {meta.label}
                          </span>
                        </div>
                        <p className="text-sm mt-1 truncate">{r.client_name} · <span className="text-muted-foreground">{r.service_type}</span></p>
                        <p className="text-xs text-muted-foreground">{new Date(r.created_at).toLocaleDateString("en-NG", { day: "2-digit", month: "short", year: "numeric" })}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-display font-bold text-accent">{formatNaira(Number(r.total_amount))}</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {showForm && (
        <TransactionForm
          onClose={() => setShowForm(false)}
          onCreated={() => {
            setShowForm(false);
            load();
          }}
        />
      )}
      {openId && (
        <TransactionDetail
          transactionId={openId}
          onClose={() => setOpenId(null)}
          onChanged={load}
        />
      )}
    </div>
  );
};

const StatCard = ({ label, value, accent }: { label: string; value: string; accent?: boolean }) => (
  <div className="bg-card border border-border rounded-xl p-4">
    <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
    <p className={`text-xl font-display font-bold mt-1 ${accent ? "text-accent" : ""}`}>{value}</p>
  </div>
);

export default Transactions;
