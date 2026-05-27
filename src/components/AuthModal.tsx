import { useState } from 'react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        className="glass-panel w-full max-w-md p-8 relative animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-secondary hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="text-center mb-8">
          <h2 className="font-logo text-3xl text-white mb-2">
            {isLogin ? 'Bienvenido de Nuevo' : 'Crea tu Cuenta'}
          </h2>
          <p className="text-brand-secondary">
            {isLogin ? 'Ingresa tus credenciales para continuar' : 'Únete a la comunidad de LunixDev'}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1.5 text-brand-secondary">Nombre de Usuario</label>
              <input 
                type="text" 
                placeholder="ej. linus_fan"
                className="input-field"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1.5 text-brand-secondary">Email</label>
            <input 
              type="email" 
              placeholder="tu@email.com"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1.5 text-brand-secondary">Contraseña</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="input-field"
            />
          </div>
          
          <button type="submit" className="btn-primary w-full py-3 text-lg mt-4">
            {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-brand-border pt-6">
          <p className="text-brand-secondary mb-4">O continúa con</p>
          <div className="flex gap-4 justify-center">
            <button className="p-3 rounded-lg bg-white/5 border border-brand-border hover:bg-white/10 transition-all flex-1 flex justify-center items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </button>
            <button className="p-3 rounded-lg bg-white/5 border border-brand-border hover:bg-white/10 transition-all flex-1 flex justify-center items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.176-1.228 1.216-3.212 2.44-6.392 2.44-5.128 0-9.152-4.128-9.152-9.26s4.024-9.26 9.152-9.26c2.752 0 4.712 1.08 6.132 2.424l2.308-2.308C18.176 1.008 15.584 0 12.48 0 6.132 0 1.056 5.076 1.056 11.4s5.076 11.4 11.424 11.4c3.42 0 5.996-1.12 8.016-3.232 2.084-2.084 2.736-5.044 2.736-7.44 0-.704-.068-1.376-.188-2.016H12.48z"/></svg>
              Google
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-brand-secondary text-sm">
          {isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?'}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-brand-accent-light hover:underline font-bold"
          >
            {isLogin ? 'Regístrate' : 'Inicia Sesión'}
          </button>
        </p>
      </div>
    </div>
  );
}
