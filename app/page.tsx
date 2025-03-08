// components
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Properties from "@/components/Properties";
import Cities from "@/components/Cities";
import ScrollToTop from "@/helpers/ScrollToTop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="overflow-hidden">
        <Hero/>
        <Categories/>
        <Properties/>
        <Cities/>
      </div>
      <Footer/>
      <ScrollToTop/>
    </>
  );
}
