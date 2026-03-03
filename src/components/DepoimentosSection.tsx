import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Estávamos desesperados com os atrasos da empreiteira na nossa loja física. Acionamos a Alencar e o nosso stand de vendas container chegou montado, pronto a faturar.",
    name: "Márcio Nogueira",
    role: "Diretor de Expansão (Retalho)",
    initial: "M",
  },
  {
    text: "Optei pelo projeto modular de 12 metros para a minha casa de campo. O conforto térmico interno, mesmo com sol forte na chapa exterior, superou todas as minhas expectativas.",
    name: "Carolina Almeida",
    role: "Cliente Residencial",
    initial: "C",
  },
  {
    text: "A linha de financiamento direto foi o grande diferencial. Consegui abater 40% do projeto entregando o meu carro usado, e em 30 dias o módulo estava no meu terreno.",
    name: "Roberto Silveira",
    role: "Investidor",
    initial: "R",
  },
];

const DepoimentosSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border/50 bg-background relative overflow-hidden">
      {/* Detalhe de luz de fundo */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container">
        {/* Cabeçalho Alinhado à Esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-badge mb-6 inline-block">Voz da Experiência</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Credibilidade <span className="text-gradient">Atestada.</span>
          </h2>
          <p className="text-muted-foreground text-left max-w-2xl text-lg leading-relaxed">
            O impacto real da engenharia modular na vida e nos negócios de quem decidiu construir com agilidade e inteligência.
          </p>
        </motion.div>

        {/* Grid de Depoimentos com Animação de Movimento */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card p-8 flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b-4 border-b-transparent hover:border-b-primary transition-all duration-300"
            >
              {/* Ícone de Aspas que reage ao Hover */}
              <Quote className="text-primary/20 mb-6 group-hover:text-primary transition-colors duration-300" size={32} fill="currentColor" />
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1 italic">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                {/* Avatar Estilizado */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-display font-bold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                  {t.initial}
                </div>
                
                <div>
                  <div className="font-display font-bold text-base group-hover:text-primary transition-colors">
                    {t.name}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    {t.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;