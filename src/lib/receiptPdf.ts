import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { BANK_ACCOUNTS, COMPANY, SERVICE_TYPES, formatNaira } from "./services";
import logoUrl from "@/assets/housefada-logo.png";

export interface ReceiptItem {
  item_name: string;
  quantity: number;
  unit_price: number;
  service_type?: string;
}

export interface ReceiptData {
  type: "INVOICE" | "RECEIPT";
  invoice_number: string;
  client_name: string;
  client_email: string;
  client_whatsapp: string;
  service_type: string; // primary / legacy
  status: string;
  notes?: string | null;
  created_at: string;
  paid_at?: string | null;
  items: ReceiptItem[];
  total_amount: number;
}

const loadImage = (src: string): Promise<{ dataUrl: string; w: number; h: number }> =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("no ctx"));
      ctx.drawImage(img, 0, 0);
      resolve({ dataUrl: canvas.toDataURL("image/png"), w: img.naturalWidth, h: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });

export const generateReceiptPdf = async (data: ReceiptData): Promise<Blob> => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 15;

  // ==== Header band ====
  const headerH = 40;
  doc.setFillColor(15, 15, 15);
  doc.rect(0, 0, pageW, headerH, "F");

  // Logo only (wordmark is baked into the asset)
  try {
    const logo = await loadImage(logoUrl);
    const logoH = 18;
    const logoW = (logo.w / logo.h) * logoH;
    doc.addImage(logo.dataUrl, "PNG", margin, (headerH - logoH) / 2, logoW, logoH);
  } catch {
    // Fallback to text logo
    doc.setTextColor(255, 255, 255);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("HouseFada", margin, 22);
  }

  // Document title (right side of header)
  doc.setTextColor(231, 0, 70);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text(data.type, pageW - margin, 20, { align: "right" });
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(`#${data.invoice_number}`, pageW - margin, 28, { align: "right" });

  // ==== Meta block ====
  doc.setTextColor(20, 20, 20);
  let y = 52;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Billed To", margin, y);
  doc.text(data.type === "RECEIPT" ? "Payment Details" : "Invoice Details", pageW / 2, y);

  y += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text(data.client_name, margin, y);
  doc.text(`Date: ${new Date(data.created_at).toLocaleDateString("en-NG")}`, pageW / 2, y);
  y += 5;
  doc.text(data.client_email, margin, y);
  doc.text(`Service: ${data.service_type}`, pageW / 2, y);
  y += 5;
  doc.text(`WhatsApp: ${data.client_whatsapp}`, margin, y);
  doc.text(`Status: ${data.status.replace("_", " ").toUpperCase()}`, pageW / 2, y);
  if (data.type === "RECEIPT" && data.paid_at) {
    y += 5;
    doc.text(`Paid: ${new Date(data.paid_at).toLocaleString("en-NG")}`, pageW / 2, y);
  }

  // ==== Items grouped by service ====
  // Group items by service_type, preserving insertion order
  const groups = new Map<string, ReceiptItem[]>();
  for (const it of data.items) {
    const key = it.service_type || data.service_type || "Other";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(it);
  }

  // Build a single table with section header rows so columns stay perfectly aligned.
  const body: Array<Array<{ content: string; colSpan?: number; styles?: object }>> = [];
  let counter = 1;
  for (const [svc, list] of groups) {
    // Service header row spans all 5 cols
    body.push([
      {
        content: svc.toUpperCase(),
        colSpan: 5,
        styles: {
          fillColor: [243, 244, 246],
          textColor: [55, 65, 81],
          fontStyle: "bold",
          fontSize: 9,
          halign: "left",
        },
      },
    ]);
    for (const it of list) {
      body.push([
        { content: String(counter++) },
        { content: it.item_name },
        { content: String(it.quantity) },
        { content: formatNaira(it.unit_price) },
        { content: formatNaira((it.quantity || 0) * (it.unit_price || 0)) },
      ]);
    }
  }

  autoTable(doc, {
    startY: y + 10,
    margin: { left: margin, right: margin },
    head: [["#", "Item / Service", "Qty", "Unit Price", "Subtotal"]],
    body: body as unknown as (string | number)[][],
    headStyles: {
      fillColor: [15, 15, 15],
      textColor: 255,
      fontStyle: "bold",
      fontSize: 10,
      halign: "left",
    },
    styles: {
      fontSize: 10,
      cellPadding: 3,
      font: "helvetica",
      overflow: "linebreak",
    },
    columnStyles: {
      0: { cellWidth: 10, halign: "left" },
      1: { cellWidth: "auto", halign: "left" },
      2: { cellWidth: 16, halign: "left" },
      3: { cellWidth: 32, halign: "left" },
      4: { cellWidth: 32, halign: "left" },
    },
    tableWidth: pageW - margin * 2,
  });

  // ==== Total ====
  // @ts-expect-error lastAutoTable is added by autotable
  let finalY: number = doc.lastAutoTable.finalY + 8;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.setTextColor(20, 20, 20);
  doc.text("TOTAL", pageW - margin - 50, finalY);
  doc.setTextColor(231, 0, 70);
  doc.text(formatNaira(data.total_amount), pageW - margin, finalY, { align: "right" });

  // ==== Notes ====
  doc.setTextColor(20, 20, 20);
  if (data.notes) {
    finalY += 12;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Notes", margin, finalY);
    doc.setFont("helvetica", "normal");
    const wrapped = doc.splitTextToSize(data.notes, pageW - margin * 2);
    doc.text(wrapped, margin, finalY + 5);
    finalY += 5 + wrapped.length * 4;
  }

  // ==== Payment Instructions (only on invoices, but useful on receipt too as record) ====
  if (data.type === "INVOICE") {
    finalY += 10;
    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(226, 232, 240);
    const boxH = 26;
    doc.roundedRect(margin, finalY, pageW - margin * 2, boxH, 2, 2, "FD");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text("Payment Instructions", margin + 4, finalY + 6);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    doc.text("Please transfer to either of the following accounts and quote the invoice number:", margin + 4, finalY + 11);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    BANK_ACCOUNTS.forEach((acc, i) => {
      doc.text(`${acc.bank} — ${acc.number} — ${acc.name}`, margin + 4, finalY + 17 + i * 5);
    });
    finalY += boxH;
  }

  // ==== Services list (checkbox style) ====
  finalY += 10;
  const ph = doc.internal.pageSize.getHeight();
  if (finalY > ph - 60) {
    doc.addPage();
    finalY = 20;
  }
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text("HouseFada Service Catalogue", margin, finalY);
  finalY += 5;

  const allServices = SERVICE_TYPES.filter((s) => s !== "Other");
  const activeServices = new Set<string>();
  data.items.forEach((it) => it.service_type && activeServices.add(it.service_type));
  if (activeServices.size === 0 && data.service_type) {
    data.service_type.split(",").forEach((s) => activeServices.add(s.trim()));
  }

  const colWidth = (pageW - margin * 2) / 2;
  const rowH = 7;
  const boxSize = 3.6;
  const half = Math.ceil(allServices.length / 2);

  allServices.forEach((s, i) => {
    const col = i < half ? 0 : 1;
    const row = i < half ? i : i - half;
    const x = margin + col * colWidth;
    const yy = finalY + 4 + row * rowH;
    const isCurrent = activeServices.has(s);

    // Square box
    if (isCurrent) {
      doc.setFillColor(231, 0, 70); // accent fill
      doc.setDrawColor(231, 0, 70);
      doc.roundedRect(x, yy - boxSize + 0.4, boxSize, boxSize, 0.6, 0.6, "FD");
      // Inner check tick
      doc.setDrawColor(255, 255, 255);
      doc.setLineWidth(0.5);
      doc.line(x + 0.7, yy - 1.2, x + 1.5, yy - 0.4);
      doc.line(x + 1.5, yy - 0.4, x + 3.0, yy - 2.6);
      doc.setLineWidth(0.2);
      // Active label
      doc.setFont("helvetica", "bold");
      doc.setTextColor(231, 0, 70);
    } else {
      doc.setDrawColor(180, 188, 200);
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(x, yy - boxSize + 0.4, boxSize, boxSize, 0.6, 0.6, "FD");
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 116, 139);
    }
    doc.setFontSize(9);
    doc.text(s, x + boxSize + 2.2, yy);
  });
  finalY += 4 + half * rowH;

  // ==== Footer ====
  const footerY = ph - 22;
  doc.setDrawColor(220);
  doc.line(margin, footerY, pageW - margin, footerY);
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
  doc.text(
    `${COMPANY.name}  •  ${COMPANY.email}  •  ${COMPANY.phone}`,
    pageW / 2,
    ph - 10,
    { align: "center" }
  );

  return doc.output("blob");
};

export const downloadReceiptPdf = async (data: ReceiptData) => {
  const blob = await generateReceiptPdf(data);
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${data.type.toLowerCase()}-${data.invoice_number}.pdf`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};
