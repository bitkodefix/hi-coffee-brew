import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import CTA from "@/sections/CTA";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Products />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
