import { motion } from "framer-motion";
import { Home, Building2, CreditCard, ArrowRight } from "lucide-react";

const cards = [
  {
    icon: Home,
    title: "Habitação Modular",
    desc: "Projetos residenciais em aço naval. Desde estúdios compactos a mansões acopladas de alto luxo.",
    cta: "Ver Residências",
    href: "#containers",
  },
  {
    icon: Building2,
    title: "Projetos Corporativos",
    desc: "Escritórios, Lojas Pop-Up e Franquias. Expanda o seu negócio com uma arquitetura industrial chamativa.",
    cta: "Ver Comercial",
    href: "#corporativo",
  },
  {
    icon: CreditCard,
    title: "Crédito Próprio",
    desc: "Não dependa de bancos. Financiamos o seu projeto e aceitamos o seu veículo como entrada.",
    cta: "Ver Condições",
    href: "#credito",
  },
];

const FrentesSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border/50">
      <div className="container">
        {/* Cabeçalho da Seção Alinhado à Esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Badge para destaque extra */}
          <span className="section-badge mb-6 inline-block">Ecossistema Alencar</span>
          
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-left mb-6 max-w-4xl">
            As Nossas <span className="text-gradient">Frentes de Atuação.</span>
          </h2>
          
          <p className="text-muted-foreground text-left max-w-2xl text-lg leading-relaxed">
            Soluções integradas para construção de alto padrão e viabilidade financeira direta, unindo engenharia de precisão e inovação.
          </p>
        </motion.div>

        {/* Grid de Cards com Movimento */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card p-8 flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b-4 border-b-transparent hover:border-b-primary transition-all duration-300"
            >
              {/* Ícone com animação de cor no hover */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <card.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
              </div>
              
              <h3 className="font-display text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              
              <p className="text-muted-foreground text-sm flex-1 leading-relaxed">
                {card.desc}
              </p>
              
              <a
                href={card.href}
                className="mt-8 text-primary font-bold inline-flex items-center gap-2 text-sm uppercase tracking-wider group/link"
              >
                {card.cta} 
                <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrentesSection;