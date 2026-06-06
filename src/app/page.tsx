import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Promotions from "@/components/promotions/Promotions";
import MenuSection from "@/components/menu/MenuSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      {/* <Promotions /> */}
      <MenuSection />
      <Footer />
    </main>
  );
}
