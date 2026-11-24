import Header from "@/components/GlobalComponents/Header/Header";
import SubHero from "@/components/GlobalComponents/SubHero";
import ProductSection from "@/components/ProductSite/ProductSection";
import ProductSiteCategoriesContainer from "@/components/ProductSite/ProductSiteCategoriesContainer";

export default function ProductSite() {
  return (
    <div>
      <Header />
      <SubHero />
      <ProductSiteCategoriesContainer />
      <ProductSection />
    </div>
  );
}
