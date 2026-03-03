import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  ArrowUp, 
  MapPin, 
  Phone,
  ShieldCheck,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();
  const logoUrl = "https://alencaremp.com.br/img/logo.png";

  return (
    <footer className="relative bg-background pt-24 pb-8 overflow-hidden border-t border-border/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          <div className="lg:col-span-5 space-y-10">
            <a href="#inicio" className="block transition-transform hover:scale-105 active:scale-95 w-fit">
              <img 
                src={logoUrl} 
                alt="Alencar Empreendimentos" 
                className="h-16 md:h-20 w-auto object-contain" 
              />
            </a>
            
            <div className="flex items-center gap-5">
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500">
                <Instagram size={22} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-500">
                <Facebook size={22} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-10 text-primary">Navegação</h4>
            <nav className="flex flex-col gap-5">
              {[
                { name: "Início", href: "/#inicio" },
                { name: "Containers", href: "/#containers" },
                { name: "Crédito Próprio", href: "/#credito" },
                { name: "Sobre Nós", href: "/#sobre" },
                { name: "Contato", href: "/#contato" },
              ].map((link) => (
                <a key={link.name} href={link.href} className="text-sm font-bold text-muted-foreground hover:text-foreground hover:translate-x-2 transition-all flex items-center gap-3 group">
                  <ArrowRight size={14} className="text-primary opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-10 text-primary">QG Operacional</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-2xl bg-muted/30 border border-border group-hover:border-primary/40 transition-colors">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Localização</div>
                  <p className="text-sm text-foreground font-bold leading-relaxed">São Bernardo do Campo, SP<br />Polo Industrial</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="p-4 rounded-2xl bg-muted/30 border border-border group-hover:border-primary/40 transition-colors">
                  <Phone size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Contato Direto</div>
                  <p className="text-lg text-foreground font-black tracking-tighter">(11) 93499-1883</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior: Copyright e Créditos Minimalistas */}
        <div className="pt-10 border-t border-border/30 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
            <span>© {currentYear} Alencar Empreendimentos</span>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
            <Link to="/politica-de-privacidade" className="hover:text-primary transition-colors flex items-center gap-2">
              <ShieldCheck size={12} /> Política de Privacidade
            </Link>
            <div className="hidden md:block w-1 h-1 rounded-full bg-border" />
            <span className="opacity-40 hover:opacity-100 transition-opacity cursor-default">
              Site por Studio Morb™
            </span>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-3 px-6 py-3 bg-muted/30 border border-border rounded-xl text-[10px] font-black uppercase tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Topo <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>

      <div className="absolute -bottom-24 -right-24 opacity-[0.01] pointer-events-none select-none">
        <h2 className="text-[250px] font-black leading-none">ALENCAR</h2>
      </div>
    </footer>
  );
};

export default Footer;