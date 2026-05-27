import { DOWNLOADS_DATA } from '../../data/downloads';

interface DownloadsMainProps {
  selectedSubTypes: string[];
  searchQuery: string;
}

export function DownloadsMain({ selectedSubTypes, searchQuery }: DownloadsMainProps) {
  const icons = {
    trending: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
    code: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
    os: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>,
    docker: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>,
    video: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>,
    design: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>,
    rocket: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3"></path><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5"></path></svg>,
    save: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
  };

  const getIcon = (type: string, subType: string) => {
    if (type === 'Sistemas Operativos') return icons.os;
    if (subType === 'Contenedores') return icons.docker;
    if (subType === 'Edición de Video') return icons.video;
    if (subType === 'Edición de Imagen') return icons.design;
    if (subType === 'Bases de Datos') return icons.save;
    if (subType === 'IDEs & Editores') return icons.code;
    return icons.rocket;
  };

  const filteredDownloads = DOWNLOADS_DATA.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedSubTypes.length === 0 || selectedSubTypes.includes(item.subType);
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <section className="glass-panel relative overflow-hidden p-12 lg:p-20 text-center border-brand-accent-light/30">
        <div className="absolute top-0 right-0 p-8 opacity-10 scale-150 rotate-12">
          {icons.rocket}
        </div>
        <h2 className="font-logo text-5xl md:text-7xl mb-6 text-white drop-shadow-glow">
          Centro de Software
        </h2>
        <p className="text-xl md:text-2xl text-brand-secondary max-w-2xl mx-auto leading-relaxed font-light">
          Descubre y descarga el mejor software validado por la comunidad para potenciar tu flujo de trabajo.
        </p>
      </section>

      {/* Grid Section */}
      <section>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <span className="p-3 rounded-xl bg-brand-accent-light/10 text-brand-accent-light shadow-glow">
              {icons.trending}
            </span>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              {searchQuery || selectedSubTypes.length > 0 ? 'Resultados' : 'Software Destacado'}
            </h3>
          </div>
          <div className="text-brand-secondary text-sm font-mono">
            Mostrando {filteredDownloads.length} resultados
          </div>
        </div>
        
        {filteredDownloads.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDownloads.map((item) => (
              <div 
                key={item.id} 
                className={`glass-panel group p-8 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)] hover:border-brand-accent-light/40 animate-in fade-in zoom-in-95 duration-500`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-5">
                    <div className="p-4 rounded-2xl bg-white/5 border border-brand-border text-brand-accent-light group-hover:scale-110 group-hover:bg-brand-accent-light/10 transition-all duration-500">
                      {getIcon(item.type, item.subType)}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-brand-accent-light transition-colors">{item.name}</h4>
                      <span className="text-sm font-mono text-brand-secondary bg-black/40 px-2 py-0.5 rounded border border-brand-border mt-1 inline-block">v{item.version}</span>
                    </div>
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-black bg-brand-accent-dark/20 text-brand-accent-light border border-brand-accent-light/30 px-3 py-1.5 rounded-full">
                    {item.subType}
                  </div>
                </div>

                <p className="text-brand-secondary leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>

                <div className="flex justify-between items-center pt-6 border-t border-brand-border">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <span className="text-brand-secondary opacity-50">{icons.save}</span>
                    {item.size}
                  </div>
                  <button className="btn-primary px-8 py-2.5 rounded-xl shadow-none hover:shadow-glow">
                    Descargar
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="glass-panel p-20 text-center flex flex-col items-center gap-6">
            <div className="text-6xl opacity-20">{icons.rocket}</div>
            <h4 className="text-2xl font-bold text-white">No se encontraron resultados</h4>
            <p className="text-brand-secondary">Prueba con otros términos de búsqueda o filtros.</p>
          </div>
        )}
      </section>

      {/* Asymmetric bottom banner */}
      <section className="glass-panel p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-l-4 border-l-brand-accent-light bg-linear-to-r from-brand-accent-light/5 to-transparent">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">¿No encuentras lo que buscas?</h3>
          <p className="text-brand-secondary">Sugiere nuevo software o repositorios a la comunidad.</p>
        </div>
        <button className="px-8 py-3 rounded-lg border border-brand-accent-light/50 font-bold hover:bg-brand-accent-light/10 transition-all">
          Solicitar Software
        </button>
      </section>
    </div>
  );
}
