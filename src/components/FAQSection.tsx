import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "Vocês atendem fora de São Bernardo do Campo?",
    a: "Sim. Nossa fábrica está estrategicamente localizada em SP, o que nos permite despachar projetos modulares via frota logística especializada para todo o território nacional. Consulte a viabilidade de frete para o seu CEP com nossos especialistas.",
  },
  {
    q: "Qual é a durabilidade real de um Container?",
    a: "Os containers marítimos são fabricados em Aço Corten, uma liga desenvolvida para resistir à corrosão extrema e tempestades oceânicas. Com nosso tratamento industrial de pintura naval, a durabilidade ultrapassa os 90 anos, superando construções convencionais em alvenaria.",
  },
  {
    q: "Como funciona o isolamento térmico? Fica quente?",
    a: "Não. Utilizamos ciência termodinâmica: revestimento cerâmico refletivo no exterior e preenchimento interno com Lã de Rocha de alta densidade (incombustível) e Drywall. O interior funciona como uma garrafa térmica, mantendo a temperatura estável e agradável o ano todo.",
  },
  {
    q: "Preciso de um banco para financiar o projeto?",
    a: "Não necessariamente. A Alencar Empreendimentos possui um ecossistema de Crédito Próprio onde aceitamos seu veículo como entrada e financiamos o saldo diretamente, eliminando a burocracia dos bancos tradicionais.",
    hasCta: true 
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 md:py-32 border-t border-border/50 relative overflow-hidden">
      {/* Linha separadora com gradiente (Igual às seções Premium anteriores) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Detalhe de luz de fundo */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container">
        {/* Cabeçalho Alinhado à Esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-20"
        >
          <span className="section-badge mb-6 inline-block">Tira-Dúvidas Técnico</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-left">
            Perguntas <span className="text-gradient">Frequentes.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl text-left">
            Tudo o que você precisa saber sobre a engenharia modular, durabilidade e as condições exclusivas de aquisição.
          </p>
        </motion.div>

        {/* Accordion Totalmente Alinhado às Margens do Site */}
        <div className="w-full mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <AccordionItem 
                  value={`faq-${i}`} 
                  className="glass-card border border-border/50 px-6 md:px-8 overflow-hidden group data-[state=open]:border-primary/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-display text-base md:text-lg font-bold py-6 hover:no-underline group-hover:text-primary transition-colors">
                    <div className="flex items-center gap-4">
                      <HelpCircle size={20} className="text-primary/40 group-hover:text-primary transition-colors shrink-0" />
                      {faq.q}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 pl-10 border-t border-border/20 pt-4">
                    <p>{faq.a}</p>
                    
                    {faq.hasCta && (
                      <div className="mt-6">
                        <a 
                          href="#credito" 
                          className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-bold text-xs uppercase tracking-widest rounded-lg transition-all duration-300"
                        >
                          Conhecer Crédito Próprio
                          <ArrowRight size={16} />
                        </a>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        {/* Cards de Autoridade ABAIXO do FAQ - Grid de 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 border-l-4 border-l-primary flex items-start gap-6"
          >
            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div className="text-left">
              <h3 className="font-display text-xl font-bold mb-2">Garantia Estrutural</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Oferecemos 10 anos de cobertura total em todos os projetos executados pela nossa engenharia. Sua segurança é nossa prioridade.
              </p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 border-l-4 border-l-primary flex items-start gap-6"
          >
            <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
              <MessageCircle size={28} />
            </div>
            <div className="text-left">
              <h3 className="font-display text-xl font-bold mb-2">Dúvida Específica?</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Ainda tem alguma dúvida técnica sobre seu terreno? Fale agora com um consultor especialista via WhatsApp.
              </p>
              <a 
                href="#contato" 
                className="group flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest transition-all"
              >
                Falar com consultor
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;