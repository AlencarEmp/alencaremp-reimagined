import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

const ContatoSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">Inicie o seu Projeto.</h3>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Preencha o formulário para um atendimento tático. A nossa equipa técnica irá avaliar as suas necessidades modulares e apresentar um plano financeiro irrecusável.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Central de Atendimento</div>
                  <div className="font-semibold">(11) 93499-1883</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Localização Operacional</div>
                  <div className="font-semibold">SBC - Estado de São Paulo</div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-10 text-center"
              >
                <h3 className="font-display text-2xl font-semibold mb-4">Missão Recebida.</h3>
                <p className="text-muted-foreground mb-6">
                  Um dos nossos consultores técnicos entrará em contato em breve para apresentar a planta.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 border border-border rounded-lg text-sm font-medium hover:bg-secondary transition-colors"
                >
                  Iniciar Novo Contato
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Nome Completo</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telefone/WhatsApp</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Localização da Obra</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Cidade / Estado"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Área de Interesse</label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    <option value="">Selecione uma opção...</option>
                    <optgroup label="HABITAÇÃO MODULAR">
                      <option>Módulo Compacto (15m²)</option>
                      <option>Módulo Alto (6m High Cube)</option>
                      <option>Projeto 12m Acoplável</option>
                    </optgroup>
                    <optgroup label="CORPORATIVO">
                      <option>Lojas / Bares / Escritórios Modulares</option>
                    </optgroup>
                    <optgroup label="FINANCEIRO">
                      <option>Avaliação de Veículo / Simulação</option>
                    </optgroup>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Solicitar Análise de Projeto
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Os seus dados estão blindados conforme as políticas de privacidade.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5511934991883"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-primary text-primary font-semibold rounded-lg inline-block hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Fale Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;
