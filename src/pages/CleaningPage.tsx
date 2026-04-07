import ServicePageLayout from "@/components/ServicePageLayout";
import { Sparkles } from "lucide-react";

const CleaningPage = () => (
  <ServicePageLayout
    tag="Cleaning Services"
    title="Spotless Spaces,"
    accent="Every Time."
    description="Since 2017, HouseFada Cleaning has set the gold standard for residential and commercial cleaning across Nigeria. Our trained professionals bring professionalism, reliability, and meticulous attention to detail to every job — leaving your space immaculate and refreshed."
    longDescription="At HouseFada Cleaning, we understand that a clean environment is the foundation of productivity, health, and well-being. Our team of rigorously trained cleaning professionals uses eco-friendly, hospital-grade products and systematic, proven approaches to deliver consistent, thorough results every single time. Whether it's a cozy apartment, a sprawling family home, a corporate office, or a retail space — we treat every environment as if it were our own. With flexible scheduling, transparent pricing, and a satisfaction guarantee, we've earned the trust of thousands of clients across Nigeria since our founding in 2017. Our commitment goes beyond surface-level cleanliness; we create spaces that feel welcoming, hygienic, and truly comfortable."
    icon={Sparkles}
    whatsappMessage="Hello HouseFada, I'd like to book a cleaning service!"
    features={[
      { title: "Residential Cleaning", description: "Comprehensive deep cleaning, regular weekly maintenance, and thorough move-in/move-out cleaning for homes, apartments, and estates of any size." },
      { title: "Office & Commercial", description: "Professional workspace cleaning with flexible after-hours scheduling, ensuring minimal disruption to your business operations while maintaining pristine environments." },
      { title: "Deep Cleaning", description: "Intensive top-to-bottom cleaning for spaces that need extra attention — including kitchens, bathrooms, carpets, upholstery, and hard-to-reach areas." },
      { title: "Post-Construction", description: "Specialized cleaning after renovations or construction projects, removing dust, debris, and residue to reveal the beauty of your newly completed space." },
      { title: "Fumigation & Pest Control", description: "Comprehensive pest management solutions using safe, effective treatments to keep your home or office free from rodents, insects, and other pests." },
      { title: "Laundry Services", description: "Professional wash, iron, fold, and delivery services for individuals, families, and businesses — with special care for delicate fabrics and garments." },
    ]}
  />
);

export default CleaningPage;
