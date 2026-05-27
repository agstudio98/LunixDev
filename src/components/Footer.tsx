export function Footer() {
  return (
    <footer className="mt-auto bg-black/90 border-t border-brand-border py-12">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <h2 className="font-logo text-2xl tracking-widest text-white uppercase">LunixDev</h2>
        <p className="text-brand-secondary text-center max-w-md">El foro definitivo para desarrolladores de habla hispana.</p>
        <div className="flex gap-8">
          <a href="#" className="text-sm text-brand-secondary hover:text-brand-accent-light transition-colors">Términos de Servicio</a>
          <a href="#" className="text-sm text-brand-secondary hover:text-brand-accent-light transition-colors">Política de Privacidad</a>
          <a href="#" className="text-sm text-brand-secondary hover:text-brand-accent-light transition-colors">Reglas del Foro</a>
        </div>
        <p className="text-xs text-brand-secondary/50 mt-4 tracking-widest uppercase">Desarrollado por Ag Studio's 2026</p>
      </div>
    </footer>
  );
}
