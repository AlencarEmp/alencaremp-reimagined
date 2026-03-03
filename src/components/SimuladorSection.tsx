import { useState } from "react";
import { motion } from "framer-motion";
import { PiggyBank, ArrowRight, Maximize2, TrendingDown } from "lucide-react";

const SimuladorSection = () => {
  const [area, setArea] = useState(80);

  // Valores ajustados (Proporção: 500m² = 1.6M Tradicional / 1.05M Alencar)
  const PRECO_TRADICIONAL_M2 = 3200; 
  const PRECO_ALENCAR_M2 = 2100;

  const custoTradicional = area * PRECO_TRADICIONAL_M2;
  const custoAlencar = area * PRECO_ALENCAR_M2;
  const economia = custoTradicional - custoAlencar;

  const formatCurrency = (v: number) =>
    v.toLocaleString("pt-BR", { 
      style: "currency", 
      currency: "BRL", 
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    });

  return (
    <section id="simulador" className="py-24 md:py-32 border-t border-border/50 bg-background relative overflow-hidden">
      {/* Elementos visuais de fundo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container">
        {/* Cabeçalho Alinhado à Esquerda */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="section-badge mb-6 inline-block">Eficiência Financeira</span>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            O Inteligente <br />
            <span className="text-gradient">é construir com lucro.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Simule o investimento necessário para o seu projeto e visualize a economia imediata de capital ao escolher a engenharia modular Alencar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Lado Esquerdo: Área do Slider */}
          <div className="space-y-8">
            <div className="glass-card p-8 md:p-12 border-primary/20 bg-primary/5 relative overflow-hidden">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    <Maximize2 size={24} />
                  </div>
                  <label className="text-sm font-bold uppercase tracking-widest text-primary">
                    Área Útil Desejada
                  </label>
                </div>
                <div className="font-display text-5xl md:text-6xl font-bold text-foreground">
                  {area}<span className="text-primary text-2xl ml-1">m²</span>
                </div>
              </div>
              
              <div className="relative py-6">
                <input
                  type="range"
                  min={15}
                  max={500}
                  step={5}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-3 bg-border/50 rounded-full appearance-none cursor-pointer accent-primary"
                />
                <div className="flex justify-between mt-4 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                  <span>15 m²</span>
                  <span>250 m²</span>
                  <span>500 m²</span>
                </div>
              </div>
            </div>

            {/* Cards de Comparação Secundários */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-6 border-border bg-background/50">
                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-2">Construção Tradicional</div>
                <div className="text-xl md:text-2xl font-display font-bold opacity-40">
                  {formatCurrency(custoTradicional)}
                </div>
              </div>

              <div className="glass-card p-6 border-primary/20 bg-background/50">
                <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-2">Módulos Alencar</div>
                <div className="text-xl md:text-2xl font-display font-bold text-foreground">
                  {formatCurrency(custoAlencar)}
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Card de Economia (Destaque Máximo) */}
          <motion.div 
            key={area}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card p-8 md:p-12 border-primary/50 bg-primary/10 relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[400px] shadow-[0_0_50px_rgba(var(--primary),0.1)]"
          >
            <div className="absolute -top-10 -right-10 opacity-10 rotate-12">
              <TrendingDown size={200} />
            </div>

            <div className="relative z-10 w-full">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-[11px] font-black uppercase tracking-widest mb-6">
                Economia Estimada
              </div>
              
              <h3 className="font-display text-xl text-muted-foreground mb-4">
                Capital preservado no seu bolso:
              </h3>
              
              <div className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-primary mb-8 drop-shadow-[0_0_20px_rgba(var(--primary),0.3)]">
                {formatCurrency(economia)}
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-10" />
              
              {/* Texto Atualizado conforme solicitação */}
              <p className="text-muted-foreground text-sm max-w-md mx-auto mb-10 leading-relaxed italic">
                *Valores baseados na média nacional do Custo Unitário Básico (CUB) para habitações de alto padrão. Além da economia de capital, a rapidez da nossa montagem poupa meses de custos indiretos, como aluguel e taxas de obra que são inerentes à alvenaria.
              </p>

              <a
                href="#contato"
                className="group w-full md:w-auto px-12 py-5 bg-primary text-primary-foreground font-black rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_50px_rgba(var(--primary),0.6)] hover:scale-105 transition-all duration-300 uppercase text-sm tracking-widest"
              >
                Garantir esta economia
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SimuladorSection;