import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CreditoSection = () => {
  return (
    <section id="credito" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <span className="section-badge mb-6 inline-block">Linha de Crédito Descomplicada</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Financiamento Próprio. <span className="text-gradient">Sem Intermediários.</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mb-16 text-lg leading-relaxed">
          Tentar aprovar crédito habitacional para projetos inovadores em bancos tradicionais é uma odisseia de papelada. Nós somos a construtora e nós somos o banco. Aprovamos a sua obra de forma direta e lógica.
        </p>

        {/* Comparativo */}
        <h3 className="font-display text-xl font-semibold mb-6">Comparativo de Eficiência de Crédito</h3>
        <div className="overflow-x-auto mb-16">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-4 text-muted-foreground font-medium">Critério de Avaliação</th>
                <th className="text-left py-4 pr-4 text-muted-foreground font-medium">Bancos Tradicionais</th>
                <th className="text-left py-4 text-primary font-medium">Alencar Empreendimentos</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border/50">
                <td className="py-4 pr-4 font-medium text-foreground">Velocidade de Análise</td>
                <td className="py-4 pr-4">Semanas de análise gerencial e exigência de garantias abusivas.</td>
                <td className="py-4 text-foreground">Aprovação pragmática em dias, focada na viabilidade real do projeto.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-4 font-medium text-foreground">Flexibilidade de Ativos</td>
                <td className="py-4 pr-4">Exigem pagamentos exclusivamente em capital líquido e transferências.</td>
                <td className="py-4 text-foreground">Avaliamos e aceitamos o seu carro como parte do pagamento.</td>
              </tr>
              <tr className="border-b border-border/50">
                <td className="py-4 pr-4 font-medium text-foreground">Andamento da Obra</td>
                <td className="py-4 pr-4">Atrasos constantes aguardando vistorias de engenheiros do banco para libertar fundos.</td>
                <td className="py-4 text-foreground">O capital fica dentro de casa. Focamo-nos 100% em construir e entregar rápido.</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Processo 4 Etapas */}
        <h3 className="font-display text-xl font-semibold mb-8">O Processo em 4 Etapas</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { num: "1", title: "Fecho do Projeto", desc: "Definimos a planta, a metragem e elaboramos o valor exato para o fecho do contrato." },
            { num: "2", title: "Negociação (Permuta)", desc: "Ajustamos o capital de entrada. Se preferir, trazemos o seu automóvel para avaliação comercial." },
            { num: "3", title: "Análise de Saldo", desc: "O valor remanescente é diluído em parcelas controladas com a diretoria financeira do Grupo." },
            { num: "4", title: "Início da Forja", desc: "Sem a burocracia do banco, autorizamos a fábrica a dar início aos cortes de aço imediatamente." },
          ].map((step) => (
            <div key={step.num}>
              <div className="font-display text-5xl font-bold text-primary/20 mb-3">{step.num}</div>
              <h4 className="font-display font-semibold mb-2">{step.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Estudo de Caso */}
        <h3 className="font-display text-xl font-semibold mb-6">Estudo de Caso Financeiro</h3>
        <p className="text-muted-foreground mb-8">
          Exemplo prático de como a nossa linha de crédito absorve ativos para viabilizar projetos em tempo recorde.
        </p>
        <div className="glass-card p-8 max-w-2xl mb-16">
          <div className="space-y-4 text-sm">
            <div className="flex justify-between border-b border-border/50 pb-3">
              <span className="text-muted-foreground">Projeto Escolhido:</span>
              <span className="font-medium">Módulo 6m HC (R$ 58.000)</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-3">
              <span className="text-muted-foreground">Veículo na Troca (Exemplo):</span>
              <span className="font-medium">- R$ 35.000 (Abatido)</span>
            </div>
            <div className="flex justify-between border-b border-border/50 pb-3">
              <span className="text-muted-foreground">Entrada em Capital Líquido:</span>
              <span className="font-medium">- R$ 10.000 (Abatido)</span>
            </div>
            <div className="flex justify-between pt-2">
              <span className="font-semibold">Saldo Remanescente a Parcelar:</span>
              <span className="font-display text-2xl font-bold text-primary">R$ 13.000</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border">
            <h4 className="font-display font-semibold mb-2">A Lógica a seu favor</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Ao aceitar veículos utilitários ou de passeio, removemos a necessidade de o cliente liquidar ativos à pressa no mercado, absorvendo essa margem de manobra de forma justa e acelerando o contrato da obra.
            </p>
          </div>
        </div>

        {/* Segurança Contratual */}
        <h3 className="font-display text-xl font-semibold mb-4">Segurança Contratual</h3>
        <p className="text-muted-foreground mb-6 leading-relaxed">
          O financiamento direto não significa um acordo de boca. Operamos com contratos blindados juridicamente, protegendo os direitos de entrega do cliente e as garantias de pagamento da construtora.
        </p>
        <ul className="space-y-3 text-sm text-muted-foreground mb-12">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            Cláusulas claras sobre a correção monetária atrelada a índices oficiais (INCC/IPCA).
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            Penhora e transferência de titularidade de veículos com documentação reconhecida.
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            Prazos de entrega do projeto vinculados estritamente ao contrato.
          </li>
        </ul>

        {/* Documentação */}
        <h3 className="font-display text-xl font-semibold mb-4">Documentação Simples</h3>
        <p className="text-muted-foreground mb-4">O nosso objetivo é aprovar a sua obra. A análise é pragmática.</p>
        <ul className="space-y-2 text-sm text-muted-foreground mb-12">
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> CNH ou RG Autenticado.</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Comprovante de Residência.</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Extratos Bancários Rápidos (Comprovação Simplificada).</li>
          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Matrícula do Terreno Base.</li>
        </ul>

        {/* FAQ Dinheiro */}
        <h3 className="font-display text-xl font-semibold mb-6">FAQ do Dinheiro</h3>
        <Accordion type="single" collapsible className="space-y-3 max-w-3xl mb-16">
          <AccordionItem value="faq-money-1" className="glass-card px-6 border-border">
            <AccordionTrigger className="text-left font-display font-semibold py-5 hover:no-underline">
              Posso antecipar o pagamento das parcelas?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              Sim, é um direito absoluto do cliente. A antecipação (amortização) remove proporcionalmente os juros, reduzindo o custo final.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="faq-money-2" className="glass-card px-6 border-border">
            <AccordionTrigger className="text-left font-display font-semibold py-5 hover:no-underline">
              Que veículos não são aceites?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              Veículos com sinistros graves (leilão/perda total), restrições judiciais ativas ou anteriores a 2013 necessitam de avaliação prévia especial ou são descartados.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* CTA Final */}
        <div className="glass-card p-10 text-center max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-semibold mb-4">O Seu Dinheiro Merece Respeito.</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Converse com a nossa diretoria. Exponha o seu projeto, mostre o seu veículo de retoma e vamos forjar um plano de pagamento que não destrua o seu fluxo de caixa.
          </p>
          <a
            href="#contato"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg inline-block hover:opacity-90 transition-opacity"
          >
            Simular Condições Agora
          </a>
        </div>
      </div>
    </section>
  );
};

export default CreditoSection;
