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
  // Use "NGN " prefix instead of the ₦ glyph because jsPDF's built-in Helvetica
  // renders ₦ as a broken glyph (e.g. "¦"). This keeps PDFs and UI consistent.
  "NGN " +
  new Intl.NumberFormat("en-NG", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n || 0);

import { supabase } from "@/integrations/supabase/client";

/**
 * Pulls the next sequential HouseFada invoice number from the database.
 * Format: HouseFada-0001, HouseFada-0002, ...
 * Falls back to a timestamp-based number only if the RPC fails (offline / error).
 */
export const generateInvoiceNumber = async (): Promise<string> => {
  const { data, error } = await supabase.rpc("next_housefada_invoice_number");
  if (error || !data) {
    const ts = Date.now().toString().slice(-4);
    return `HouseFada-${ts}`;
  }
  return data as string;
};

export const COMPANY = {
  name: "HouseFada Resources",
  email: "housefada@yahoo.com",
  phone: "+234 816 016 9189",
  website: "housefada.lovable.app",
  address: "Redemption City, Mowe, Ogun State, Nigeria",
  rc: "RC 9363567",
};

export const BANK_ACCOUNTS = [
  { bank: "Zenith Bank", number: "1016142555", name: "HOUSEFADA RESOURCES" },
  { bank: "Premium Trust Bank", number: "0040134291", name: "HOUSEFADA RESOURCES" },
];
