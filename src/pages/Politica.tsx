import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PoliticaSection from "@/components/PoliticaSection";
import { useEffect } from "react";

const Politica = () => {
  // Garante que a página comece no topo ao carregar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-12"> {/* pt-24 para dar espaço ao Header fixo */}
        <div className="container animate-fade-in">
          <PoliticaSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Politica;