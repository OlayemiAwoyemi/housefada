import ServicePageLayout from "@/components/ServicePageLayout";
import { Sparkles } from "lucide-react";

const CleaningPage = () => (
  <ServicePageLayout
    tag="Cleaning Services"
    title="Spotless Spaces,"
    accent="Every Time."
    description="Premium residential and office cleaning services that leave every corner impeccable. We bring professionalism, reliability, and attention to detail to every job."
    longDescription="At HouseFada Cleaning, we understand that a clean environment is the foundation of productivity and well-being. Our trained professionals use eco-friendly products and systematic approaches to deliver consistent, thorough cleaning results. Whether it's your home, office, or commercial space — we treat every space as if it were our own."
    icon={Sparkles}
    whatsappMessage="Hello HouseFada, I'd like to book a cleaning service!"
    features={[
      { title: "Residential Cleaning", description: "Deep cleaning, regular maintenance, and move-in/move-out cleaning for homes and apartments." },
      { title: "Office & Commercial", description: "Professional workspace cleaning with flexible scheduling to minimize disruption." },
      { title: "Deep Cleaning", description: "Intensive top-to-bottom cleaning for spaces that need extra attention and care." },
      { title: "Post-Construction", description: "Specialized cleaning after renovations or construction projects." },
      { title: "Fumigation & Pest Control", description: "Comprehensive pest management solutions to keep your space safe and hygienic." },
      { title: "Laundry Services", description: "Professional wash, iron, and fold services for individuals and businesses." },
    ]}
  />
);

export default CleaningPage;
