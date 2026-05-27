export function Carrousel() {
  const icons = {
    chat: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
    box: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>,
    globe: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>,
    tool: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
  };

  const items = [
    { icon: icons.chat, title: "Debates Técnicos", accent: true },
    { icon: icons.box, title: "Software Exclusivo", accent: false },
    { icon: icons.globe, title: "Comunidad Activa", accent: true },
    { icon: icons.tool, title: "Soporte Hardware", accent: false },
  ];

  return (
    <section className="glass-panel py-10 overflow-hidden">
      <h2 className="text-center text-3xl mb-10 text-brand-accent-light uppercase tracking-widest font-logo">
        Ecosistema LunixDev
      </h2>
      <div className="relative flex overflow-hidden group">
        <div className="flex gap-8 animate-scroll whitespace-nowrap group-hover:[animation-play-state:paused]">
          {[...items, ...items, ...items].map((item, i) => (
            <div 
              key={i} 
              className={`flex-shrink-0 w-72 h-40 rounded-2xl flex flex-col items-center justify-center gap-4 border-2 transition-all duration-500 cursor-pointer backdrop-blur-md
                ${item.accent 
                  ? 'bg-linear-to-br from-brand-accent-dark/20 to-brand-accent-light/10 border-brand-accent-light/20 hover:border-brand-accent-light hover:shadow-glow' 
                  : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'}`}
            >
              <div className={item.accent ? 'text-brand-accent-light' : 'text-white'}>
                {item.icon}
              </div>
              <h3 className="font-bold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
