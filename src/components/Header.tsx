import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "INÍCIO", href: "#inicio" },
  { label: "CONTAINERS", href: "#containers" },
  { label: "CRÉDITO PRÓPRIO", href: "#credito" },
  { label: "SOBRE NÓS", href: "#sobre" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="font-display text-xl font-bold tracking-tight text-foreground">
          ALENCAR<span className="text-primary"> Empreendimentos</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contato"
            className="px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            FALE CONOSCO
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center text-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-xl z-40"
          >
            <nav className="flex flex-col items-center justify-center gap-8 pt-20">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg text-lg"
              >
                FALE CONOSCO
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
