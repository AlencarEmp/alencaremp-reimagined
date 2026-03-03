const PoliticaSection = () => {
  return (
    <section id="politica" className="py-24 md:py-32 border-t border-border">
      <div className="container max-w-3xl">
        <h3 className="font-display text-2xl font-semibold mb-4">Política de Privacidade</h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          A Alencar Empreendimentos protege e isola os dados submetidos na nossa plataforma tal como isola as chapas dos contentores. Atuamos sob as regras da LGPD.
        </p>

        <div className="space-y-8">
          <div>
            <h4 className="font-display font-semibold mb-2">1. Coleta Tática</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Recolhemos unicamente o necessário para calcular rotas e fechar orçamentos: Contacto, Nome e Cidade de Instalação.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-2">2. Infiltração Negada</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              O seu número de WhatsApp e e-mail não será vendido para listagens de terceiros. As nossas comunicações são sempre ligadas diretamente ao andamento ou ofertas de módulos habitacionais.
            </p>
          </div>
        </div>

        {/* Laudo de Descontaminação */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold mb-4">Laudo de Descontaminação</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Para nós, segurança e habitabilidade são cruciais. Nunca lhe venderíamos uma caixa que pudesse colocar a sua família em risco respiratório.
          </p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              Destruição e substituição integral do piso naval original (que contém compostos marítimos).
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              Jateamento de paredes e limpeza a nível industrial em ambiente fabril.
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              Aplicação de camadas grossas de Epóxi e primers em todas as faces de aço.
            </li>
          </ul>
          <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
            A câmara resultante é inodora, limpa e perfeitamente apta a receber estofos luxuosos e crianças pequenas.
          </p>
        </div>

        {/* Termos de Estrutura */}
        <div className="mt-16">
          <h3 className="font-display text-xl font-semibold mb-4">Termos de Estrutura</h3>
          <p className="text-muted-foreground mb-6">
            Um tijolo pode rachar com a secagem da terra; as nossas soldas não cedem sob o peso da realidade.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="glass-card p-6 text-center">
              <div className="font-display text-4xl font-bold text-primary">10</div>
              <div className="text-sm text-muted-foreground mt-1">Anos Solda e Vedação</div>
            </div>
            <div className="glass-card p-6 text-center">
              <div className="font-display text-4xl font-bold text-primary">90</div>
              <div className="text-sm text-muted-foreground mt-1">Vida do Aço Corten</div>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              Estanqueidade total protegida contra infiltrações (chuvas convencionais).
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
              Cálculos assentes na durabilidade inquebrável da fusão metálica.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PoliticaSection;
