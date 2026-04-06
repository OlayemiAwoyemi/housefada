import ServicePageLayout from "@/components/ServicePageLayout";
import { Leaf } from "lucide-react";

const AgroFreshPage = () => (
  <ServicePageLayout
    tag="AgroFresh"
    title="Farm Fresh,"
    accent="Delivered Daily."
    description="Premium farm-fresh vegetables, fruits, and grains sourced directly from trusted farms and delivered straight to your doorstep."
    longDescription="HouseFada AgroFresh bridges the gap between Nigeria's farms and your kitchen. We partner with vetted local farmers to bring you the freshest, chemical-free produce available. Every item is carefully selected, quality-checked, and delivered in eco-friendly packaging to preserve freshness. Eat better, support local agriculture, and enjoy the convenience of doorstep delivery."
    icon={Leaf}
    whatsappMessage="Hello HouseFada, I'd like to order fresh produce from AgroFresh!"
    features={[
      { title: "Fresh Vegetables", description: "Locally sourced, seasonal vegetables delivered crisp and ready to cook." },
      { title: "Fruits & Berries", description: "Hand-picked tropical and seasonal fruits for your home and business." },
      { title: "Grains & Cereals", description: "Premium rice, beans, maize, and other staples sourced from trusted farms." },
      { title: "Subscription Boxes", description: "Weekly or monthly produce boxes customized to your household size and preferences." },
      { title: "Bulk & Wholesale", description: "Large-quantity orders for restaurants, hotels, and event planners." },
      { title: "Organic Options", description: "Certified organic produce for health-conscious consumers." },
    ]}
  />
);

export default AgroFreshPage;
