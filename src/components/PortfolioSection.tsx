import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    img: "https://alencaremp.com.br/img/01.png",
    title: "Módulo Residencial",
    category: "Habitação",
    desc: "Acabamento Premium em Aço Naval",
  },
  {
    img: "https://alencaremp.com.br/img/02.png",
    title: "Loja Pop-Up Comercial",
    category: "B2B / Comercial",
    desc: "Abertura Lateral HC para Franquias",
  },
  {
    img: "https://alencaremp.com.br/img/03.png",
    title: "Mansão Acoplada",
    category: "Luxo Modular",
    desc: "Múltiplos Módulos de 40 Pés High Cube",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 border-t border-border/50">
      <div className="container">
        {/* Cabeçalho Alinhado à Esquerda */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="section-badge mb-6 inline-block">Excelência em Execução</span>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              Nossas <span className="text-gradient">Obras Entregues.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada projeto é uma prova da nossa engenharia de precisão. Unimos a robustez industrial ao acabamento premium de alto luxo.
            </p>
          </motion.div>

          <motion.a 
            href="#containers" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm"
          >
            Ver Projetos Completos 
            <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </motion.a>
        </div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-b-4 border-b-transparent hover:border-b-primary transition-all duration-300"
            >
              {/* Container da Imagem com Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                {/* Overlay apenas visual para profundidade no hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Tag de Categoria */}
                <span className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-widest rounded-full border border-border/50">
                  {p.category}
                </span>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-8">
                <h3 className="font-display font-bold text-xl mb-2 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;