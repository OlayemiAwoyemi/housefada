import ServicePageLayout from "@/components/ServicePageLayout";
import { BookOpen } from "lucide-react";
import overviewImg from "@/assets/service-publishing.jpg";

const PublishingPage = () => (
  <ServicePageLayout
    tag="Publishing & Printing"
    title="Your Words,"
    accent="Beautifully Printed."
    description="From manuscript to masterpiece — HouseFada Publishing offers complete book publishing, commercial printing, branded stationery, and print media solutions that bring your ideas to life with precision, quality, and style."
    longDescription="HouseFada Publishing is your trusted partner for every stage of the print and publishing journey. Whether you're an aspiring author with a manuscript ready for the world, a business seeking premium branded stationery, or an organisation in need of large-format commercial printing — we deliver exceptional results every time. Our publishing arm provides end-to-end support including manuscript editing, proofreading, cover design, ISBN registration, typesetting, and distribution guidance. For commercial printing, we offer high-quality offset and digital printing for brochures, flyers, banners, business cards, calendars, magazines, and more. Our stationery line includes custom letterheads, envelopes, notepads, journals, and corporate gift sets — all designed and produced to reflect your brand's identity. With state-of-the-art printing technology and a team of experienced designers, editors, and production specialists, HouseFada Publishing ensures that every project meets the highest standards of quality, delivered on time and within budget."
    overviewImage={overviewImg}
    icon={BookOpen}
    whatsappMessage="Hello HouseFada, I'm interested in your publishing and printing services!"
    features={[
      { title: "Book Publishing", description: "Complete publishing services from manuscript editing and proofreading to cover design, typesetting, ISBN registration, printing, and distribution support for authors across Nigeria." },
      { title: "Commercial Printing", description: "High-quality offset and digital printing for brochures, flyers, posters, banners, catalogues, magazines, annual reports, and all forms of marketing collateral." },
      { title: "Branded Stationery", description: "Custom-designed business cards, letterheads, envelopes, compliment slips, notepads, and corporate gift sets that elevate your brand's professional image." },
      { title: "Design & Typesetting", description: "Professional graphic design and layout services for books, magazines, newsletters, and corporate publications — ensuring visually appealing, reader-friendly formats." },
      { title: "Large Format Printing", description: "Eye-catching banners, roll-up stands, billboards, vehicle wraps, and exhibition materials printed with vibrant colours and durable finishes for maximum impact." },
      { title: "Packaging & Labels", description: "Custom product packaging, labels, and branded wrapping solutions designed to make your products stand out on shelves and leave lasting impressions." },
    ]}
  />
);

export default PublishingPage;
