import { motion } from "framer-motion";

const SobreSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <span className="section-badge mb-6 inline-block">A Nossa Estrutura Corporativa</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          O Império Alencar.
        </h2>
        <p className="text-muted-foreground max-w-3xl mb-16 text-lg leading-relaxed">
          Nascemos com a missão de erradicar o caos da construção civil e instaurar a precisão industrial. Somos arquitetos, engenheiros e mestres fabris.
        </p>

        {/* Capacidade Fabril */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">Capacidade Fabril (SBC/SP)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A nossa sede em São Bernardo do Campo não é um estaleiro poeirento. É um pavilhão industrial de alta performance preparado para montar lares e comercias com precisão de linha de montagem automotiva.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Produção "Off-Site" totalmente imune a paralisações por chuva.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Equipamentos de corte, pontes rolantes e soldadura especializada.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">Cabines de pintura profissional isoladas do ambiente externo.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Instalações Industriais"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Arquitetura Consultiva */}
        <div className="mb-24">
          <h3 className="font-display text-2xl font-semibold mb-4">A Arquitetura Consultiva</h3>
          <p className="text-muted-foreground max-w-3xl leading-relaxed mb-10">
            Você não compra apenas uma caixa de aço. Você contrata o intelecto de projetistas e arquitetos dedicados. Desde a assinatura do contrato, iniciamos uma jornada imersiva para garantir que o projeto final seja o espelho da sua exigência.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Desenho Personalizado", desc: "As nossas plantas base podem ser ajustadas. Layouts, aberturas de janelas e distribuição interna adaptada ao seu lote." },
              { title: "Renderização 3D", desc: "Antes de cortarmos 1 centímetro de aço, você visualiza a sua obra completa em maquetes eletrónicas detalhadas." },
              { title: "Supervisão Fabril", desc: "O mesmo engenheiro que aprova o CAD é o que inspeciona a solda na fábrica, garantindo tradução perfeita." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logística */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold mb-4">Logística de Combate</h3>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            A nossa base fica em São Paulo, mas os nossos camiões Munck despacham módulos de elite para toda a região Sudeste, Sul e parte do Centro-Oeste. A distância não é um problema para a nossa arquitetura; basta a rodovia ter acesso para a carreta e nós aterramos a sua mansão.
          </p>
        </div>

        {/* Upcycling */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-semibold mb-4">A Ética do Upcycling</h3>
          <p className="text-muted-foreground max-w-3xl leading-relaxed">
            Resgatar toneladas de aço abandonadas em portos (Upcycling) é o ato ecológico mais contundente do mercado atual. Recusamos o desperdício brutal do cimento e forjamos um futuro onde o reaproveitamento de materiais de grau militar cria casas eternas.
          </p>
        </div>

        {/* Compliance */}
        <h3 className="font-display text-2xl font-semibold mb-6">Rigor Normativo e Compliance</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { code: "CREA / CAU", label: "ARTs Emitidas" },
            { code: "NR-18", label: "Segurança de Obra" },
            { code: "ISO-9001*", label: "Base Produtiva" },
            { code: "ABNT", label: "Cálculo Estrutural" },
          ].map((item) => (
            <div key={item.code} className="glass-card p-5 text-center">
              <div className="font-display font-bold text-primary text-lg">{item.code}</div>
              <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Pós-Venda */}
        <div className="glass-card p-8 max-w-3xl mb-10">
          <h3 className="font-display text-xl font-semibold mb-4">Ecossistema de Pós-Venda</h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Ao entregar a chave, a nossa relação não termina, evolui. A Alencar Empreendimentos possui uma divisão focada no suporte estrutural da sua aquisição. Emitimos o <strong className="text-foreground">Manual do Proprietário Modular</strong>, orientações precisas de manutenção e garantimos a cobertura total dos 10 anos de solda e vedação estipulados em contrato.
          </p>
        </div>

        <div className="text-center">
          <a
            href="#contato"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg inline-block hover:opacity-90 transition-opacity"
          >
            Fazer Parte do Grupo
          </a>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
