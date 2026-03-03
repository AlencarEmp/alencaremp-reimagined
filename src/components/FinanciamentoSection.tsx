import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const FinanciamentoSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-badge mb-6 inline-block">Financiamento Inteligente</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
              O seu veículo é a chave da sua obra.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Transformamos o seu carro num ativo líquido. Avaliamos e aceitamos o seu veículo como entrada para o seu projeto modular. O saldo restante? Financiado diretamente pela Alencar, sem gerentes de banco a criar obstáculos.
            </p>
            <a
              href="#credito"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg inline-block hover:opacity-90 transition-opacity"
            >
              Entender o Processo
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Entrega de Chaves"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinanciamentoSection;
