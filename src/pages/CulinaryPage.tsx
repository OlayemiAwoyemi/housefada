import ServicePageLayout from "@/components/ServicePageLayout";
import { Utensils } from "lucide-react";
import overviewImg from "@/assets/service-culinary.jpg";

const CulinaryPage = () => (
  <ServicePageLayout
    tag="Culinary Services"
    title="Gourmet Meals,"
    accent="Crafted Fresh."
    description="From daily meal plans to grand event catering, HouseFada Culinary delivers flavourful, nutritious meals made with the freshest locally sourced ingredients. Experience restaurant-quality dining in the comfort of your own home or at your next event."
    longDescription="HouseFada Culinary brings the art of fine dining to your doorstep — and has been doing so since 2017. Our team of experienced chefs specialises in both rich, authentic Nigerian cuisine and sophisticated international dishes, ensuring every meal is a celebration of flavour, culture, and craftsmanship. We source fresh, premium-quality ingredients daily from trusted local suppliers and farms, and we customise every menu to suit dietary preferences, cultural requirements, health goals, and event themes. Whether you're hosting an intimate dinner party, feeding a corporate team, or simply want nutritious meals prepared for your busy week — HouseFada Culinary delivers excellence on every plate."
    overviewImage={overviewImg}
    icon={Utensils}
    whatsappMessage="Hello HouseFada, I'd like to inquire about your culinary services!"
    features={[
      { title: "Daily Meal Plans", description: "Customised weekly and monthly meal plans delivered fresh to your home or office, designed around your nutritional needs, taste preferences, and household size." },
      { title: "Event Catering", description: "Full-service catering for weddings, corporate events, birthday parties, anniversaries, and celebrations of every scale — from intimate gatherings to grand affairs." },
      { title: "Private Chef Service", description: "Bespoke personal chef experiences for intimate dinners, date nights, and special occasions — bringing a fine-dining restaurant experience to your own kitchen." },
      { title: "Corporate Catering", description: "Reliable daily lunch programs, meeting catering, and conference dining solutions for businesses of all sizes, with consistent quality and on-time delivery." },
      { title: "Pastries & Desserts", description: "Custom-designed cakes, artisanal pastries, and show-stopping dessert tables for every occasion — from birthday celebrations to corporate milestones." },
      { title: "Meal Prep & Delivery", description: "Pre-portioned, chef-prepared healthy meals made fresh and delivered on your schedule — perfect for busy professionals and health-conscious families." },
    ]}
  />
);

export default CulinaryPage;
