import ServicePageLayout from "@/components/ServicePageLayout";
import { Truck } from "lucide-react";
import overviewImg from "@/assets/service-mobility.jpg";

const MobilityPage = () => (
  <ServicePageLayout
    tag="Mobility Solutions"
    title="Move Smarter,"
    accent="Arrive Better."
    description="Executive rides, airport transfers, intercity travel, and corporate fleet services delivering safe, comfortable, and reliable transportation across Nigeria. Travel with confidence, every trip."
    longDescription="HouseFada Mobility redefines transportation in Nigeria with a fleet of meticulously maintained vehicles and a team of professionally trained, background-checked drivers. Since 2017, we've been the trusted mobility partner for executives, families, and organisations across the country. Whether you need a daily commute solution, a seamless airport pickup, comfortable intercity travel, or a full corporate fleet — we deliver punctuality, comfort, and safety on every single trip. Our vehicles are regularly serviced, fully insured, and equipped with modern amenities to make your journey as pleasant as your destination."
    overviewImage={overviewImg}
    icon={Truck}
    whatsappMessage="Hello HouseFada, I'd like to book a ride or inquire about mobility services!"
    features={[
      { title: "Executive Rides", description: "Premium sedan and SUV services for business executives, diplomats, and VIP clients — featuring professional chauffeurs and luxury vehicles." },
      { title: "Airport Transfers", description: "Reliable, punctual pickup and drop-off services to and from all major airports across Nigeria, with flight monitoring and flexible timing." },
      { title: "Corporate Fleet", description: "Dedicated fleet solutions for organisations with regular transportation needs, including branded vehicles, assigned drivers, and monthly reporting." },
      { title: "Intercity Travel", description: "Comfortable, safe long-distance travel between major Nigerian cities in air-conditioned vehicles with experienced drivers who know the routes." },
      { title: "Event Transportation", description: "Coordinated multi-vehicle transport for weddings, conferences, product launches, and large gatherings — planned to the last detail." },
      { title: "Daily Commute Plans", description: "Affordable subscription-based commute packages for professionals, offering consistent pick-up and drop-off times with a dedicated driver." },
    ]}
  />
);

export default MobilityPage;
