import ServicePageLayout from "@/components/ServicePageLayout";
import { Car } from "lucide-react";

const AutoHubPage = () => (
  <ServicePageLayout
    tag="AutoHub"
    title="Drive Confidently,"
    accent="Own Smartly."
    description="New and pre-owned vehicles, expert auto maintenance, thorough inspections, and flexible financing options to keep you on the road."
    longDescription="HouseFada AutoHub is your one-stop automotive partner. Whether you're buying your first car, upgrading your fleet, or need reliable maintenance — we deliver transparent pricing, certified quality, and personalized service. Every vehicle we sell undergoes rigorous inspection, and our workshop is staffed by experienced technicians who treat your car with expert care."
    icon={Car}
    whatsappMessage="Hello HouseFada, I'd like to inquire about vehicles or auto services!"
    features={[
      { title: "New Vehicles", description: "Brand-new cars from trusted manufacturers with full warranty and documentation." },
      { title: "Pre-Owned Vehicles", description: "Quality-checked, certified pre-owned vehicles at competitive prices." },
      { title: "Auto Maintenance", description: "Scheduled servicing, oil changes, brake checks, and general repairs." },
      { title: "Vehicle Inspection", description: "Comprehensive pre-purchase and safety inspections by certified mechanics." },
      { title: "Flexible Financing", description: "Affordable payment plans and financing options to suit your budget." },
      { title: "Fleet Management", description: "End-to-end fleet solutions for corporate and commercial clients." },
    ]}
  />
);

export default AutoHubPage;
