import ServicePageLayout from "@/components/ServicePageLayout";
import { Plane } from "lucide-react";
import overviewImg from "@/assets/service-travel.jpg";

const TravelPage = () => (
  <ServicePageLayout
    tag="Travel & Tourism"
    title="Explore the World,"
    accent="Stress-Free."
    description="From flight bookings and visa processing to curated holiday packages and corporate travel management — HouseFada Travel makes every journey seamless, affordable, and unforgettable for individuals, families, and businesses across Nigeria."
    longDescription="HouseFada Travel & Tourism Agency is your gateway to the world. We believe that travel should be exciting, not stressful — and that's exactly the experience we deliver. Since 2017, we've helped thousands of Nigerians explore domestic and international destinations with ease and confidence. Our comprehensive travel services cover everything from flight bookings on all major airlines and hotel reservations at the best rates, to visa application assistance, travel insurance, airport transfers, and fully curated holiday packages. For corporate clients, we offer end-to-end travel management including group bookings, conference travel coordination, and cost-optimised itineraries. Whether you're planning a family vacation to Dubai, a business trip to London, a pilgrimage to Saudi Arabia, a honeymoon in the Maldives, or a weekend getaway within Nigeria — HouseFada Travel handles every detail so you can simply enjoy the journey. Our experienced travel consultants provide personalised advice, competitive pricing, and 24/7 support to ensure your trip goes exactly as planned."
    overviewImage={overviewImg}
    icon={Plane}
    whatsappMessage="Hello HouseFada, I'm interested in your travel and tourism services!"
    features={[
      { title: "Flight Bookings", description: "Competitive fares on all major domestic and international airlines, with flexible booking options, seat selection, and instant e-ticket confirmation for hassle-free air travel." },
      { title: "Visa Processing", description: "Expert visa application assistance for all countries — including document preparation, appointment scheduling, embassy liaison, and step-by-step guidance to maximise approval chances." },
      { title: "Holiday Packages", description: "Curated all-inclusive vacation packages to popular destinations worldwide — covering flights, hotels, tours, meals, and transfers, tailored to your budget and preferences." },
      { title: "Hotel Reservations", description: "Access to thousands of hotels, resorts, and serviced apartments worldwide at the best available rates, with verified reviews and instant booking confirmation." },
      { title: "Corporate Travel", description: "End-to-end corporate travel management including group bookings, conference coordination, travel policy compliance, cost reporting, and dedicated account management." },
      { title: "Travel Insurance", description: "Comprehensive travel insurance coverage for medical emergencies, trip cancellations, lost luggage, and other unforeseen events — ensuring peace of mind on every journey." },
    ]}
  />
);

export default TravelPage;
