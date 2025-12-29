import React from 'react';
import { Page } from '../App';

interface BottomNavProps {
  navigate: (page: Page) => void;
  currentPage: Page;
}

const BottomNav: React.FC<BottomNavProps> = ({ navigate, currentPage }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-lg border-t border-slate-100 z-50 lg:hidden shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
      <div className="flex justify-around items-center h-20 px-2 pb-safe">
        <button 
          onClick={() => navigate(Page.HOME)}
          className={`flex flex-col items-center gap-1 transition-colors ${currentPage === Page.HOME ? 'text-pink-600' : 'text-slate-400'}`}
        >
          <span className="material-symbols-outlined text-2xl">home</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Início</span>
        </button>

        <button 
          onClick={() => navigate(Page.SERVICES)}
          className={`flex flex-col items-center gap-1 transition-colors ${currentPage === Page.SERVICES ? 'text-pink-600' : 'text-slate-400'}`}
        >
          <span className="material-symbols-outlined text-2xl">grid_view</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Serviços</span>
        </button>

        {/* Central Appointment Button */}
        <div className="relative -mt-10">
            <button 
                onClick={() => navigate(Page.APPOINTMENT)}
                className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center border-4 border-white active:scale-90 transition-all ${currentPage === Page.APPOINTMENT ? 'bg-pink-800 scale-110' : 'bg-pink-600'}`}
            >
                <span className="material-symbols-outlined text-3xl text-white">add_task</span>
            </button>
        </div>

        <button 
          onClick={() => navigate(Page.AUDIENCE)}
          className={`flex flex-col items-center gap-1 transition-colors ${currentPage === Page.AUDIENCE ? 'text-pink-600' : 'text-slate-400'}`}
        >
          <span className="material-symbols-outlined text-2xl">groups</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Público</span>
        </button>

        <button 
          onClick={() => navigate(Page.CONTACT)}
          className={`flex flex-col items-center gap-1 transition-colors ${currentPage === Page.CONTACT ? 'text-pink-600' : 'text-slate-400'}`}
        >
          <span className="material-symbols-outlined text-2xl">alternate_email</span>
          <span className="text-[10px] font-bold uppercase tracking-tighter">Contato</span>
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;