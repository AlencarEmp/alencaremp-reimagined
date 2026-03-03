import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const ContainersSection = () => {
  return (
    <section id="containers" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <span className="section-badge mb-6 inline-block">Divisão Habitacional e Comercial</span>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
          Engenharia Modular <span className="text-gradient">em Aço Naval.</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mb-6 text-lg leading-relaxed">
          A fusão perfeita entre durabilidade estrutural, design contemporâneo e conforto termoacústico. Descubra como transformamos containers em espaços premium em tempo recorde.
        </p>

        <h3 className="font-display text-2xl font-semibold mt-16 mb-10">Nossos Projetos Residenciais</h3>
        <p className="text-muted-foreground mb-12">
          Plantas otimizadas prontas para fabricação ou totalmente personalizáveis conforme a sua necessidade.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={m.img} alt={m.title} className="w-full h-full object-cover" loading="lazy" />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-md">
                  {m.badge}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold">{m.title}</h3>
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

        {/* Anatomia Estrutural */}
        <div className="mt-24">
          <h3 className="font-display text-2xl font-semibold mb-8">Anatomia Estrutural</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h4 className="font-display text-lg font-semibold mb-3">Aço Corten Patinável</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Não é chapa comum. É uma liga de aço naval desenvolvida para resistir à salinidade e tempestades oceânicas. Quando devidamente pintado, torna-se um escudo protetor contra o tempo, superando a durabilidade do tijolo e cimento.
              </p>
            </div>
            <div className="glass-card p-8">
              <h4 className="font-display text-lg font-semibold mb-3">O Pé Direito "High Cube"</h4>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Exigimos o formato HC (2.90m de altura externa). Isso confere-nos o poder e o espaço para instalar tetos rebaixados em Drywall, ocultar toda a infraestrutura elétrica e manter uma altura interior sumptuosa e elegante.
              </p>
            </div>
          </div>
        </div>

        {/* Conforto Térmico */}
        <div className="mt-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-4">Conforto Térmico e Acústico</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                "Dentro do container faz calor". Essa é a frase de amadores. Nós aplicamos a ciência termodinâmica para garantir que o interior se mantenha como uma garrafa térmica.
              </p>
              <div className="space-y-6">
                <div>
                  <h4 className="font-display font-semibold mb-1">Barreira Exterior</h4>
                  <p className="text-muted-foreground text-sm">Aplicação de revestimentos e tintas cerâmicas reflexivas no teto, repelindo a esmagadora maioria dos raios UV diretos.</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Núcleo de Absorção</h4>
                  <p className="text-muted-foreground text-sm">Preenchimento total das paredes com Lã de Rocha de alta densidade (incombustível), bloqueando a transferência de calor e ruídos exteriores.</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold mb-1">Fechamento Liso</h4>
                  <p className="text-muted-foreground text-sm">Estruturação interna finalizada com Drywall duplo. Placas Resistentes à Umidade (Verdes) em áreas molhadas, preparadas para massa e pintura.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Conforto Térmico"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Expansão Modular */}
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1525438160292-a4a860951216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Mansão Modular Acoplada"
              className="w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="font-display text-2xl font-semibold mb-4">Expansão Modular Contínua</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A arquitetura em aço não tem limites. Se a sua família aumentar ou o seu negócio prosperar, o módulo acompanha o crescimento.
            </p>
            <ul className="space-y-4 text-sm">
              <li>
                <strong>Acoplamento Lateral:</strong>{" "}
                <span className="text-muted-foreground">Removemos as paredes e fundimos múltiplos containers para criar salas com vãos livres de até 60m².</span>
              </li>
              <li>
                <strong>Verticalização:</strong>{" "}
                <span className="text-muted-foreground">Empilhamos os módulos com total segurança para criar residências ou escritórios de 2 e 3 andares (Sobrados).</span>
              </li>
              <li>
                <strong>Vedações Blindadas:</strong>{" "}
                <span className="text-muted-foreground">Utilização de calhas estruturais e selantes de poliuretano industrial na junção dos módulos, garantindo 100% de estanqueidade.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobilidade */}
        <div className="mt-16">
          <h3 className="font-display text-2xl font-semibold mb-4">Mobilidade e Fundações Leves</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Pense num container como um monobloco independente. Ele não precisa de estar ancorado numa fundação caríssima. Sapatas de betão nas extremidades ou um "Radier" simples são suficientes para apoiar as suas toneladas.
          </p>
          <div className="glass-card p-8">
            <h4 className="font-display text-lg font-semibold mb-2">A Vida Nômade é Real</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Se um dia decidir vender o terreno, ou simplesmente odiar os vizinhos, basta desligar a canalização, contratar um caminhão Munck e transportar a sua casa inteira para a outra ponta do país. Tente fazer isso com tijolos.
            </p>
          </div>
        </div>

        {/* Projetos Corporativos */}
        <div id="corporativo" className="mt-24">
          <h3 className="font-display text-2xl font-semibold mb-4">Projetos Corporativos (B2B)</h3>
          <p className="text-muted-foreground mb-10">
            Velocidade de implantação e estética industrial que atraem clientes.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Lojas Pop-Up", desc: "Crie pontos de venda temporários ou itinerantes com forte apelo visual em feiras e eventos." },
              { title: "Escritórios Acoplados", desc: "Ambientes corporativos velozes, salas de reunião envidraçadas e infraestrutura de TI embutida." },
              { title: "Bares e Franquias", desc: "O modelo perfeito para expansão rápida e padronizada de franquias gastronômicas." },
            ].map((item) => (
              <div key={item.title} className="glass-card p-6">
                <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href="#contato"
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg inline-block hover:opacity-90 transition-opacity"
            >
              Solicitar Orçamento de Planta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContainersSection;
