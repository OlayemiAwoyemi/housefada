import ServicePageLayout from "@/components/ServicePageLayout";
import { Utensils } from "lucide-react";

const CulinaryPage = () => (
  <ServicePageLayout
    tag="Culinary Services"
    title="Gourmet Meals,"
    accent="Crafted Fresh."
    description="From daily meal plans to grand event catering, our culinary team delivers flavourful, nutritious meals made with the freshest ingredients."
    longDescription="HouseFada Culinary brings the art of fine dining to your doorstep. Our team of experienced chefs specializes in both local Nigerian cuisine and international dishes, ensuring every meal is a celebration of flavour. We source fresh, quality ingredients daily and customize menus to suit dietary preferences, cultural requirements, and event themes."
    icon={Utensils}
    whatsappMessage="Hello HouseFada, I'd like to inquire about your culinary services!"
    features={[
      { title: "Daily Meal Plans", description: "Customized weekly and monthly meal plans delivered fresh to your home or office." },
      { title: "Event Catering", description: "Full-service catering for weddings, corporate events, parties, and celebrations." },
      { title: "Private Chef Service", description: "Personal chef experiences for intimate dinners and special occasions." },
      { title: "Corporate Catering", description: "Reliable lunch programs and meeting catering for businesses of all sizes." },
      { title: "Pastries & Desserts", description: "Custom cakes, pastries, and dessert tables for every occasion." },
      { title: "Meal Prep & Delivery", description: "Pre-portioned, healthy meals prepared and delivered on your schedule." },
    ]}
  />
);

export default CulinaryPage;
