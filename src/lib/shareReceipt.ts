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

const triggerDownload = async (data: ReceiptData) => {
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
  // Nigerian numbers: 0XXXXXXXXXX -> 234XXXXXXXXXX
  if (digits.startsWith("0") && digits.length === 11) return "234" + digits.slice(1);
  if (digits.startsWith("234")) return digits;
  return digits;
};

/** Open user's email client with a prefilled message and download the PDF for attachment. */
export const shareViaEmail = async (data: ReceiptData) => {
  const subject = `${data.type === "INVOICE" ? "Invoice" : "Receipt"} ${data.invoice_number} — ${COMPANY.name}`;
  const body = buildMessage(data);
  // Trigger PDF download so the admin can attach it manually.
  await triggerDownload(data);
  const href = `mailto:${encodeURIComponent(data.client_email)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body + "\n\n(Please attach the PDF that just downloaded.)")}`;
  window.location.href = href;
};

/** Open WhatsApp Web/app with a prefilled message and download the PDF for attachment. */
export const shareViaWhatsApp = async (data: ReceiptData) => {
  const phone = sanitizeWhatsapp(data.client_whatsapp);
  if (!phone) {
    throw new Error("Invalid WhatsApp number");
  }
  await triggerDownload(data);
  const text = encodeURIComponent(buildMessage(data) + "\n\n(PDF attached separately.)");
  const url = `https://wa.me/${phone}?text=${text}`;
  window.open(url, "_blank", "noopener,noreferrer");
};
