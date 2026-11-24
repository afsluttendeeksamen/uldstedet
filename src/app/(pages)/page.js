import Header from "@/components/GlobalComponents/Header/Header";
import CategoriesContainer from "@/components/Home/CategoriesContainer";
import Hero from "@/components/Home/Hero";
import NewsContainer from "@/components/Home/NewsContainer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <NewsContainer />
      <CategoriesContainer />
    </div>
  );
}
