import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "CONTAINERS", href: "#containers" },
  { label: "CRÉDITO PRÓPRIO", href: "#credito" },
  { label: "SOBRE NÓS", href: "#sobre" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueia o scroll da página quando o menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const logoUrl = "https://alencaremp.com.br/img/logo.png";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || isOpen 
          ? "bg-background border-b border-border/50 py-3 shadow-2xl" 
          : "bg-transparent border-b border-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        
        {/* LOGO OFICIAL - SEM CAIXA E SEM TEXTO */}
        <a href="#inicio" className="relative z-[110] block transition-transform hover:scale-105 active:scale-95">
          <img 
            src={logoUrl} 
            alt="Alencar Empreendimentos" 
            className="h-10 md:h-14 w-auto object-contain" 
          />
        </a>

        {/* Desktop Navigation - RESTAURADO PARA TEXT-SM */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="px-6 py-3 bg-primary text-primary-foreground text-sm font-bold rounded-xl hover:shadow-[0_10px_30px_rgba(var(--primary),0.4)] hover:scale-105 transition-all uppercase tracking-wide"
          >
            FALE CONOSCO
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[110] w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Full Screen Takeover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-background z-[105] md:hidden flex flex-col justify-center p-8 pt-24"
          >
            {/* Grid Decorativo de Fundo */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
            
            <nav className="flex flex-col gap-8 relative z-10">
              {navItems.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i }}
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display font-black text-foreground hover:text-primary transition-all uppercase tracking-tighter flex items-center justify-between group"
                >
                  {item.label}
                  <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" size={32} />
                </motion.a>
              ))}
              
              <div className="h-px w-full bg-border/50 my-4" />
              
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="w-full py-6 bg-primary text-primary-foreground font-black rounded-2xl text-center text-sm tracking-widest uppercase shadow-[0_20px_40px_rgba(var(--primary),0.3)]"
              >
                FALE CONOSCO
              </motion.a>

              <div className="mt-8">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground mb-2">Central de Atendimento</p>
                <p className="text-xl font-bold text-foreground tracking-tight">(11) 93499-1883</p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;