export const SERVICE_TYPES = [
  "Cleaning Services",
  "Culinary Services",
  "Mobility Solutions",
  "AgroFresh",
  "AutoHub",
  "Tech Innovations",
  "Real Estate & Construction",
  "Publishing & Printing",
  "Travel & Tourism",
  "Other",
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];

export const TRANSACTION_STATUSES = [
  { value: "pending", label: "Pending", color: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40" },
  { value: "in_progress", label: "In Progress", color: "bg-blue-500/20 text-blue-300 border-blue-500/40" },
  { value: "paid", label: "Paid", color: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40" },
  { value: "completed", label: "Completed", color: "bg-purple-500/20 text-purple-300 border-purple-500/40" },
  { value: "cancelled", label: "Cancelled", color: "bg-red-500/20 text-red-300 border-red-500/40" },
] as const;

export type TransactionStatus = (typeof TRANSACTION_STATUSES)[number]["value"];

export const formatNaira = (n: number) =>
  new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", minimumFractionDigits: 2 }).format(n || 0);

export const generateInvoiceNumber = () => {
  const d = new Date();
  const ymd = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(d.getDate()).padStart(2, "0")}`;
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `INV-${ymd}-${rand}`;
};
