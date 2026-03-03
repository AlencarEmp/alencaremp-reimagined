import { motion } from "framer-motion";

const projects = [
  {
    img: "https://alencaremp.com.br/img/01.png",
    title: "Módulo Residencial",
    desc: "Acabamento Premium",
  },
  {
    img: "https://alencaremp.com.br/img/02.png",
    title: "Loja Pop-Up Comercial",
    desc: "Abertura Lateral HC",
  },
  {
    img: "https://alencaremp.com.br/img/03.png",
    title: "Mansão Acoplada",
    desc: "Múltiplos Módulos de 40 Pés",
  },
];

const PortfolioSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
          <div>
            <span className="section-badge mb-6 inline-block">Portfólio Resumido</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold">Obras Entregues</h2>
          </div>
          <a href="#containers" className="text-primary font-medium hover:underline">
            Ver Projetos Completos →
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
