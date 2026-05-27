import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthModal } from './AuthModal';

export function Navbar() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-brand-border py-4">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="font-logo text-3xl tracking-widest text-white uppercase drop-shadow-[0_2px_10px_rgba(56,189,248,0.5)] z-50" onClick={closeMobileMenu}>
            LunixDev
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10 items-center">
            <Link to="/downloads" className="nav-link">Descargas</Link>
            <Link to="/discussions" className="nav-link">Discusiones</Link>
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="p-2.5 rounded-full bg-brand-panel border border-brand-border text-brand-text hover:text-brand-accent-light hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:shadow-glow" 
              aria-label="Login/Logout"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4 z-50">
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="p-2 text-brand-text hover:text-brand-accent-light"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-brand-accent-light transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`my-80 fixed inset-0 z-40 transition-all duration-500 md:hidden flex items-center justify-center p-6 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          onClick={closeMobileMenu}
        >
          <div 
            className={`rounded-3xl bg-black w-full max-w-xs p-10 flex flex-col items-center gap-8 text-center transition-all duration-500 ${
              isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <Link to="/" className="font-logo text-4xl mb-4 text-brand-accent-light" onClick={closeMobileMenu}>
              LunixDev
            </Link>
            <nav className="flex flex-col gap-6">
              <Link to="/downloads" className="nav-link text-xl uppercase tracking-widest" onClick={closeMobileMenu}>Descargas</Link>
              <Link to="/discussions" className="nav-link text-xl uppercase tracking-widest" onClick={closeMobileMenu}>Discusiones</Link>
            </nav>
            <button 
              onClick={() => {
                closeMobileMenu();
                setIsAuthModalOpen(true);
              }}
              className="btn-primary w-full py-3.5 rounded-xl text-lg mt-4"
            >
              Cuenta
            </button>
          </div>
        </div>
      </nav>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
}
