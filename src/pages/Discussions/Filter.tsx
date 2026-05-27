export function DiscussionsFilter() {
  return (
    <div className="glass-panel p-8 sticky top-28">
      <h3 className="text-brand-accent-light text-lg font-bold uppercase tracking-widest mb-6 border-b border-brand-border pb-3">
        Filtros
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="block font-bold mb-2 text-sm uppercase tracking-wider">Buscar</label>
          <input 
            type="text" 
            placeholder="Palabras clave..." 
            className="input-field" 
          />
        </div>

        <div>
          <label className="block font-bold mb-3 text-sm uppercase tracking-wider">Sistema Operativo</label>
          <div className="flex flex-col gap-3">
            {['Linux (General)', 'Ubuntu / Debian', 'Arch / Manjaro', 'Fedora'].map(os => (
              <label key={os} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-brand-border bg-black/50 text-brand-accent-light focus:ring-brand-accent-light" />
                <span className="text-brand-secondary group-hover:text-white transition-colors text-sm">{os}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-bold mb-3 text-sm uppercase tracking-wider">Categoría</label>
          <div className="flex flex-col gap-3">
            {['Desarrollo Web', 'Hardware', 'Servidores'].map(cat => (
              <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="w-5 h-5 rounded border-brand-border bg-black/50 text-brand-accent-light focus:ring-brand-accent-light" />
                <span className="text-brand-secondary group-hover:text-white transition-colors text-sm">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        <button className="btn-primary w-full mt-4">
          Aplicar Filtros
        </button>
      </div>
    </div>
  );
}
