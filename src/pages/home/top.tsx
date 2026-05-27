export function TopTrending() {
  const icons = {
    trending: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
    download: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
  };

  const trendingTopics = [
    { title: '¿Cuál es la mejor distro para desarrollo web en 2026?', replies: 142 },
    { title: 'Problemas de dependencias con el último kernel 6.x', replies: 89 },
    { title: 'Vim vs Neovim: La batalla definitiva', replies: 256 },
    { title: 'Migrando de Windows a Linux: Guía paso a paso', replies: 312 },
  ];

  const topDownloads = [
    { name: 'VS Code - Lunix Edition', type: 'IDE' },
    { name: 'Ubuntu 26.04 LTS Desktop', type: 'OS' },
    { name: 'Docker Desktop Pro', type: 'Tool' },
  ];

  return (
    <section className="glass-panel p-8">
      <h2 className="text-2xl mb-8 flex items-center gap-3 border-b border-brand-border pb-4">
        <span className="text-brand-accent-light">{icons.trending}</span> Trending Top
      </h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg text-brand-accent-light mb-4 font-bold uppercase tracking-wider">Temas Más Debatidos</h3>
          <ul className="space-y-3">
            {trendingTopics.map((topic, index) => (
              <li key={index} className="p-4 bg-black/40 rounded-lg border-l-4 border-brand-accent-dark flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer group">
                <span className="font-bold text-sm md:text-base group-hover:text-brand-accent-light transition-colors">{topic.title}</span>
                <span className="text-xs text-brand-secondary bg-brand-bg px-2 py-1 rounded ml-4 whitespace-nowrap">{topic.replies} resp.</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg text-brand-accent-light mb-4 font-bold uppercase tracking-wider">Más Descargados</h3>
          <ul className="space-y-3">
            {topDownloads.map((item, index) => (
              <li key={index} className="p-4 bg-black/40 rounded-lg border-l-4 border-brand-accent-light flex justify-between items-center hover:bg-white/5 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="text-brand-accent-light opacity-70">{icons.download}</span>
                  <span className="font-bold text-sm md:text-base">{item.name}</span>
                </div>
                <span className="text-[10px] bg-brand-accent-dark text-white px-2 py-1 rounded font-bold uppercase tracking-tighter">{item.type}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
