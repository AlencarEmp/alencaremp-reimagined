import { motion } from "framer-motion";

const steps = [
  { num: "1", title: "Briefing Técnico", desc: "Reunião para alinhamento de necessidades, área do terreno e viabilidade financeira." },
  { num: "2", title: "Engenharia CAD", desc: "Desenvolvimento do projeto arquitetônico, estrutural e aprovação de cronogramas." },
  { num: "3", title: "Produção Fabril", desc: "Cortes a laser, isolamento térmico e acabamentos realizados internamente na fábrica." },
  { num: "4", title: "Entrega e Montagem", desc: "Transporte via Munck e instalação no terreno, pronta para conexões finais de uso." },
];

const ProcessoSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <span className="section-badge mb-6 inline-block">Processo Simplificado</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-16">
          Do Papel à Realidade em 4 Passos
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              <div className="font-display text-6xl font-bold text-primary/20 mb-4">{step.num}</div>
              <h4 className="font-display text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessoSection;
