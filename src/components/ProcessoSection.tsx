import { motion } from "framer-motion";
import { ClipboardList, PenTool, Factory, Truck, ArrowRight } from "lucide-react";

const steps = [
  { 
    num: "01", 
    title: "Briefing Técnico", 
    desc: "Reunião para alinhamento de necessidades, área do terreno e viabilidade financeira.",
    icon: ClipboardList 
  },
  { 
    num: "02", 
    title: "Engenharia CAD", 
    desc: "Desenvolvimento do projeto arquitetônico, estrutural e aprovação de cronogramas.",
    icon: PenTool 
  },
  { 
    num: "03", 
    title: "Produção Fabril", 
    desc: "Cortes a laser, isolamento térmico e acabamentos realizados internamente na fábrica.",
    icon: Factory 
  },
  { 
    num: "04", 
    title: "Entrega e Montagem", 
    desc: "Transporte via Munck e instalação no terreno, pronta para conexões finais de uso.",
    icon: Truck 
  },
];

const ProcessoSection = () => {
  return (
    <section id="processo" className="py-24 md:py-32 border-t border-border/50 bg-background relative overflow-hidden">
      {/* Detalhe de luz ao fundo para profundidade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container">
        {/* Cabeçalho Alinhado à Esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-badge mb-6 inline-block">Execução de Elite</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Do Papel à Realidade em <span className="text-gradient">4 Passos.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Eliminamos a incerteza da construção tradicional com um fluxo de trabalho industrial, linear e rigorosamente controlado.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {/* Linha conectora (visível apenas em telas grandes) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border/50 -z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -15, 
                transition: { duration: 0.3 } 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group glass-card p-8 relative z-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b-4 border-b-transparent hover:border-b-primary transition-all duration-300"
            >
              {/* Número e Ícone */}
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <step.icon size={26} />
                </div>
                <span className="font-display text-4xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                  {step.num}
                </span>
              </div>

              <h4 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h4>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {step.desc}
              </p>

              {/* Seta indicativa para o próximo passo (menos no último) */}
              {i < 3 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-border">
                  <ArrowRight size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessoSection;