import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, MessageSquare, CheckCircle2, ArrowRight, Shield, Zap } from "lucide-react";

const ContatoSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 border-t border-border/50 bg-background overflow-hidden">
      {/* Background Técnico (Grid e Luzes) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />

      <div className="container relative z-10">
        
        {/* CABEÇALHO MOBILE (Visível apenas em telas pequenas) */}
        <div className="lg:hidden mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <Zap size={12} fill="currentColor" /> QG Operacional
          </div>
          <h2 className="font-display text-5xl font-bold mb-6 tracking-tighter leading-[0.9]">
            Inicie o seu <br />
            <span className="text-gradient">Projeto.</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed border-l-2 border-primary/30 pl-6">
            Preencha o formulário para um atendimento tático. A nossa equipa técnica irá avaliar as suas necessidades modulares.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LADO ESQUERDO (Desktop): Título + Infos + WhatsApp */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                <Zap size={12} fill="currentColor" /> QG Operacional
              </div>
              
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter leading-[0.9]">
                Inicie o seu <br />
                <span className="text-gradient">Projeto.</span>
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-md">
                Preencha o formulário para um atendimento tático. A nossa equipa técnica irá avaliar as suas necessidades modulares e apresentar um plano financeiro irrecusável.
              </p>

              {/* Cards de Contato Desktop */}
              <div className="grid gap-4 mb-8">
                <div className="glass-card p-6 border-l-4 border-l-primary flex items-center gap-5 group hover:bg-primary/[0.03] transition-colors shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase font-black tracking-widest text-muted-foreground mb-1">Central WhatsApp</div>
                    <div className="font-display font-bold text-lg">(11) 93499-1883</div>
                  </div>
                </div>

                <div className="glass-card p-6 border-l-4 border-l-primary flex items-center gap-5 group hover:bg-primary/[0.03] transition-colors shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div className="text-[9px] uppercase font-black tracking-widest text-muted-foreground mb-1">Pavilhão Industrial</div>
                    <div className="font-display font-bold text-lg">SBC - São Paulo</div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA Desktop (Integrado à Coluna) */}
              <a
                href="https://wa.me/5511934991883"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full p-8 rounded-3xl border border-primary/20 bg-primary/5 flex items-center justify-between hover:border-primary/50 transition-all duration-300 overflow-hidden relative"
              >
                <div className="relative z-10">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Atendimento Imediato</div>
                  <h4 className="font-display font-bold text-xl mb-1 text-foreground">Fale Agora no WhatsApp</h4>
                  <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                    Iniciar Conversa <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
                <MessageSquare className="w-20 h-20 text-primary/10 absolute -right-4 -bottom-4 group-hover:scale-110 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* LADO DIREITO: FORMULÁRIO (Primeiro no Mobile depois do título) */}
          <div className="lg:col-span-7 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-transparent to-primary/20 blur-xl opacity-50" />
            
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-12 md:p-20 text-center border-primary/50 bg-primary/5 relative overflow-hidden flex flex-col items-center justify-center min-h-[550px]"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-8 shadow-[0_0_40px_rgba(var(--primary),0.2)]">
                    <CheckCircle2 size={48} className="animate-pulse" />
                  </div>
                  <h3 className="font-display text-4xl font-bold mb-4 tracking-tight">Missão Recebida.</h3>
                  <p className="text-muted-foreground text-lg mb-10 max-w-sm mx-auto leading-relaxed">
                    Um dos nossos consultores técnicos entrará em contato em breve para apresentar a planta.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-4 border border-primary/30 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    Iniciar Novo Contato
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="glass-card p-8 md:p-12 space-y-6 border-primary/20 shadow-2xl relative bg-background/80 backdrop-blur-2xl"
                >
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-primary/10 via-primary to-primary/10" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Nome Completo</label>
                      <input
                        type="text" required
                        className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none text-sm"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Telefone/WhatsApp</label>
                      <input
                        type="tel" required
                        className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none text-sm"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Localização da Obra</label>
                    <input
                      type="text"
                      className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none text-sm"
                      placeholder="Cidade / Estado"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Área de Interesse</label>
                    <div className="relative">
                      <select
                        required
                        className="w-full px-5 py-4 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all outline-none text-sm appearance-none cursor-pointer"
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
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                        <ArrowRight size={16} className="rotate-90 text-primary" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="group relative w-full px-8 py-5 bg-primary text-primary-foreground font-black rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(var(--primary),0.3)] hover:shadow-[0_15px_50px_rgba(var(--primary),0.5)] hover:scale-[1.01] transition-all duration-300 uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3"
                    >
                      Solicitar Análise de Projeto
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                      <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 mt-4 opacity-60">
                    <Shield size={12} className="text-primary" />
                    <p className="text-[9px] uppercase font-bold tracking-widest text-foreground">Proteção de Dados Criptografada</p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* INFOS + WHATSAPP MOBILE (Abaixo do formulário) */}
          <div className="lg:hidden space-y-4">
             <div className="glass-card p-6 border-l-4 border-l-primary flex items-center gap-5">
                <Phone size={22} className="text-primary" />
                <div>
                   <div className="text-[9px] uppercase font-black tracking-widest text-muted-foreground">Telefone Central</div>
                   <div className="font-display font-bold text-lg">(11) 93499-1883</div>
                </div>
             </div>
             <div className="glass-card p-6 border-l-4 border-l-primary flex items-center gap-5">
                <MapPin size={22} className="text-primary" />
                <div>
                   <div className="text-[9px] uppercase font-black tracking-widest text-muted-foreground">Localização</div>
                   <div className="font-display font-bold text-lg">SBC - São Paulo</div>
                </div>
             </div>
             
             {/* WhatsApp CTA Mobile */}
             <a
               href="https://wa.me/5511934991883"
               target="_blank"
               rel="noopener noreferrer"
               className="group flex flex-col items-center justify-center p-8 rounded-3xl border border-primary bg-primary text-primary-foreground shadow-2xl"
             >
               <MessageSquare size={32} className="mb-4 animate-bounce-slow" />
               <div className="text-[10px] font-black uppercase tracking-[0.3em] mb-1">Início Imediato</div>
               <h4 className="font-display font-bold text-xl mb-4">Fale no WhatsApp</h4>
               <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContatoSection;