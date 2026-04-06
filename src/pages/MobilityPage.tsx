import ServicePageLayout from "@/components/ServicePageLayout";
import { Truck } from "lucide-react";

const MobilityPage = () => (
  <ServicePageLayout
    tag="Mobility Solutions"
    title="Move Smarter,"
    accent="Arrive Better."
    description="Executive rides, airport transfers, and corporate fleet services delivering safe, comfortable, and reliable transportation across Nigeria."
    longDescription="HouseFada Mobility redefines transportation with a fleet of well-maintained vehicles and professional drivers. Whether you need a daily commute solution, airport pickup, intercity travel, or a corporate fleet — we ensure punctuality, comfort, and safety on every trip. Our drivers are trained, vetted, and committed to exceptional service."
    icon={Truck}
    whatsappMessage="Hello HouseFada, I'd like to book a ride or inquire about mobility services!"
    features={[
      { title: "Executive Rides", description: "Premium sedan and SUV services for business executives and VIP clients." },
      { title: "Airport Transfers", description: "Reliable pickup and drop-off services to and from all major airports." },
      { title: "Corporate Fleet", description: "Dedicated fleet solutions for organizations with regular transportation needs." },
      { title: "Intercity Travel", description: "Comfortable long-distance travel between major Nigerian cities." },
      { title: "Event Transportation", description: "Coordinated transport for weddings, conferences, and large gatherings." },
      { title: "Daily Commute Plans", description: "Affordable subscription-based commute packages for professionals." },
    ]}
  />
);

export default MobilityPage;
