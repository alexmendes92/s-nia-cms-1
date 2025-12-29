import React from 'react';
import { Page } from '../App';

interface FooterProps {
  navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-16" id="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
          {/* Col 1: Bio/Formation */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 border-b border-slate-600 pb-2 font-heading">
              Formação Acadêmica
            </h3>
            <ul className="space-y-3 text-sm inline-block text-left">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-pink-500 text-base">school</span>
                <span>Graduada em Pedagogia e Psicologia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-pink-500 text-base">school</span>
                <span>Pós-graduação em Psicopedagogia Clínica e Institucional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-pink-500 text-base">school</span>
                <span>Especialização em Neuropsicologia</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-pink-500 text-base">verified</span>
                <span>Screener Certificada para Síndrome de Irlen</span>
              </li>
            </ul>
          </div>
          
          {/* Col 2: Contact */}
          <div id="contato">
            <h3 className="text-white text-xl font-bold mb-6 border-b border-slate-600 pb-2 font-heading">
              Contato
            </h3>
            <p className="mb-4 text-sm">
              Entre em contato para agendar uma avaliação ou tirar dúvidas.
            </p>
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <a href="https://wa.me/5521992717217" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-green-400">chat</span>
                </div>
                <span>(21) 99271-7217</span>
              </a>
              <a href="mailto:soniarosa.psi@email.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-400">mail</span>
                </div>
                <span>soniarosa.psi@email.com</span>
              </a>
            </div>
          </div>
          
          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6 border-b border-slate-600 pb-2 font-heading">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => navigate(Page.HOME)} className="hover:text-pink-400 py-1">Início</button></li>
              <li><button onClick={() => navigate(Page.SERVICES)} className="hover:text-pink-400 py-1">Serviços</button></li>
              <li><button onClick={() => navigate(Page.AUDIENCE)} className="hover:text-pink-400 py-1">Público</button></li>
              <li><button onClick={() => navigate(Page.CONTACT)} className="hover:text-pink-400 py-1">Contato</button></li>
              <li className="pt-4">
                <button 
                  onClick={() => navigate(Page.EDITOR)} 
                  className="text-slate-500 hover:text-pink-400 text-xs flex items-center gap-1 mx-auto md:mx-0"
                >
                  <span className="material-symbols-outlined text-xs">admin_panel_settings</span>
                  Área do Cliente
                </button>
              </li>
            </ul>
            <p className="mt-8 text-xs text-slate-500">
              © 2024 Sônia Rosa da Silva Andrade. Todos os direitos reservados.
              <br />
              CRP: 05/XXXXX | ABPp: XXXX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;