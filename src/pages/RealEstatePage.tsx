import ServicePageLayout from "@/components/ServicePageLayout";
import { Building2 } from "lucide-react";
import overviewImg from "@/assets/service-realestate.jpg";

const RealEstatePage = () => (
  <ServicePageLayout
    tag="Real Estate & Construction"
    title="Building Dreams,"
    accent="Brick by Brick."
    description="From land acquisition and architectural design to full-scale construction, renovation, and bespoke interior decoration — HouseFada Real Estate delivers end-to-end property solutions that transform visions into stunning realities across Nigeria."
    longDescription="At HouseFada Real Estate, we understand that property is more than an investment — it's where life happens. Since 2017, we've helped hundreds of Nigerians navigate the complexities of real estate with confidence and clarity. Our integrated approach covers every stage of the property journey: sourcing prime land, crafting architectural blueprints, managing construction from foundation to finishing, executing tasteful renovations, and designing interiors that reflect your personality and lifestyle. We work with a trusted network of licensed architects, structural engineers, quantity surveyors, and skilled artisans who share our commitment to quality, safety, and timely delivery. Whether you're building your first home, developing a commercial complex, renovating an inherited property, or simply refreshing your living space with modern interior touches — HouseFada brings professionalism, transparency, and passion to every project."
    overviewImage={overviewImg}
    icon={Building2}
    whatsappMessage="Hello HouseFada, I'm interested in your real estate and construction services!"
    features={[
      { title: "Land Sourcing & Acquisition", description: "We help you find and secure prime plots of land in strategic locations across Nigeria, handling due diligence, documentation, and legal verification to protect your investment." },
      { title: "Architectural Design", description: "Our partner architects create stunning, functional designs tailored to your vision — from modern minimalist homes to grand commercial structures, all compliant with local building codes." },
      { title: "Building & Construction", description: "Full-scale construction management from foundation to roofing, finishing, and handover. We use quality materials, skilled labour, and rigorous project timelines to deliver on budget." },
      { title: "Renovation & Remodelling", description: "Breathe new life into existing properties with our comprehensive renovation services — structural upgrades, modern fittings, plumbing, electrical rewiring, and complete makeovers." },
      { title: "Interior Decoration", description: "Transform your space with bespoke interior design — from furniture selection and custom joinery to lighting, colour schemes, window treatments, and finishing touches that elevate any room." },
      { title: "Property Management", description: "Ongoing property maintenance, tenant management, facility upkeep, and value-preservation services for residential and commercial property owners across Nigeria." },
    ]}
  />
);

export default RealEstatePage;
