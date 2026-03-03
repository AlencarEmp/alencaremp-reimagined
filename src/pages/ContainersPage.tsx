import Header from "@/components/Header";
import PorqueContainersSection from "@/components/PorqueContainersSection";
import ContainersSection from "@/components/ContainersSection";
import PortfolioSection from "@/components/PortfolioSection";
import TecnologiasSection from "@/components/TecnologiasSection";
import Footer from "@/components/Footer";

const ContainersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PorqueContainersSection />
        <ContainersSection />
        <PortfolioSection />
        <TecnologiasSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContainersPage;
