// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Properties from "@/components/Properties";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="overflow-hidden">
        <Hero/>
        <Categories/>
        <Properties/>
      </div>
      <Footer/>      
    </>
  );
}
