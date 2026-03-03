import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FrentesSection from "@/components/FrentesSection";
import GarantiaSection from "@/components/GarantiaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FrentesSection />
        <GarantiaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
