import { motion } from "framer-motion";
import { Car, Banknote, CheckCircle, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: Car,
    title: "Veículo como Entrada",
    desc: "Avaliamos seu carro ou moto com preço de mercado para abater no valor inicial.",
  },
  {
    icon: Banknote,
    title: "Crédito Direto",
    desc: "Financiamento direto com a fábrica, sem a burocracia e as taxas abusivas dos bancos tradicionais.",
  },
  {
    icon: CheckCircle,
    title: "Sem Burocracia",
    desc: "Processo simplificado focado na viabilidade do seu projeto modular.",
  },
];

const FinanciamentoSection = () => {
  return (
    <section id="finaciamento" className="py-24 md:py-32 border-t border-border/50 relative overflow-hidden">
      {/* Detalhe visual de fundo */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Lado Esquerdo: Conteúdo e Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-6 inline-block">Financiamento Inteligente</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-left">
              O seu veículo é a <span className="text-gradient">chave da sua obra.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed text-left">
              Transformamos o seu patrimônio em realidade. Na Alencar, o seu veículo vale investimento para o seu novo lar ou negócio modular.
            </p>

            <div className="grid gap-4 mb-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 glass-card border-l-4 border-l-primary group hover:bg-primary/5 transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <benefit.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="#contato"
              className="group w-full px-8 py-5 bg-primary text-primary-foreground font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:scale-[1.01] transition-all duration-300"
            >
              Entender o Processo
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Lado Direito: Imagem com altura controlada */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[350px] md:h-[450px] lg:h-[480px] rounded-2xl overflow-hidden border border-border shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80"
                alt="Financiamento e Chaves"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Card Flutuante: Ajustado para não colar no canto */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 md:-bottom-6 left-6 md:-left-12 glass-card p-4 md:p-6 border-primary/30 shadow-2xl max-w-[200px] md:max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <CheckCircle size={18} />
                </div>
                <span className="font-bold text-primary text-xs md:text-sm uppercase tracking-wider">Aprovação Direta</span>
              </div>
              <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed">
                Análise de crédito simplificada feita pela nossa própria equipe financeira.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FinanciamentoSection;