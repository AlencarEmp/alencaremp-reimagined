import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FrentesSection from "@/components/FrentesSection";
import PorqueContainersSection from "@/components/PorqueContainersSection";
import FinanciamentoSection from "@/components/FinanciamentoSection";
import ProcessoSection from "@/components/ProcessoSection";
import PortfolioSection from "@/components/PortfolioSection";
import SimuladorSection from "@/components/SimuladorSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import TecnologiasSection from "@/components/TecnologiasSection";
import FAQSection from "@/components/FAQSection";
import ContainersSection from "@/components/ContainersSection";
import CreditoSection from "@/components/CreditoSection";
import SobreSection from "@/components/SobreSection";
import ContatoSection from "@/components/ContatoSection";
import PoliticaSection from "@/components/PoliticaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FrentesSection />
        <PorqueContainersSection />
        <FinanciamentoSection />
        <ProcessoSection />
        <PortfolioSection />
        <SimuladorSection />
        <DepoimentosSection />
        <TecnologiasSection />
        <FAQSection />
        <ContainersSection />
        <CreditoSection />
        <SobreSection />
        <ContatoSection />
        <PoliticaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
