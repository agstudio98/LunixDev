export function Slogans() {
  const icons = {
    chat: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
    linux: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>,
    bolt: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  };

  const features = [
    { 
      icon: icons.chat, 
      title: "Debate y Resuelve", 
      desc: "Encuentra soluciones a tus problemas de código con ayuda de la comunidad experta." 
    },
    { 
      icon: icons.linux, 
      title: "Descubre Distros", 
      desc: "Recomendaciones y guías de instalación detalladas para encontrar tu entorno ideal." 
    },
    { 
      icon: icons.bolt, 
      title: "Software Validado", 
      desc: "Descarga herramientas esenciales validadas por expertos para mejorar tu flujo de trabajo." 
    }
  ];

  return (
    <section className="grid md:grid-cols-3 gap-8">
      {features.map((f, i) => (
        <div key={i} className="glass-panel p-8 text-center hover:-translate-y-2 transition-all duration-300 group hover:border-brand-accent-light/30">
          <div className="text-brand-accent-light mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
            {f.icon}
          </div>
          <h3 className="text-xl mb-3 text-brand-accent-light">{f.title}</h3>
          <p className="text-brand-secondary leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}
