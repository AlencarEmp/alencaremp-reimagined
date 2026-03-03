import { motion } from "framer-motion";
import { Home, Building2, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: Home,
    title: "Habitação Modular",
    desc: "Projetos residenciais em aço naval. Desde estúdios compactos a mansões acopladas de alto luxo.",
    cta: "Ver Residências",
    href: "/containers",
  },
  {
    icon: Building2,
    title: "Projetos Corporativos",
    desc: "Escritórios, Lojas Pop-Up e Franquias. Expanda o seu negócio com uma arquitetura industrial chamativa.",
    cta: "Ver Comercial",
    href: "/containers",
  },
  {
    icon: CreditCard,
    title: "Crédito Próprio",
    desc: "Não dependa de bancos. Financiamos o seu projeto e aceitamos o seu veículo como entrada.",
    cta: "Ver Condições",
    href: "/credito",
  },
];
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
    <section className="py-24 md:py-32">
      <div className="container">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          As Nossas Frentes de Atuação
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          Soluções integradas para construção de alto padrão e viabilidade financeira direta.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col group hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground flex-1 leading-relaxed">{card.desc}</p>
              <Link
                to={card.href}
                className="mt-6 text-primary font-medium hover:underline inline-flex items-center gap-1 text-sm"
              >
                {card.cta} →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FrentesSection;
