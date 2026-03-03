import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react"; // Importando Award para a Opção 4
import heroImage from "@/assets/hero-containers.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex flex-col bg-background overflow-hidden">
      {/* Top separator line - mantendo a unidade visual de 'luz' entre seções */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Elementos de Iluminação de Fundo */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Área de Conteúdo Superior */}
      <div className="container pt-32 md:pt-44 pb-12 md:pb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="section-badge">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            A REVOLUÇÃO DA CONSTRUÇÃO CIVIL
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter max-w-5xl"
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
          className="flex flex-col sm:flex-row gap-4 mt-12"
        >
          <a
            href="#contato"
            className="group px-8 py-5 bg-primary text-primary-foreground font-black rounded-xl text-center hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] transition-all flex items-center justify-center gap-3 uppercase text-xs tracking-widest"
          >
            Solicitar Orçamento
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#containers"
            className="group px-8 py-5 border border-border bg-card/30 backdrop-blur-md text-foreground font-bold rounded-xl text-center hover:bg-secondary transition-all flex items-center justify-center gap-2 uppercase text-xs tracking-widest"
          >
            Ver Nossos Modelos
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>

      {/* Área da Imagem Hero com o Card Flutuante Ajustado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="container pb-16 relative z-10 flex-1"
      >
        <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] rounded-3xl overflow-hidden border border-border/50 shadow-2xl group">
          <img
            src={heroImage}
            alt="Containers e logística portuária"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
          
          {/* Card Flutuante: VISÍVEL NO MOBILE (removido hidden), posicionamento e tamanhos responsivos */}
          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 glass-card p-4 md:p-6 border-primary/20 shadow-[0_20px_60px_rgba(var(--primary),0.2)] flex items-center gap-3 md:gap-4 animate-bounce-slow shrink-0 max-w-[calc(100%-3rem)] md:max-w-none">
             <div className="p-2.5 md:p-3 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                 <Award size={22} className="w-5 h-5 md:w-6 md:h-6 animate-pulse" /> {/* Tamanho responsivo do ícone */}
             </div>
             <div>
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-muted-foreground block mb-0.5">Diferencial Alencar</span>
                
                {/* Texto: Opção 4 - aplicado diretamente, tamanho responsivo */}
                <span className="font-display font-bold text-sm md:text-lg tracking-tight text-foreground">
                    Garantia Estrutural de 10 Anos Alencar.
                  </span>
                
             </div>
          </div>
        </div>
      </motion.div>

      {/* Stats Bar */}
      <div className="border-y border-border bg-card/20 backdrop-blur-xl relative z-20">
        <div className="container py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-border/50">
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
                className="text-center md:px-8"
              >
                <div className="font-display text-4xl md:text-5xl font-black text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs font-black text-muted-foreground tracking-[0.2em] uppercase">
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