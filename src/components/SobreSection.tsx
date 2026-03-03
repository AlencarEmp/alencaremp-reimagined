import { motion } from "framer-motion";
import { 
  Factory, 
  DraftingCompass, 
  Truck, 
  Recycle, 
  ShieldCheck, 
  LifeBuoy, 
  ArrowRight,
  Monitor,
  CheckCircle2,
  Waves,
  Construction,
  Palette,
  Layers,
  FileBadge,
  ShieldAlert,
  Settings,
  Scale,
  Key,
  ShieldPlus,
  Users
} from "lucide-react";

const SobreSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 border-t border-border/50 bg-background relative overflow-hidden">
      {/* Separador de luz superior da seção */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container relative z-10">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="section-badge mb-6 inline-block">A Nossa Estrutura Corporativa</span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tighter">
            O Império <span className="text-gradient">Alencar.</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl text-lg md:text-xl leading-relaxed border-l-2 border-primary pl-6">
            Nascemos com a missão de erradicar o caos da construção civil e instaurar a precisão industrial. Somos arquitetos, engenheiros e mestres fabris.
          </p>
        </motion.div>

        {/* 1. Capacidade Fabril */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24 md:mb-32">
          <div className="lg:col-span-5">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
              <Factory className="text-primary" size={28} />
              Capacidade Fabril (SBC/SP)
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A nossa sede em São Bernardo do Campo não é um estaleiro poeirento. É um pavilhão industrial de alta performance preparado para montar lares e comercias com precisão de linha de montagem automotiva.
            </p>
            <ul className="space-y-4">
              {[
                { icon: Waves, text: "Produção \"Off-Site\" totalmente imune a paralisações por chuva." },
                { icon: Construction, text: "Equipamentos de corte, pontes rolantes e soldadura especializada." },
                { icon: Palette, text: "Cabines de pintura profissional isoladas do ambiente externo." }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card/30 border border-border/50 hover:border-primary/30 transition-colors group">
                  <item.icon size={20} className="text-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-border/50 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Instalações Industriais Alencar"
                className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 md:-bottom-6 md:-left-6 glass-card p-4 md:p-6 border-primary/20 shadow-2xl animate-bounce-slow z-20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <CheckCircle2 size={18} className="md:w-5 md:h-5" />
                  </div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-foreground">Padrão Automotivo</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* LINHA DE SEPARAÇÃO */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-24 md:mb-32" />

        {/* 2. Arquitetura Consultiva */}
        <div className="mb-24 md:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Layers className="text-primary" size={24} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Inteligência Projetual</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 tracking-tight">A Arquitetura Consultiva</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-0">
                Você não compra apenas uma caixa de aço. Você contrata o intelecto de projetistas e arquitetos dedicados. Desde a assinatura do contrato, iniciamos uma jornada imersiva para garantir que o projeto final seja o espelho da sua exigência.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: DraftingCompass, title: "Desenho Personalizado", desc: "As nossas plantas base podem ser ajustadas. Layouts, aberturas de janelas e distribuição interna adaptada ao seu lote." },
              { icon: Monitor, title: "Renderização 3D", desc: "Antes de cortarmos 1 centímetro de aço, você visualiza a sua obra completa em maquetes eletrónicas detalhadas." },
              { icon: ShieldCheck, title: "Supervisão Fabril", desc: "O mesmo engenheiro que aprova o CAD é o que inspeciona a solda na fábrica, garantindo tradução perfeita." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-8 border-t-4 border-t-transparent hover:border-t-primary transition-all group bg-card/40"
              >
                <div className="p-4 w-fit rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <h4 className="font-display font-bold text-xl mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* LINHA DE SEPARAÇÃO */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-24 md:mb-32" />

        {/* 3. Logística e Upcycling */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 md:mb-32">
          <div className="glass-card p-8 md:p-12 border-l-4 border-l-primary bg-primary/[0.02] flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Truck size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold">Logística de Combate</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-base">
              A nossa base fica em São Paulo, mas os nossos camiões Munck despacham módulos de elite para toda a região Sudeste, Sul e parte do Centro-Oeste. A distância não é um problema para a nossa arquitetura; basta a rodovia ter acesso para a carreta e nós aterramos a sua mansão.
            </p>
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="rounded-3xl p-8 md:p-12 bg-primary text-primary-foreground shadow-[0_20px_50px_rgba(var(--primary),0.3)] relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Recycle size={150} />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/20 text-white backdrop-blur-md">
                  <Recycle size={28} />
                </div>
                <h3 className="font-display text-2xl font-bold">A Ética do Upcycling</h3>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed text-base md:text-lg font-medium">
                Resgatar toneladas de aço abandonadas em portos (Upcycling) é o ato ecológico mais contundente do mercado atual. Recusamos o desperdício brutal do cimento e forjamos um futuro onde o reaproveitamento de materiais de grau militar cria casas eternas.
              </p>
            </div>
          </motion.div>
        </div>

        {/* LINHA DE SEPARAÇÃO */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-24 md:mb-32" />

        {/* 4. Compliance e Rigor */}
        <div className="mb-24 md:mb-32">
          <div className="text-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Segurança Jurídica e Técnica</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">Rigor Normativo e Compliance</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { code: "CREA / CAU", label: "ARTs Emitidas", icon: FileBadge },
              { code: "NR-18", label: "Segurança de Obra", icon: ShieldAlert },
              { code: "ISO-9001*", label: "Base Produtiva", icon: Settings },
              { code: "ABNT", label: "Cálculo Estrutural", icon: Scale },
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 border border-border/50 group hover:border-primary/50 transition-all text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                   <item.icon size={64} />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                   <item.icon size={24} />
                </div>
                <div className="font-display font-black text-foreground text-2xl mb-1 tracking-tighter">
                  {item.code}
                </div>
                <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-[0.2em]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LINHA DE SEPARAÇÃO */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-24 md:mb-32" />

        {/* 5. ECOSSISTEMA DE PÓS-VENDA (DESIGN DE CERTIFICADO) */}
        <div className="mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-16 border-primary/30 bg-primary/[0.02] relative overflow-hidden"
          >
            {/* Elemento Visual de Fundo */}
            <div className="absolute -top-12 -right-12 opacity-5 text-primary">
              <ShieldPlus size={300} />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="p-4 rounded-2xl bg-primary text-primary-foreground mb-6 shadow-[0_10px_30px_rgba(var(--primary),0.3)]">
                  <LifeBuoy size={40} />
                </div>
                <h3 className="font-display text-3xl font-bold tracking-tight mb-2">Ecossistema de Pós-Venda</h3>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Suporte Vitalício Estrutural</span>
              </div>

              <div className="lg:col-span-8 border-t lg:border-t-0 lg:border-l border-primary/10 pt-12 lg:pt-0 lg:pl-12">
                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl mb-8">
                  Ao entregar a chave, a nossa relação não termina, evolui. A Alencar Empreendimentos possui uma divisão focada no suporte estrutural da sua aquisição. Emitimos o <strong className="text-foreground font-black underline decoration-primary/50 underline-offset-4">Manual do Proprietário Modular</strong>, orientações precisas de manutenção e garantias de cobertura total dos 10 anos de solda e vedação estipulados em contrato.
                </p>
                
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                   <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground">
                      <Key size={14} className="text-primary" /> Entrega de Chaves
                   </div>
                   <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground">
                      <ShieldCheck size={14} className="text-primary" /> 10 Anos de Cobertura
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 6. CTA FINAL: FAZER PARTE DO GRUPO (CONVITE DE ELITE) */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full scale-50" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 text-center flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8">
               <Users size={14} /> Junte-se à Revolução
            </div>
            
            <h3 className="font-display text-4xl md:text-6xl font-black tracking-tighter mb-12 max-w-4xl">
              Pronto para forjar o seu <span className="text-gradient">próximo capítulo?</span>
            </h3>

            <a
              href="#contato"
              className="group relative px-12 py-6 bg-primary text-primary-foreground font-black rounded-2xl overflow-hidden hover:shadow-[0_0_60px_rgba(var(--primary),0.6)] hover:scale-105 transition-all duration-500 uppercase text-sm tracking-[0.2em]"
            >
              <span className="relative z-10 flex items-center gap-4">
                Fazer Parte do Grupo
                <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              {/* Efeito de brilho interno no hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;