import Header from "@/components/Header";
import FinanciamentoSection from "@/components/FinanciamentoSection";
import SimuladorSection from "@/components/SimuladorSection";
import CreditoSection from "@/components/CreditoSection";
import Footer from "@/components/Footer";

const CreditoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <FinanciamentoSection />
        <SimuladorSection />
        <CreditoSection />
      </main>
      <Footer />
    </div>
  );
};

export default CreditoPage;
