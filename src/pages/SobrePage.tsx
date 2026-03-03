import Header from "@/components/Header";
import SobreSection from "@/components/SobreSection";
import ProcessoSection from "@/components/ProcessoSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import Footer from "@/components/Footer";

const SobrePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <SobreSection />
        <ProcessoSection />
        <DepoimentosSection />
      </main>
      <Footer />
    </div>
  );
};

export default SobrePage;
