import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { formatNaira } from "./services";

export interface ReceiptItem {
  item_name: string;
  quantity: number;
  unit_price: number;
}

export interface ReceiptData {
  type: "INVOICE" | "RECEIPT";
  invoice_number: string;
  client_name: string;
  client_email: string;
  client_whatsapp: string;
  service_type: string;
  status: string;
  notes?: string | null;
  created_at: string;
  paid_at?: string | null;
  items: ReceiptItem[];
  total_amount: number;
}

export const generateReceiptPdf = (data: ReceiptData) => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();

  // Header band
  doc.setFillColor(15, 15, 15);
  doc.rect(0, 0, pageW, 32, "F");
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("SatGo Services", 15, 16);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Premium Lifestyle & Business Solutions  •  Nigeria", 15, 23);

  // Document title
  doc.setTextColor(231, 0, 70);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(data.type, pageW - 15, 16, { align: "right" });
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`#${data.invoice_number}`, pageW - 15, 23, { align: "right" });

  // Meta block
  doc.setTextColor(20, 20, 20);
  let y = 44;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Billed To", 15, y);
  doc.text(data.type === "RECEIPT" ? "Payment Details" : "Invoice Details", pageW / 2, y);

  y += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(data.client_name, 15, y);
  doc.text(`Date: ${new Date(data.created_at).toLocaleDateString("en-NG")}`, pageW / 2, y);
  y += 5;
  doc.text(data.client_email, 15, y);
  doc.text(`Service: ${data.service_type}`, pageW / 2, y);
  y += 5;
  doc.text(`WhatsApp: ${data.client_whatsapp}`, 15, y);
  doc.text(`Status: ${data.status.replace("_", " ").toUpperCase()}`, pageW / 2, y);
  if (data.type === "RECEIPT" && data.paid_at) {
    y += 5;
    doc.text("", 15, y);
    doc.text(`Paid: ${new Date(data.paid_at).toLocaleString("en-NG")}`, pageW / 2, y);
  }

  // Items table
  autoTable(doc, {
    startY: y + 10,
    head: [["#", "Item / Service", "Qty", "Unit Price", "Subtotal"]],
    body: data.items.map((it, i) => [
      String(i + 1),
      it.item_name,
      String(it.quantity),
      formatNaira(it.unit_price),
      formatNaira(it.quantity * it.unit_price),
    ]),
    headStyles: { fillColor: [15, 15, 15], textColor: 255 },
    styles: { fontSize: 10, cellPadding: 3 },
    columnStyles: {
      0: { cellWidth: 12 },
      2: { halign: "right", cellWidth: 18 },
      3: { halign: "right", cellWidth: 35 },
      4: { halign: "right", cellWidth: 35 },
    },
  });

  // Total
  // @ts-expect-error lastAutoTable is added by autotable
  const finalY: number = doc.lastAutoTable.finalY + 8;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("TOTAL", pageW - 70, finalY);
  doc.setTextColor(231, 0, 70);
  doc.text(formatNaira(data.total_amount), pageW - 15, finalY, { align: "right" });

  // Notes
  doc.setTextColor(20, 20, 20);
  if (data.notes) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Notes", 15, finalY + 14);
    doc.setFont("helvetica", "normal");
    doc.text(doc.splitTextToSize(data.notes, pageW - 30), 15, finalY + 20);
  }

  // Footer
  const ph = doc.internal.pageSize.getHeight();
  doc.setDrawColor(220);
  doc.line(15, ph - 22, pageW - 15, ph - 22);
  doc.setFontSize(9);
  doc.setTextColor(110);
  doc.text(
    data.type === "RECEIPT"
      ? "Thank you for your payment. We appreciate your business."
      : "Please make payment by the agreed date. Quote the invoice number on transfer.",
    pageW / 2,
    ph - 15,
    { align: "center" }
  );
  doc.text("SatGo Services  •  satgo.ng  •  +234 000 0000 000", pageW / 2, ph - 10, { align: "center" });

  doc.save(`${data.type.toLowerCase()}-${data.invoice_number}.pdf`);
};
