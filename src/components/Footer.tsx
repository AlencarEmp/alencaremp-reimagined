const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-lg font-bold">
            ALENCAR<span className="text-primary"> Empreendimentos</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#inicio" className="hover:text-foreground transition-colors">Início</a>
            <a href="#containers" className="hover:text-foreground transition-colors">Containers</a>
            <a href="#credito" className="hover:text-foreground transition-colors">Crédito Próprio</a>
            <a href="#sobre" className="hover:text-foreground transition-colors">Sobre Nós</a>
            <a href="#contato" className="hover:text-foreground transition-colors">Contato</a>
            <a href="#politica" className="hover:text-foreground transition-colors">Política de Privacidade</a>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alencar Empreendimentos. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
