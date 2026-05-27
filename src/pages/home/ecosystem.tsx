export function Ecosystem() {
  const icons = {
    rocket: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path></svg>,
    box: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>,
    users: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    activity: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>,
    shield: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>,
    terminal: <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 bg-brand-bg">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-accent-light/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-brand-accent-dark/10 blur-[120px] rounded-full animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0%,transparent_70%)]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-logo text-5xl md:text-7xl mb-6 text-white drop-shadow-glow">
            Ecosistema LunixDev
          </h2>
          <p className="text-xl md:text-2xl text-brand-secondary max-w-3xl mx-auto leading-relaxed font-light">
            Todo lo que necesitas para tu flujo de trabajo en Linux, integrado en una sola plataforma robusta y moderna.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            {
              title: "Kernel-Level Tuning",
              desc: "Optimiza tu sistema al máximo con nuestras herramientas de configuración de bajo nivel.",
              icon: icons.rocket
            },
            {
              title: "Repositorios Privados",
              desc: "Accede a software exclusivo y optimizado específicamente para distribuciones basadas en Arch y Debian.",
              icon: icons.box
            },
            {
              title: "Comunidad de Expertos",
              desc: "Resuelve dudas técnicas complejas con desarrolladores de sistemas de todo el mundo.",
              icon: icons.users
            },
            {
              title: "Monitoreo en Vivo",
              desc: "Dashboard avanzado para visualizar el rendimiento de tus servidores y estaciones de trabajo.",
              icon: icons.activity
            },
            {
              title: "Seguridad Reforzada",
              desc: "Scripts de hardening y auditoría para mantener tu ecosistema Linux impenetrable.",
              icon: icons.shield
            },
            {
              title: "API de Automatización",
              desc: "Integra tus scripts de despliegue con nuestra API REST para una automatización total.",
              icon: icons.terminal
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel p-8 group hover:border-brand-accent-light/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(56,189,248,0.1)]"
            >
              <div className="text-brand-accent-light mb-6 p-4 rounded-2xl bg-white/5 border border-brand-border group-hover:scale-110 group-hover:bg-brand-accent-light/10 transition-all duration-500 inline-block shadow-glow">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-accent-light transition-colors">
                {item.title}
              </h3>
              <p className="text-brand-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="btn-primary text-lg px-12 py-4">
            Explora el Universo LunixDev
          </button>
        </div>
      </div>
    </section>
  );
}
