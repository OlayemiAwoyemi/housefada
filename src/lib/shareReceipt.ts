import { COMPANY } from "./services";
import { ReceiptData, generateReceiptPdf } from "./receiptPdf";

const buildMessage = (data: ReceiptData) => {
  const label = data.type === "INVOICE" ? "invoice" : "receipt";
  const total = new Intl.NumberFormat("en-NG", {
    minimumFractionDigits: 2,
  }).format(data.total_amount || 0);
  return [
    `Hello ${data.client_name},`,
    "",
    `Please find attached your ${label} #${data.invoice_number} from ${COMPANY.name}.`,
    `Service: ${data.service_type}`,
    `Total: NGN ${total}`,
    data.type === "INVOICE"
      ? `\nKindly transfer to:\n• Zenith Bank — 1016142555 — HOUSEFADA RESOURCES\n• Premium Trust Bank — 0040134291 — HOUSEFADA RESOURCES\nPlease quote the invoice number on transfer.`
      : `\nThank you for your payment.`,
    "",
    `${COMPANY.name}`,
    `${COMPANY.phone}  •  ${COMPANY.email}`,
  ].join("\n");
};

export const buildShareMessage = buildMessage;

export const downloadPdfFor = async (data: ReceiptData) => {
  const blob = await generateReceiptPdf(data);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${data.type.toLowerCase()}-${data.invoice_number}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
};

const sanitizeWhatsapp = (raw: string) => {
  const digits = (raw || "").replace(/\D/g, "");
  if (!digits) return "";
  if (digits.startsWith("0") && digits.length === 11) return "234" + digits.slice(1);
  if (digits.startsWith("234")) return digits;
  return digits;
};

/** Build the mailto URL (does not open it). */
export const buildEmailUrl = (data: ReceiptData) => {
  const subject = `${data.type === "INVOICE" ? "Invoice" : "Receipt"} ${data.invoice_number} — ${COMPANY.name}`;
  const body = buildMessage(data);
  return `mailto:${encodeURIComponent(data.client_email)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body + "\n\n(Please attach the PDF you just downloaded.)")}`;
};

/** Build the WhatsApp share URL (does not open it). Throws if number invalid. */
export const buildWhatsappUrl = (data: ReceiptData) => {
  const phone = sanitizeWhatsapp(data.client_whatsapp);
  if (!phone) throw new Error("Invalid WhatsApp number");
  const text = encodeURIComponent(buildMessage(data) + "\n\n(PDF attached separately.)");
  return `https://wa.me/${phone}?text=${text}`;
};
