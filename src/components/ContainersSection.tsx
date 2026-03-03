import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  ArrowUpToLine, 
  ThermometerSun, 
  Waves, 
  Layers, 
  CheckCircle2,
  Truck,
  Anchor,
  Maximize2,
  Store,
  Briefcase,
  UtensilsCrossed
} from "lucide-react";

const models = [
  {
    img: "https://alencaremp.com.br/img/01.png",
    badge: "Start",
    title: "Kitnet Modular",
    specs: "15m² (Container 20 Pés)",
    desc: "A solução inteligente para investimento em locação ou espaço compacto. Layout funcional que integra quarto, copa e banheiro com requinte.",
    features: ["Banheiro Completo Revestido", "Instalação Ágil no Lote"],
    price: "R$ 45.900",
  },
  {
    img: "https://alencaremp.com.br/img/02.png",
    badge: "Destaque",
    title: "Estúdio 6m HC",
    specs: "15m² (High Cube)",
    desc: "Maior volumetria interna graças ao formato High Cube (pé direito elevado). Permite forros de gesso trabalhados e esquadrias panorâmicas.",
    features: ["Altura Livre Superior a 2.80m", "Excelente Iluminação Natural"],
    price: "R$ 58.000",
  },
  {
    img: "https://alencaremp.com.br/img/03.png",
    badge: "Master",
    title: "Residência 12m",
    specs: "30m² (40 Pés High Cube)",
    desc: "Amplo espaço linear permitindo divisões bem definidas: suíte confortável, sala de estar espaçosa e cozinha completa. O verdadeiro lar modular.",
    features: ["Ambientes Compartimentados", "Isolamento Premium Completo"],
    price: "R$ 85.000",
  },
];

const corporateProjects = [
  { 
    title: "Lojas Pop-Up", 
    desc: "Crie pontos de venda temporários ou itinerantes com forte apelo visual em feiras e eventos comerciais.",
    icon: <Store size={24} /> 
  },
  { 
    title: "Escritórios Acoplados", 
    desc: "Ambientes corporativos velozes, salas de reunião envidraçadas e infraestrutura de TI embutida de fábrica.",
    icon: <Briefcase size={24} /> 
  },
  { 
    title: "Bares e Franquias", 
    desc: "O modelo perfeito para expansão rápida, padronizada e sustentável de franquias gastronômicas.",
    icon: <UtensilsCrossed size={24} /> 
  },
];

