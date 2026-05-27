export function TopUsers() {
  const icons = {
    trophy: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg>,
    star: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  };

  const users = [
    { name: 'Linus Torvalds', username: '@LinusTorvalds', rep: '99.9k', role: 'Admin', img: 'https://unavatar.io/github/torvalds' },
    { name: 'Sarah Drasner', username: '@DevMaster', rep: '15.2k', role: 'Moderador', img: 'https://unavatar.io/github/sdras' },
    { name: 'Evan You', username: '@ReactNinja', rep: '8.4k', role: 'Usuario Destacado', img: 'https://unavatar.io/github/yyx990803' },
    { name: 'Guillermo Rauch', username: '@KernelPanic', rep: '5.1k', role: 'Usuario Destacado', img: 'https://unavatar.io/github/rauchg' },
    { name: 'Dan Abramov', username: '@SysAdminPro', rep: '4.8k', role: 'Usuario Destacado', img: 'https://unavatar.io/github/gaearon' },
    { name: 'Sophie Alpert', username: '@AgStudios', rep: '4.2k', role: 'Desarrollador', img: 'https://unavatar.io/github/sophiebits' },
  ];

  return (
    <section className="glass-panel p-8">
      <h2 className="text-2xl mb-8 flex items-center gap-3 border-b border-brand-border pb-4">
        <span className="text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.4)]">{icons.trophy}</span> Usuarios Destacados
      </h2>
      
      <div className="space-y-2">
        {users.map((user, index) => (
          <div 
            key={index} 
            className="flex justify-between items-center p-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <img 
                  src={user.img} 
                  alt={user.name} 
                  className="w-12 h-12 rounded-full border-2 border-brand-accent-dark shadow-glow group-hover:scale-110 transition-transform object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-brand-bg rounded-full"></div>
              </div>
              <div>
                <div className="font-bold text-white group-hover:text-brand-accent-light transition-colors">{user.name}</div>
                <div className="text-xs text-brand-secondary uppercase tracking-widest">{user.username} • {user.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-yellow-500 font-bold bg-yellow-500/10 px-3 py-1.5 rounded-full border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
              {icons.star} <span className="text-sm">{user.rep}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
