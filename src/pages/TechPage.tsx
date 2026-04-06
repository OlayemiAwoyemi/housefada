import ServicePageLayout from "@/components/ServicePageLayout";
import { Cpu } from "lucide-react";

const TechPage = () => (
  <ServicePageLayout
    tag="Tech Innovations"
    title="Smart Solutions,"
    accent="Future Ready."
    description="Latest gadgets, smart home setups, IT infrastructure services, and expert tech support to power your digital life."
    longDescription="HouseFada Tech Innovations keeps you ahead of the curve. From sourcing the latest consumer electronics to setting up smart home systems and providing enterprise IT support — we combine product expertise with hands-on service. Our team stays current with emerging technologies to recommend the best solutions for your needs and budget."
    icon={Cpu}
    whatsappMessage="Hello HouseFada, I'd like to inquire about tech products or IT services!"
    features={[
      { title: "Consumer Electronics", description: "Latest smartphones, laptops, tablets, and accessories from top brands." },
      { title: "Smart Home Setup", description: "Complete smart home installation including lighting, security, and automation." },
      { title: "IT Support", description: "On-site and remote technical support for individuals and businesses." },
      { title: "Networking & Infrastructure", description: "Office network setup, server configuration, and connectivity solutions." },
      { title: "Device Repair", description: "Expert repair services for phones, laptops, and other electronics." },
      { title: "Tech Consultation", description: "Personalized advice on technology purchases and digital transformation." },
    ]}
  />
);

export default TechPage;
