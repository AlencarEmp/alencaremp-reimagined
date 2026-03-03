import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vocês atendem fora de São Bernardo do Campo?",
    a: "Sim. Nossa fábrica está em SP, mas despachamos projetos modulares via frota logística para grande parte do território nacional. Consulte a viabilidade para o seu CEP.",
  },
  {
    q: "Qual é a durabilidade real de um Container?",
    a: "Os containers marítimos são feitos de Aço Corten, desenvolvido para resistir à salinidade e intempéries oceânicas extremas. Com o nosso tratamento de pintura, a durabilidade pode ultrapassar facilmente os 90 anos, superior a muita construção em alvenaria.",
  },
  {
    q: "Como funciona o isolamento térmico? Fica quente?",
    a: "Não. Aplicamos revestimento refletivo no exterior e preenchemos as paredes internas com Lã de Rocha de alta densidade e fechamento em Drywall. O ambiente interno torna-se um regulador térmico, mantendo-se fresco no verão e confortável no inverno.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container max-w-3xl">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">Dúvidas Rápidas</h2>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-border">
              <AccordionTrigger className="text-left font-display font-semibold py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-16 glass-card p-8 text-center">
          <h3 className="font-display text-xl font-semibold mb-2">Garantia Estrutural de 10 Anos</h3>
          <p className="text-muted-foreground">
            | Em todos os projetos executados pela Alencar Empreendimentos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
