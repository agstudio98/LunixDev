import { useState } from 'react';

export function DiscussionsMain() {
  const [activeTopic, setActiveTopic] = useState<number | null>(null);

  const icons = {
    back: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>,
    chat: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
    star: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
    user: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  };

  const topics = [
    { id: 1, title: 'Configuración óptima de Docker en Ubuntu', author: '@DevMaster', date: 'Hace 2 horas', replies: 45, stars: 4.8 },
    { id: 2, title: 'Error de compilación en kernel 6.5', author: '@KernelPanic', date: 'Hace 5 horas', replies: 12, stars: 4.2 },
    { id: 3, title: 'Mejores entornos de escritorio para programar en 2026', author: '@ReactNinja', date: 'Hace 1 día', replies: 128, stars: 4.9 },
    { id: 4, title: 'Alternativas a Adobe Premiere en Linux (DaVinci, Kdenlive)', author: '@VideoPro', date: 'Hace 2 días', replies: 67, stars: 4.5 },
  ];

  if (activeTopic) {
    const topic = topics.find(t => t.id === activeTopic);
    return (
      <div className="glass-panel p-8">
        <button 
          onClick={() => setActiveTopic(null)} 
          className="flex items-center gap-2 text-brand-accent-light font-bold hover:scale-105 transition-transform mb-8 bg-white/5 py-2 px-4 rounded-lg"
        >
          {icons.back} Volver a los temas
        </button>
        <h2 className="text-3xl font-bold text-white mb-6 leading-tight">{topic?.title}</h2>
        <div className="flex flex-wrap gap-6 mb-8 text-sm text-brand-secondary border-b border-brand-border pb-6">
          <span className="flex items-center gap-2 text-brand-text font-bold uppercase tracking-widest">{icons.user} {topic?.author}</span>
          <span className="flex items-center gap-2 italic">📅 {topic?.date}</span>
          <span className="flex items-center gap-2 text-yellow-500 font-bold">{icons.star} {topic?.stars} / 5</span>
        </div>
        
        <div className="bg-black/30 p-8 rounded-xl border border-brand-border border-l-4 border-l-brand-accent-light mb-10 shadow-inner">
          <p className="text-lg leading-relaxed text-brand-text/90 italic">
            "Este es el contenido principal del hilo. Aquí el usuario explica su problema o inicia el debate sobre el tema específico con gran detalle.
            <br/><br/>
            ¿Alguien ha logrado hacer funcionar la última versión de Docker Engine de forma nativa sin usar la máquina virtual en este entorno específico?"
          </p>
        </div>

        <h3 className="text-xl font-bold flex items-center gap-3 mb-8 border-b border-brand-border pb-4">
          <span className="text-brand-accent-light">{icons.chat}</span> Comentarios ({topic?.replies})
        </h3>
        
        <div className="space-y-6">
          {[1, 2, 3].map(comment => (
            <div key={comment} className="bg-white/5 p-6 rounded-xl border border-brand-border/50 hover:bg-white/10 transition-colors">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-brand-accent-dark to-brand-accent-light flex items-center justify-center font-bold text-white shadow-glow">
                    U{comment}
                  </div>
                  <strong className="text-brand-accent-light">@Usuario{comment}</strong>
                </div>
                <span className="text-xs text-brand-secondary uppercase tracking-widest">Hace {comment * 2} horas</span>
              </div>
              <p className="text-brand-text leading-relaxed pl-12 border-l border-brand-border">Excelente aporte. Yo solucioné este problema ajustando los parámetros en el archivo de configuración <code>/etc/docker/daemon.json</code>. ¡Gracias por compartir!</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-black/40 p-8 rounded-2xl border border-brand-border shadow-2xl">
          <h4 className="text-lg font-bold mb-6 text-brand-accent-light uppercase tracking-widest">Añadir respuesta</h4>
          <textarea 
            rows={5} 
            placeholder="Escribe tu conocimiento aquí..." 
            className="input-field mb-6 min-h-[150px]"
          ></textarea>
          <div className="flex justify-end">
            <button className="btn-primary px-10">Enviar Respuesta</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="glass-panel p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-10 border-b border-brand-border pb-6">
        <h2 className="text-2xl font-bold tracking-tight">Temas Principales</h2>
        <button className="btn-primary text-sm px-6">Crear Nuevo Tema</button>
      </div>

      <div className="space-y-4">
        {topics.map(topic => (
          <div 
            key={topic.id} 
            className="p-6 bg-black/30 rounded-xl border border-white/5 hover:border-brand-accent-light/50 hover:bg-white/5 transition-all duration-300 cursor-pointer group hover:-translate-y-1 shadow-lg"
            onClick={() => setActiveTopic(topic.id)}
          >
            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-accent-light transition-colors leading-tight">{topic.title}</h3>
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex gap-6 text-xs text-brand-secondary uppercase tracking-widest font-bold">
                <span className="flex items-center gap-1.5 text-brand-text">{icons.user} {topic.author}</span>
                <span className="flex items-center gap-1.5 italic font-normal text-[10px]">📅 {topic.date}</span>
              </div>
              <div className="flex gap-4 items-center bg-black/50 px-4 py-2 rounded-full border border-brand-border group-hover:border-brand-accent-light/30 transition-colors">
                <span className="flex items-center gap-2 text-sm">{icons.chat} {topic.replies}</span>
                <span className="flex items-center gap-2 text-sm text-yellow-500 font-bold">{icons.star} {topic.stars}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
