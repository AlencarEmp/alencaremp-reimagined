import { motion } from "framer-motion";

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
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-center mb-4">
          Credibilidade Atestada
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16 text-lg">
          O que dizem os clientes e parceiros que confiaram nos nossos módulos.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8"
            >
              <p className="text-foreground/90 leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-display font-bold text-primary">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
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
