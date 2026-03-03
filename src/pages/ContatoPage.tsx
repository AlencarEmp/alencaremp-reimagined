import Header from "@/components/Header";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";

const ContatoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <ContatoSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContatoPage;
