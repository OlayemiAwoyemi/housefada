import ServicePageLayout from "@/components/ServicePageLayout";
import { Cpu } from "lucide-react";

const TechPage = () => (
  <ServicePageLayout
    tag="Tech Innovations"
    title="Smart Solutions,"
    accent="Future Ready."
    description="From the latest consumer gadgets to enterprise IT infrastructure, HouseFada Tech Innovations delivers cutting-edge technology solutions for homes and businesses across Nigeria. Powering your digital life since 2017."
    longDescription="HouseFada Tech Innovations keeps you ahead of the curve in an ever-evolving digital world. Since 2017, we've been helping individuals, families, and businesses across Nigeria harness the power of technology to work smarter, live better, and stay connected. From sourcing the latest smartphones and laptops to designing and installing complete smart home ecosystems, from providing on-demand IT support to building robust enterprise network infrastructure — we combine deep product expertise with hands-on, white-glove service. Our team of certified technicians and consultants stays current with emerging technologies, industry trends, and best practices to recommend the ideal solutions for your unique needs and budget. Whether you're a tech enthusiast, a startup founder, or the IT director of a large corporation, HouseFada Tech Innovations is your trusted technology partner."
    icon={Cpu}
    whatsappMessage="Hello HouseFada, I'd like to inquire about tech products or IT services!"
    features={[
      { title: "Consumer Electronics", description: "Latest smartphones, laptops, tablets, wearables, and accessories from top global brands — sourced directly and competitively priced with full warranty." },
      { title: "Smart Home Setup", description: "Complete smart home design and installation including automated lighting, security cameras, voice assistants, climate control, and entertainment systems." },
      { title: "IT Support", description: "Responsive on-site and remote technical support for individuals and businesses — from troubleshooting and virus removal to system optimisation and data recovery." },
      { title: "Networking & Infrastructure", description: "Professional office network design, server configuration, Wi-Fi optimisation, structured cabling, and cloud connectivity solutions for businesses of all sizes." },
      { title: "Device Repair", description: "Expert diagnostic and repair services for smartphones, laptops, tablets, and other electronics — with quick turnaround times and genuine replacement parts." },
      { title: "Tech Consultation", description: "Personalised advisory services on technology purchases, digital transformation strategy, cybersecurity best practices, and IT budget planning for organisations." },
    ]}
  />
);

export default TechPage;
