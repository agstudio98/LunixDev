export function MainHero() {
  return (
    <section className="glass-panel text-center py-20 px-6 border-t-4 border-t-brand-accent-light bg-linear-to-b from-white/5 to-transparent">
      <h1 className="font-logo text-6xl md:text-8xl mb-6 text-white drop-shadow-[0_4px_30px_rgba(56,189,248,0.5)] tracking-tighter">
        LunixDev
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto text-brand-text leading-relaxed">
        La comunidad definitiva para programadores. Debate, aprende y comparte conocimientos sobre desarrollo de software, hardware y el ecosistema Linux.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
        <button className="btn-primary">
          Únete a la Discusión
        </button>
        <button className="px-8 py-2.5 rounded-lg border border-brand-accent-light/50 bg-white/5 font-bold hover:bg-brand-accent-light/10 transition-all duration-300">
          Explorar Descargas
        </button>
      </div>
    </section>
  );
}
