import { useState } from "react";
import { motion } from "framer-motion";

const SimuladorSection = () => {
  const [area, setArea] = useState(80);
  const custoTradicional = area * 2400;
  const custoAlencar = area * 1575;
  const economia = custoTradicional - custoAlencar;

  const formatCurrency = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 });

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container max-w-4xl">
        <span className="section-badge mb-6 inline-block">Simulador Financeiro</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-12">
          Comparativo de Eficiência: Container vs. Alvenaria
        </h2>

        <div className="glass-card p-8 md:p-12">
          <label className="block text-sm text-muted-foreground mb-3">
            Selecione a área útil do seu projeto (m²)
          </label>
          <div className="flex items-center gap-4 mb-10">
            <input
              type="range"
              min={15}
              max={300}
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              className="flex-1 accent-primary"
              aria-label="Área em metros quadrados"
            />
            <span className="font-display text-2xl font-bold text-primary w-24 text-right">
              {area}m²
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-xl bg-muted/50 border border-border">
              <div className="text-sm text-muted-foreground mb-1">Construção Tradicional</div>
              <div className="text-xs text-muted-foreground mb-3">Custo Estimado (CUB)</div>
              <div className="font-display text-2xl font-bold">{formatCurrency(custoTradicional)}</div>
            </div>
            <div className="p-6 rounded-xl bg-primary/10 border border-primary/30">
              <div className="text-sm text-muted-foreground mb-1">Módulos Alencar</div>
              <div className="text-xs text-muted-foreground mb-3">Investimento Otimizado</div>
              <div className="font-display text-2xl font-bold text-primary">{formatCurrency(custoAlencar)}</div>
            </div>
          </div>

          <div className="text-center p-6 rounded-xl bg-primary/5 border border-primary/20">
            <h3 className="font-display text-lg font-semibold mb-1">A sua economia estimada:</h3>
            <div className="font-display text-4xl font-bold text-primary">{formatCurrency(economia)}</div>
          </div>

          <p className="text-xs text-muted-foreground mt-6 leading-relaxed">
            *Valores baseados na média nacional do Custo Unitário Básico (CUB) para habitações de alto padrão. Além da economia de capital, a rapidez da nossa montagem poupa meses de custos indiretos, como aluguel e taxas de obra que são inerentes à alvenaria.
          </p>

          <div className="mt-8 text-center">
            <a
              href="#contato"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg inline-block hover:opacity-90 transition-opacity"
            >
              Solicitar Análise Exata
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimuladorSection;
