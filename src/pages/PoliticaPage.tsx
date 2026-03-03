import Header from "@/components/Header";
import PoliticaSection from "@/components/PoliticaSection";
import Footer from "@/components/Footer";

const PoliticaPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <PoliticaSection />
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaPage;
