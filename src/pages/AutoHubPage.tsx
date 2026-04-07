import ServicePageLayout from "@/components/ServicePageLayout";
import { Car } from "lucide-react";

const AutoHubPage = () => (
  <ServicePageLayout
    tag="AutoHub"
    title="Drive Confidently,"
    accent="Own Smartly."
    description="Your one-stop automotive partner since 2017. New and pre-owned vehicles, expert maintenance, thorough inspections, and flexible financing options — everything you need to stay on the road with confidence."
    longDescription="HouseFada AutoHub is Nigeria's trusted automotive destination for buyers, owners, and fleet managers alike. Since 2017, we've helped thousands of Nigerians find their perfect vehicle, maintain their investment, and drive with complete peace of mind. Whether you're buying your first car, upgrading to a luxury SUV, building a corporate fleet, or simply need routine maintenance — we deliver transparent pricing, certified quality, and personalised service at every step. Every vehicle we sell undergoes a rigorous multi-point inspection by certified mechanics, and our fully equipped workshop is staffed by experienced technicians who treat your car with the same expert care they'd give their own. With flexible financing options, genuine parts, and a commitment to long-term customer relationships, AutoHub isn't just where you buy a car — it's where you find a partner for the road ahead."
    icon={Car}
    whatsappMessage="Hello HouseFada, I'd like to inquire about vehicles or auto services!"
    features={[
      { title: "New Vehicles", description: "Brand-new cars, SUVs, and trucks from trusted manufacturers with full warranty coverage, complete documentation, and competitive pricing." },
      { title: "Pre-Owned Vehicles", description: "Quality-checked, multi-point inspected, certified pre-owned vehicles at competitive prices — each with a detailed history report and condition guarantee." },
      { title: "Auto Maintenance", description: "Scheduled servicing, oil changes, brake checks, tyre rotations, and general repairs performed by certified technicians using genuine parts." },
      { title: "Vehicle Inspection", description: "Comprehensive pre-purchase and safety inspections by certified mechanics, giving you complete confidence before you buy or sell any vehicle." },
      { title: "Flexible Financing", description: "Affordable payment plans, hire-purchase options, and tailored financing solutions designed to fit your budget and get you driving sooner." },
      { title: "Fleet Management", description: "End-to-end fleet solutions for corporate and commercial clients, including procurement, maintenance scheduling, driver management, and cost reporting." },
    ]}
  />
);

export default AutoHubPage;