const ContainersSection = () => {
  return (
    <section id="containers" className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <span className="section-badge mb-6 inline-block">Divisão Habitacional e Comercial</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Engenharia Modular <span className="text-gradient">em Aço Naval.</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mb-6 text-lg leading-relaxed">
          A fusão perfeita entre durabilidade estrutural, design contemporâneo e conforto termoacústico. Descubra como transformamos containers em espaços premium em tempo recorde.
        </p>

        <h3 className="font-display text-2xl font-semibold mt-12 md:mt-16 mb-8 md:mb-10">Nossos Projetos Residenciais</h3>
        
        {/* --- PROJETOS RESIDENCIAIS COM MOVIMENTO --- */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group glass-card overflow-hidden flex flex-col hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={m.img} 
                  alt={m.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  loading="lazy" 
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-md shadow-lg">
                  {m.badge}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">{m.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{m.specs}</p>
                <p className="text-muted-foreground text-sm mt-4 leading-relaxed flex-1">{m.desc}</p>
                <ul className="mt-4 space-y-2">
                  {m.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground">A partir de</div>
                  <div className="font-display text-2xl font-bold text-primary">{m.price}</div>
                </div>
                <a
                  href="#contato"
                  className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg text-center text-sm hover:opacity-90 transition-opacity"
                >
                  Saber Mais
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- ANATOMIA ESTRUTURAL --- */}
        <div className="mt-16 md:mt-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-1 lg:order-1 space-y-4 md:space-y-6">
              <div className="glass-card p-4 md:p-5 border border-primary/20 bg-primary/5">
                <span className="text-primary font-semibold tracking-widest text-[10px] md:text-xs uppercase">Anatomia Estrutural</span>
                <h3 className="font-display text-xl md:text-2xl font-bold mt-1">Construído para durar gerações.</h3>
              </div>
              
              <div className="glass-card p-6 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold mb-2">Aço Corten Patinável</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Não é chapa comum. É uma liga de aço naval desenvolvida para resistir à salinidade e tempestades oceânicas. Quando devidamente pintado, torna-se um escudo protetor contra o tempo, superando a durabilidade do tijolo e cimento.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    <ArrowUpToLine size={24} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold mb-2">O Pé Direito "High Cube"</h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Exigimos o formato HC (2.90m de altura externa). Isso confere-nos o poder e o espaço para instalar tetos rebaixados em Drywall, ocultar toda a infraestrutura elétrica e manter uma altura interior sumptuosa e elegante.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1512412086111-9257d079633e?auto=format&fit=crop&q=80&w=800"
                alt="Estrutura de Aço Naval"
                className="rounded-2xl shadow-2xl border border-border object-cover w-full h-[300px] md:h-[500px]"
              />
            </div>
          </div>
        </div>

        {/* --- CONFORTO TÉRMICO E ACÚSTICO --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 md:mt-32 glass-card p-6 md:p-12 border border-primary/20 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <ThermometerSun size={200} />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 md:mb-12">
              <div className="p-4 bg-primary text-primary-foreground rounded-2xl w-fit">
                <ThermometerSun size={32} />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl font-bold">Conforto Térmico e Acústico</h3>
                <p className="text-primary font-medium mt-1">"Dentro do container faz calor". Essa é a frase de amadores.</p>
              </div>
            </div>

            <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-12 max-w-4xl">
              Nós aplicamos a ciência termodinâmica para garantir que o interior se mantenha como uma garrafa térmica, independente do clima exterior.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Waves size={20} />
                  <h4 className="font-display font-bold uppercase tracking-wider text-sm">Barreira Exterior</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Aplicação de revestimentos e tintas cerâmicas reflexivas no teto, repelindo a esmagadora maioria dos raios UV diretos.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <Layers size={20} />
                  <h4 className="font-display font-bold uppercase tracking-wider text-sm">Núcleo de Absorção</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Preenchimento total das paredes com Lã de Rocha de alta densidade (incombustível), bloqueando a transferência de calor e ruídos exteriores.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle2 size={20} />
                  <h4 className="font-display font-bold uppercase tracking-wider text-sm">Fechamento Liso</h4>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Estruturação interna finalizada com Drywall duplo. Placas Resistentes à Umidade (Verdes) em áreas molhadas, preparadas para massa e pintura.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- EXPANSÃO MODULAR --- */}
        <div className="mt-16 md:mt-32 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-2xl overflow-hidden order-1 md:order-1 border border-border">
            <img
              src="https://images.unsplash.com/photo-1525438160292-a4a860951216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Mansão Modular Acoplada"
              className="w-full h-[300px] md:h-[400px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-2 md:order-2">
            <div className="glass-card p-6 md:p-10 border-l-4 border-l-primary">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <Maximize2 size={24} />
                <h3 className="font-display text-2xl md:text-3xl font-bold">Expansão Modular Contínua</h3>
              </div>
              <p className="text-muted-foreground mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                A arquitetura em aço não tem limites. Se a sua família aumentar ou o seu negócio prosperar, o módulo acompanha o crescimento.
              </p>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <div className="h-2 w-2 mt-1.5 rounded-full bg-primary shrink-0" />
                  <p><strong>Acoplamento Lateral:</strong> <span className="text-muted-foreground">Removemos as paredes e fundimos múltiplos containers para criar salas com vãos livres de até 60m².</span></p>
                </li>
                <li className="flex gap-3">
                  <div className="h-2 w-2 mt-1.5 rounded-full bg-primary shrink-0" />
                  <p><strong>Verticalização:</strong> <span className="text-muted-foreground">Empilhamos os módulos com total segurança para criar residências ou escritórios de 2 e 3 andares (Sobrados).</span></p>
                </li>
                <li className="flex gap-3">
                  <div className="h-2 w-2 mt-1.5 rounded-full bg-primary shrink-0" />
                  <p><strong>Vedações Blindadas:</strong> <span className="text-muted-foreground">Utilização de calhas estruturais e selantes de poliuretano industrial na junção dos módulos.</span></p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- MOBILIDADE E FUNDAÇÕES --- */}
        <div className="mt-16 md:mt-32">
          <div className="glass-card p-6 md:p-12 border-l-4 border-l-primary relative">
             <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <Truck size={28} />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold">Mobilidade e Fundações Leves</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                      Pense num container como um monobloco independente.<br />
                      Ele não precisa de estar ancorado numa fundação caríssima. Sapatas de betão nas extremidades ou um "Radier" simples são suficientes para apoiar as suas toneladas.
                    </p>
                  </div>
                  
                  <div className="bg-background/40 p-6 rounded-2xl border border-border">
                    <div className="flex items-center gap-3 mb-3 text-primary">
                      <Anchor size={20} />
                      <h4 className="font-display font-bold uppercase tracking-widest text-sm">A Vida Nômade é Real</h4>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Se um dia decidir vender o terreno, ou simplesmente odiar os vizinhos, basta desligar a canalização, contratar um caminhão Munck e transportar a sua casa inteira para a outra ponta do país. Tente fazer isso com tijolos.
                    </p>
                  </div>
                </div>
             </div>
          </div>
        </div>

        {/* --- LINHA DE DIVISÃO --- */}
        <div className="border-t border-border mt-16 md:mt-32" />

        {/* --- PROJETOS CORPORATIVOS COM MOVIMENTO --- */}
        <div id="corporativo" className="mt-16 md:mt-32">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-primary font-semibold tracking-widest text-xs uppercase mb-2 block">Soluções B2B</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Projetos Corporativos</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Velocidade de implantação e estética industrial disruptiva que atraem clientes e valorizam o seu posicionamento de marca.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {corporateProjects.map((item, i) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -15, 
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" } 
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass-card p-8 border-b-4 border-b-transparent hover:border-b-primary hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300"
              >
                <div className="p-3 bg-primary/10 text-primary rounded-xl w-fit mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {item.icon}
                </div>
                <h4 className="font-display font-bold text-xl mb-3">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a
              href="#contato"
              className="px-10 py-4 bg-primary text-primary-foreground font-bold rounded-xl inline-block hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] hover:scale-105 transition-all duration-300"
            >
              Solicitar Consultoria Corporativa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainersSection;