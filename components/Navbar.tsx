import React from 'react';
import { Page } from '../App';

interface NavbarProps {
  navigate: (page: Page) => void;
  currentPage: Page;
  setOverlayColor: (color: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ navigate, currentPage, setOverlayColor }) => {
  // Navigation for Desktop remains top-aligned
  // Mobile navigation is handled by BottomNav
  
  const navLinks = [
    { label: 'Início', page: Page.HOME },
    { label: 'Psicanálise', page: Page.PSYCHOANALYSIS },
    { label: 'Psicopedagogia', page: Page.PSYCHOPEDAGOGY },
    { label: 'Carreira', page: Page.VOCATIONAL },
    { label: 'Irlen', page: Page.IRLEN },
    { label: 'TDAH', page: Page.ADHD },
    { label: 'Florais', page: Page.FLORALS },
  ];

  return (
    <nav className="hidden lg:block sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <button onClick={() => navigate(Page.HOME)} className="text-xl font-heading font-bold flex items-center gap-2 text-slate-800">
          <span className="material-symbols-outlined text-3xl text-pink-500 font-bold">psychology</span>
          <span>Sônia Andrade</span>
        </button>

        <div className="flex items-center gap-8 text-sm font-semibold text-slate-600">
            {navLinks.map((link) => (
                <button
                    key={link.page}
                    onClick={() => navigate(link.page)}
                    className={`hover:text-pink-600 transition-colors ${currentPage === link.page ? 'text-pink-600 font-bold' : ''}`}
                >
                    {link.label}
                </button>
            ))}
            <button 
                onClick={() => window.open('https://wa.me/5521992717217', '_blank')}
                className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors shadow-md text-sm font-bold flex items-center gap-2"
            >
                <span className="material-symbols-outlined text-sm">chat</span>
                Agendar
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;