import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const GarantiaSection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Garantia Estrutural de 10 Anos
          </h2>
          <div className="w-20 h-1 bg-primary-foreground/40 rounded-full mb-6" />
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl">
            | Em todos os projetos executados pela Alencar Empreendimentos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GarantiaSection;
