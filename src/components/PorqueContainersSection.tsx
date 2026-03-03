import { motion } from "framer-motion";
import { Shield, Thermometer, Truck, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Estrutura Inabalável",
    desc: "O aço Corten suporta desastres naturais e milhares de toneladas em empilhamento sem ceder um milímetro.",
  },
  {
    icon: Thermometer,
    title: "Conforto Térmico",
    desc: "Com forro de lã de rocha e drywall, o módulo transforma-se num ecossistema fechado com temperatura ideal.",
  },
  {
    icon: Truck,
    title: "Mobilidade Nômade",
    desc: "Não se apegue ao terreno. A qualquer momento pode solicitar um Munck e mudar a sua casa de estado.",
  },
  {
    icon: Clock,
    title: "Prazo Bloqueado",
    desc: "Construído em fábrica (Off-site), as chuvas e atrasos de pedreiros não existem. Entrega programada no contrato.",
  },
];

const PorqueContainersSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <span className="section-badge mb-6 inline-block">A Morte do Tijolo</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 max-w-3xl">
          Porquê exigir Módulos Containers?
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-16 text-lg">
          As fundações de cimento estão a dar lugar à eficiência militar da engenharia civil modular.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6"
            >
              <f.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-display font-semibold text-lg mb-2">{f.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorqueContainersSection;
