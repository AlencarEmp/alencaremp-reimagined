import { motion } from "framer-motion";
import { 
  Check, 
  X, 
  Car, 
  ShieldCheck, 
  FileText, 
  HandCoins, 
  TrendingUp,
  ArrowRight,
  ClipboardCheck,
  Calculator,
  Hammer,
  HelpCircle,
  MessagesSquare,
  BadgeCheck
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const comparativos = [
  {
    criterio: "Velocidade de Análise",
    banco: "Semanas de análise gerencial e exigência de garantias abusivas.",
    alencar: "Aprovação pragmática em dias, focada na viabilidade real do projeto.",
  },
  {
    criterio: "Flexibilidade de Ativos",
    banco: "Exigem pagamentos exclusivamente em capital líquido e transferências.",
    alencar: "Avaliamos e aceitamos o seu carro como parte do pagamento.",
  },
  {
    criterio: "Andamento da Obra",
    banco: "Atrasos constantes aguardando vistorias de engenheiros do banco para libertar fundos.",
    alencar: "O capital fica dentro de casa. Focamo-nos 100% em construir e entregar rápido.",
  },
];

const steps = [
  { 
    num: "1", 
    title: "Fecho do Projeto", 
    desc: "Definimos a planta, a metragem e elaboramos o valor exato para o fecho do contrato.",
    icon: ClipboardCheck
  },
  { 
    num: "2", 
    title: "Negociação (Permuta)", 
    desc: "Ajustamos o capital de entrada. Se preferir, trazemos o seu automóvel para avaliação comercial.",
    icon: Car
  },
  { 
    num: "3", 
    title: "Análise de Saldo", 
    desc: "O valor remanescente é diluído em parcelas controladas com a diretoria financeira do Grupo.",
    icon: Calculator
  },
  { 
    num: "4", 
    title: "Início da Forja", 
    desc: "Sem a burocracia do banco, autorizamos a fábrica a dar início aos cortes de aço imediatamente.",
    icon: Hammer
  },
];

const CreditoSection = () => {
  return (
    <section id="credito" className="py-24 md:py-32 border-t border-border/50 bg-background relative overflow-hidden">
      {/* Separador de luz superior da seção */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <span className="section-badge mb-6 inline-block">Linha de Crédito Descomplicada</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Financiamento Próprio. <br />
            <span className="text-gradient">Sem Intermediários.</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl text-lg leading-relaxed">
            Tentar aprovar crédito habitacional para projetos inovadores em bancos tradicionais é uma odisseia de papelada. Nós somos a construtora e nós somos o banco. Aprovamos a sua obra de forma direta e lógica.
          </p>
        </motion.div>

        {/* 1. COMPARATIVO */}
        <div className="mb-16 md:mb-24">
          <h3 className="font-display text-2xl font-bold mb-10 flex items-center gap-3">
             <TrendingUp className="text-primary" />
             Comparativo de Eficiência de Crédito
          </h3>

          <div className="hidden md:block glass-card overflow-hidden border-border/50 shadow-2xl">
            <div className="grid grid-cols-3 bg-muted/30 border-b border-border">
              <div className="p-6 font-bold text-muted-foreground uppercase text-xs tracking-widest">Critério de Avaliação</div>
              <div className="p-6 font-bold text-muted-foreground uppercase text-xs tracking-widest border-l border-border/50">Bancos Tradicionais</div>
              <div className="p-6 font-bold text-primary uppercase text-xs tracking-widest border-l border-border/50 bg-primary/5">Alencar Empreendimentos</div>
            </div>
            {comparativos.map((item, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-border/50 last:border-0 group">
                <div className="p-6 font-display font-bold text-foreground bg-background/50 flex items-center">{item.criterio}</div>
                <div className="p-6 text-sm text-muted-foreground flex items-start gap-3 border-l border-border/50 italic"><X size={18} className="text-destructive mt-0.5" />{item.banco}</div>
                <div className="p-6 text-sm text-foreground flex items-start gap-3 border-l border-border/50 bg-primary/5 font-medium group-hover:bg-primary/10 transition-colors"><Check size={18} className="text-primary mt-0.5" />{item.alencar}</div>
              </div>
            ))}
          </div>
        </div>

        {/* LINHA DE SEPARAÇÃO */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-16 md:mb-24" />

        {/* 2. O PROCESSO EM 4 ETAPAS */}
        <div className="mb-16 md:mb-24 relative">
          <h3 className="font-display text-2xl font-bold mb-16 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full" />
            O Processo em 4 Etapas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, i) => (
              <div key={step.num} className="relative z-10 group">
                <div className="glass-card p-8 h-full bg-card/50 border-b-4 border-b-transparent hover:border-b-primary transition-all">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-border flex items-center justify-center font-display font-black text-xl mb-6 group-hover:border-primary group-hover:text-primary transition-all">
                    {step.num}
                  </div>
                  <div className="mb-6 p-3 w-fit rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <step.icon size={24} />
                  </div>
                  <h4 className="font-display font-bold text-lg mb-3">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LINHA DE SEPARAÇÃO */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-16 md:mb-24" />

        {/* 3. GRID: ESTUDO DE CASO vs (SEGURANÇA + DOCUMENTAÇÃO) */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24 items-stretch">
          <div className="glass-card p-8 md:p-12 border-primary/20 bg-primary/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <HandCoins className="text-primary" size={32} />
                <h3 className="font-display text-2xl md:text-3xl font-bold">Estudo de Caso Financeiro</h3>
              </div>
              <p className="text-muted-foreground mb-10 text-base leading-relaxed italic">Exemplo prático de como a nossa linha de crédito absorve ativos para viabilizar projetos em tempo recorde.</p>
              <div className="space-y-5 mb-12">
                <div className="flex justify-between items-center py-4 border-b border-border/50"><span className="text-muted-foreground">Projeto Escolhido:</span><span className="font-bold text-lg">Módulo 6m HC (R$ 58.000)</span></div>
                <div className="flex justify-between items-center py-4 border-b border-border/50 text-primary"><span className="italic font-medium">Veículo na Troca (Exemplo):</span><span className="font-bold text-lg">- R$ 35.000</span></div>
                <div className="flex justify-between items-center py-4 border-b border-border/50"><span className="text-muted-foreground">Entrada em Capital Líquido:</span><span className="font-bold text-lg">- R$ 10.000</span></div>
                <div className="flex justify-between items-center pt-8"><span className="font-display font-bold text-xl uppercase tracking-widest text-primary">Saldo a Parcelar:</span><span className="font-display text-4xl md:text-5xl font-black text-primary">R$ 13.000</span></div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-background border border-primary/30">
              <h4 className="font-display font-bold mb-3 text-primary flex items-center gap-2"><Check size={20} /> A Lógica a seu favor</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">Ao aceitar veículos utilitários ou de passeio, removemos a necessidade de o cliente liquidar ativos à pressa no mercado, absorvendo essa margem de manobra de forma justa e acelerando o contrato da obra.</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="glass-card p-8 md:p-10 border-border/50 flex-1">
              <div className="flex items-center gap-3 mb-8"><ShieldCheck className="text-primary" size={28} /><h3 className="font-display text-2xl font-bold">Segurança Contratual</h3></div>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">O financiamento direto não significa um acordo de boca. Operamos com contratos blindados juridicamente, protegendo os direitos de entrega do cliente e as garantias de pagamento da construtora.</p>
              <ul className="space-y-4">
                {["Cláusulas claras sobre a correção monetária atrelada a índices oficiais (INCC/IPCA).", "Penhora e transferência de titularidade de veículos com documentação reconhecida.", "Prazos de entrega do projeto vinculados estritamente ao contrato."].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground leading-snug"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="glass-card p-8 md:p-10 border-border/50">
              <div className="flex items-center gap-3 mb-6"><FileText className="text-primary" size={24} /><h3 className="font-display text-xl font-bold">Documentação Simples</h3></div>
              <p className="text-muted-foreground mb-8 text-sm italic">O nosso objetivo é aprovar a sua obra. A análise é pragmática.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["CNH ou RG Autenticado.", "Comprovante de Residência.", "Extratos Bancários Rápidos.", "Matrícula do Terreno Base."].map((doc) => (
                  <div key={doc} className="flex items-center gap-3 text-xs font-bold p-3 rounded-xl bg-muted/20 border border-border"><Check size={14} className="text-primary" />{doc}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* LINHA DE SEPARAÇÃO */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-16 md:mb-24" />

        {/* 4. FAQ DO DINHEIRO */}
        <div className="w-full mb-24">
          <div className="flex items-center gap-3 mb-12">
            <div className="h-6 w-1 bg-primary rounded-full" />
            <h3 className="font-display text-2xl md:text-3xl font-bold text-left">FAQ do Dinheiro</h3>
          </div>
          <Accordion type="single" collapsible className="space-y-4 w-full">
            <AccordionItem value="faq-1" className="glass-card border border-border/50 px-6 md:px-8 group data-[state=open]:border-primary/50 transition-all">
              <AccordionTrigger className="text-left font-display text-base md:text-lg font-bold py-6 hover:no-underline group-hover:text-primary transition-colors">
                <div className="flex items-center gap-4">
                  <HelpCircle size={20} className="text-primary/40 group-hover:text-primary transition-colors shrink-0" />
                  Posso antecipar o pagamento das parcelas?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 pl-10 border-t border-border/20 pt-4">
                Sim, é um direito absoluto do cliente. A antecipação (amortização) remove proporcionalmente os juros, reduzindo o custo final.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2" className="glass-card border border-border/50 px-6 md:px-8 group data-[state=open]:border-primary/50 transition-all">
              <AccordionTrigger className="text-left font-display text-base md:text-lg font-bold py-6 hover:no-underline group-hover:text-primary transition-colors">
                <div className="flex items-center gap-4">
                  <HelpCircle size={20} className="text-primary/40 group-hover:text-primary transition-colors shrink-0" />
                  Que veículos não são aceitos?
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm md:text-base leading-relaxed pb-6 pl-10 border-t border-border/20 pt-4">
                Veículos com sinistros graves (leilão/perda total), restrições judiciais ativas ou anteriores a 2013 necessitam de avaliação prévia especial ou são descartados.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* 5. CARD FINAL: O SEU DINHEIRO MERECE RESPEITO (DESIGN RENOVADO) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary/5 shadow-2xl"
        >
          {/* Luz interna (Glow) */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          
          <div className="relative z-10 grid lg:grid-cols-12 items-center">
            {/* Conteúdo Esquerdo */}
            <div className="lg:col-span-8 p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-primary/10 text-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <MessagesSquare size={20} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Abertura de Canal Direto</span>
              </div>
              
              <h3 className="font-display text-3xl md:text-5xl font-bold mb-6 tracking-tighter leading-tight">
                O Seu Dinheiro <br />
                <span className="text-gradient">Merece Respeito.</span>
              </h3>
              
              <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-8">
                Converse com a nossa diretoria. Exponha o seu projeto, mostre o seu veículo de retoma e vamos forjar um plano de pagamento que não destrua o seu fluxo de caixa.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                 <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <BadgeCheck size={16} className="text-primary" /> Negociação Pragmática
                 </div>
                 <div className="flex items-center gap-2 text-xs font-bold text-foreground">
                    <BadgeCheck size={16} className="text-primary" /> Canal de Voz com Diretoria
                 </div>
              </div>
            </div>

            {/* Lado Direito: CTA Principal */}
            <div className="lg:col-span-4 p-8 md:p-16 bg-primary/[0.02] flex flex-col items-center justify-center text-center">
              <div className="mb-8 p-6 rounded-full bg-primary/10 text-primary animate-bounce-slow">
                <HandCoins size={40} />
              </div>
              <a
                href="#contato"
                className="group w-full px-8 py-5 bg-primary text-primary-foreground font-black rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_50px_rgba(var(--primary),0.5)] hover:scale-105 transition-all duration-300 uppercase text-xs tracking-widest"
              >
                Simular Condições Agora
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
              <p className="mt-6 text-[10px] text-muted-foreground uppercase font-bold tracking-widest">
                Resposta técnica em até 24h
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreditoSection;