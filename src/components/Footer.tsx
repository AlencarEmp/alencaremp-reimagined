import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="font-display text-lg font-bold">
            ALENCAR<span className="text-primary"> Empreendimentos</span>
          </Link>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
            <Link to="/containers" className="hover:text-foreground transition-colors">Containers</Link>
            <Link to="/credito" className="hover:text-foreground transition-colors">Crédito Próprio</Link>
            <Link to="/sobre" className="hover:text-foreground transition-colors">Sobre Nós</Link>
            <Link to="/contato" className="hover:text-foreground transition-colors">Contato</Link>
            <Link to="/faq" className="hover:text-foreground transition-colors">FAQ</Link>
            <Link to="/politica" className="hover:text-foreground transition-colors">Política de Privacidade</Link>
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
