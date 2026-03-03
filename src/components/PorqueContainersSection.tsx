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
    <section className="py-20 md:py-32 border-t border-border/50">
      <div className="container">
        {/* Cabeçalho da Seção Alinhado à Esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <span className="section-badge mb-6 inline-block">A Morte do Tijolo</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            Porquê exigir <span className="text-gradient">Módulos Containers?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            As fundações de cimento estão a dar lugar à eficiência militar da engenharia civil modular de alto padrão.
          </p>
        </motion.div>

        {/* Grid de Features com Animação de Movimento */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card p-8 border-b-4 border-b-transparent hover:border-b-primary hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              {/* Ícone com inversão de cor no Hover */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <f.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              <h4 className="font-display font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                {f.title}
              </h4>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PorqueContainersSection;