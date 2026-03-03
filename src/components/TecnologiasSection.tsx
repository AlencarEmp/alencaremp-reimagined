import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Layers, 
  ThermometerSnowflake, 
  ZapOff, 
  Droplets,
  CheckCircle2
} from "lucide-react";

const techs = [
  { 
    name: "Aço Naval Corten", 
    desc: "Liga de alta resistência à corrosão atmosférica.",
    icon: ShieldCheck 
  },
  { 
    name: "Drywall Premium", 
    desc: "Chapas de alta densidade para acabamento liso e rígido.",
    icon: Layers 
  },
  { 
    name: "Lã de Rocha Isolante", 
    desc: "Barreira termoacústica incombustível de alta densidade.",
    icon: ThermometerSnowflake 
  },
  { 
    name: "Elétrica Blindada", 
    desc: "Circuitos protegidos por conduítes de alta segurança.",
    icon: ZapOff 
  },
  { 
    name: "PEX Hidráulico", 
    desc: "Tubulação flexível sem conexões internas, zero vazamento.",
    icon: Droplets 
  },
];

const TecnologiasSection = () => {
  return (
    <section className="py-20 md:py-24 border-t border-border/50 bg-background/50">
      <div className="container">
        
        {/* Cabeçalho Alinhado à Esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-2 mb-4 text-primary">
            <CheckCircle2 size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Padrão de Qualidade Certificado</span>
          </div>
          
          <h2 className="font-display text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Engenharia que <span className="text-gradient">utiliza apenas o melhor.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
            Cada módulo Alencar é construído com materiais de elite, selecionados para garantir durabilidade oceânica e conforto residencial superior.
          </p>
        </motion.div>

        {/* Grid de Tecnologias - Ajustado para largura total no Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex xl:flex-wrap gap-4 md:gap-6">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group glass-card px-6 py-6 flex items-start gap-5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 w-full xl:w-[calc(33.333%-1.5rem)] 2xl:w-fit 2xl:min-w-[280px]"
            >
              {/* Ícone com Destaque */}
              <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shrink-0">
                <tech.icon size={24} />
              </div>

              <div className="flex flex-col">
                <div className="font-display font-bold text-base text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </div>
                <div className="text-xs text-muted-foreground leading-relaxed mt-1">
                  {tech.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rodapé da Seção */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <p className="text-[10px] text-muted-foreground text-left italic leading-relaxed max-w-3xl">
            *Todos os nossos fornecedores passam por rigorosa auditoria técnica. Garantimos que a infraestrutura interna do seu módulo siga as normas ABNT de segurança e desempenho térmico.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TecnologiasSection;