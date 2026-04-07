import ServicePageLayout from "@/components/ServicePageLayout";
import { Leaf } from "lucide-react";

const AgroFreshPage = () => (
  <ServicePageLayout
    tag="AgroFresh"
    title="Farm Fresh,"
    accent="Delivered Daily."
    description="Premium farm-fresh vegetables, fruits, grains, and spices sourced directly from trusted Nigerian farms and delivered straight to your doorstep. Eat better, live healthier — with complete traceability from farm to table."
    longDescription="HouseFada AgroFresh bridges the gap between Nigeria's richest farmlands and your kitchen table. Since 2017, we've built direct partnerships with vetted local farmers and agricultural cooperatives to bring you the freshest, chemical-free produce available anywhere in the country. Every item is carefully hand-selected, quality-checked by our trained team, and delivered in eco-friendly, temperature-controlled packaging to preserve maximum freshness and nutritional value. Whether you're a home cook passionate about quality ingredients, a restaurant chef demanding consistency, or a large-scale caterer needing reliable supply — AgroFresh delivers. We're not just a delivery service; we're a movement to support local agriculture, reduce food waste, and make premium produce accessible to every Nigerian household."
    icon={Leaf}
    whatsappMessage="Hello HouseFada, I'd like to order fresh produce from AgroFresh!"
    features={[
      { title: "Fresh Vegetables", description: "Locally sourced, seasonal vegetables harvested at peak ripeness and delivered crisp, vibrant, and ready to cook — from leafy greens to root vegetables." },
      { title: "Fruits & Berries", description: "Hand-picked tropical and seasonal fruits including mangoes, pineapples, pawpaw, oranges, and more — delivered at perfect ripeness for maximum flavour." },
      { title: "Grains & Cereals", description: "Premium rice, beans, maize, millet, and other staple grains sourced from trusted farms with rigorous quality control and proper storage." },
      { title: "Subscription Boxes", description: "Curated weekly or monthly produce boxes customised to your household size, dietary preferences, and cooking style — with seasonal surprises included." },
      { title: "Bulk & Wholesale", description: "Large-quantity orders for restaurants, hotels, event planners, and corporate kitchens — with dedicated account management and priority delivery." },
      { title: "Organic Options", description: "Certified organic produce for health-conscious consumers, grown without synthetic pesticides or fertilisers on verified organic farms across Nigeria." },
    ]}
  />
);

export default AgroFreshPage;
