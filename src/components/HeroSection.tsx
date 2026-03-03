import { motion } from "framer-motion";
import heroImage from "@/assets/hero-containers.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col">
      {/* Top content area - Paper.design style */}
      <div className="container pt-32 md:pt-40 pb-12 md:pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="section-badge">
            <span className="w-2 h-2 rounded-full bg-primary" />
            A REVOLUÇÃO DA CONSTRUÇÃO CIVIL
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-5xl"
        >
          A evolução da{" "}
          <span className="text-gradient">arquitetura modular.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed border-l-2 border-primary pl-6"
        >
          A Alencar Empreendimentos substitui métodos construtivos ultrapassados por engenharia de precisão. Projetos em aço naval mais rápidos, 100% personalizáveis e com crédito direto da fábrica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a
            href="#contato"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg text-center hover:opacity-90 transition-opacity tracking-wide"
          >
            Solicitar Orçamento
          </a>
          <a
            href="#containers"
            className="px-8 py-4 border border-border text-foreground font-semibold rounded-lg text-center hover:bg-secondary transition-colors tracking-wide flex items-center justify-center gap-2"
          >
            Ver Nossos Modelos
            <span>→</span>
          </a>
        </motion.div>
      </div>

      {/* Hero image - replacing Paper.design video area */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="container pb-12 relative z-10 flex-1"
      >
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
          <img
            src={heroImage}
            alt="Containers e logística portuária"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        </div>
      </motion.div>

      {/* Stats bar */}
      <div className="border-t border-border">
        <div className="container py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "4x", label: "Mais Rápido" },
              { value: "100%", label: "Personalizável" },
              { value: "Aço", label: "Grau Naval" },
              { value: "0%", label: "Burocracia" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1 tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
