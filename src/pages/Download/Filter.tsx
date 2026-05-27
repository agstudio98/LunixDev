import { useState } from 'react';

interface DownloadsFilterProps {
  selectedSubTypes: string[];
  onFilterChange: (subType: string) => void;
  onClear: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function DownloadsFilter({ 
  selectedSubTypes, 
  onFilterChange, 
  onClear,
  searchQuery,
  onSearchChange 
}: DownloadsFilterProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    os: true,
    dev: true,
    design: false
  });

  const toggle = (key: string) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const icons = {
    chevronDown: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>,
    chevronRight: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>,
    search: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
  };

  const categories = [
    {
      id: 'os',
      label: 'Sistemas Operativos',
      items: ['Debian Based', 'Arch Based', 'Servidores']
    },
    {
      id: 'dev',
      label: 'Desarrollo',
      items: ['IDEs & Editores', 'Bases de Datos', 'Contenedores']
    },
    {
      id: 'design',
      label: 'Diseño & Multimedia',
      items: ['Edición de Video', 'Edición de Imagen', 'Modelado 3D']
    }
  ];

  return (
    <div className="glass-panel p-6 sticky top-28 border-brand-accent-light/10">
      <div className="mb-8">
        <h3 className="text-brand-accent-light font-bold uppercase tracking-widest text-xs mb-4 pb-2 border-b border-brand-border">
          Buscar
        </h3>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-secondary">
            {icons.search}
          </span>
          <input 
            type="text" 
            placeholder="Buscar software..." 
            className="input-field pl-10 text-sm"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      <h3 className="text-brand-accent-light font-bold uppercase tracking-widest text-xs mb-6 pb-2 border-b border-brand-border">
        Categorías
      </h3>
      
      <div className="flex flex-col gap-4">
        {categories.map((cat) => (
          <div key={cat.id}>
            <button 
              className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 ${
                expanded[cat.id] ? 'bg-brand-accent-light/10 text-white' : 'bg-white/5 text-brand-secondary hover:bg-white/10'
              }`}
              onClick={() => toggle(cat.id)}
            >
              <span className="font-bold text-sm">{cat.label}</span>
              <span className="text-brand-accent-light">
                {expanded[cat.id] ? icons.chevronDown : icons.chevronRight}
              </span>
            </button>
            
            {expanded[cat.id] && (
              <div className="flex flex-col gap-3 pl-4 mt-3 ml-2 border-l border-brand-accent-light/30 animate-in fade-in slide-in-from-left-2 duration-300">
                {cat.items.map((item) => (
                  <label key={item} className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                      <input 
                        type="checkbox" 
                        checked={selectedSubTypes.includes(item)}
                        onChange={() => onFilterChange(item)}
                        className="peer appearance-none w-4 h-4 rounded border border-brand-border bg-black/40 checked:bg-brand-accent-light checked:border-brand-accent-light transition-all cursor-pointer" 
                      />
                      <svg 
                        className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity left-0.5" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-sm text-brand-secondary group-hover:text-brand-accent-light transition-colors">
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {(selectedSubTypes.length > 0 || searchQuery) && (
        <div className="mt-8 pt-6 border-t border-brand-border animate-in fade-in duration-300">
          <button 
            onClick={onClear}
            className="w-full py-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-500 text-xs font-bold uppercase tracking-widest hover:bg-red-500/20 transition-all"
          >
            Limpiar Filtros
          </button>
        </div>
      )}
    </div>
  );
}
