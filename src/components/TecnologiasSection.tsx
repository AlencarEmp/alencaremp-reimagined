const techs = [
  "Aço Naval Corten",
  "Drywall Premium",
  "Lã de Rocha Isolante",
  "Elétrica Blindada",
  "PEX",
];

const TecnologiasSection = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container">
        <p className="text-sm text-muted-foreground text-center mb-8 tracking-wide">
          Trabalhamos apenas com tecnologia certificada
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {techs.map((tech) => (
            <div
              key={tech}
              className="px-6 py-3 rounded-full border border-border text-sm text-muted-foreground font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TecnologiasSection;
