
import React, { useState } from 'react';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Psychoanalysis from './pages/Psychoanalysis';
import Psychopedagogy from './pages/Psychopedagogy';
import Vocational from './pages/Vocational';
import Irlen from './pages/Irlen';
import Adhd from './pages/Adhd';
import Florals from './pages/Florals';
import Appointment from './pages/Appointment';
import Services from './pages/Services';
import Audience from './pages/Audience';
import Contact from './pages/Contact';
import Editor from './pages/Editor';
import PersonalizedJourney from './pages/PersonalizedJourney';

export enum Page {
  HOME = 'home',
  PSYCHOANALYSIS = 'psychoanalysis',
  PSYCHOPEDAGOGY = 'psychopedagogy',
  VOCATIONAL = 'vocational',
  IRLEN = 'irlen',
  ADHD = 'adhd',
  FLORALS = 'florals',
  APPOINTMENT = 'appointment',
  SERVICES = 'services',
  AUDIENCE = 'audience',
  CONTACT = 'contact',
  EDITOR = 'editor',
  JOURNEY = 'journey'
}

export interface UserProfile {
  name: string;
  target: 'self' | 'child' | 'elder';
  need: 'emotional' | 'learning' | 'career' | 'focus' | 'general';
}

// Estrutura de um Serviço Dinâmico
export interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  icon: string;
  img: string;
  category: 'emotional' | 'learning' | 'focus' | 'career' | 'general';
}

// Configuração dinâmica do site
export interface SiteConfig {
  ownerName: string;
  professionTitle: string;
  heroBio: string;
  whatsapp: string;
  primaryColor: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.EDITOR);
  const [overlayColor, setOverlayColor] = useState('transparent');
  const [profile, setProfile] = useState<UserProfile | null>(null);

  // Serviços Iniciais Padrão
  const [services, setServices] = useState<ServiceItem[]>([
    {
        id: 'psicanalise',
        title: 'Psicanálise Clínica',
        desc: 'Um mergulho no inconsciente para compreender os conflitos com as angústias, traumas e padrões de repetição.',
        icon: 'psychology_alt',
        img: 'https://santanamendes.com.br/Sonia/Sonia_d0_img1.png',
        category: 'emotional'
    },
    {
        id: 'psicopedagogia',
        title: 'Psicopedagogia',
        desc: 'Avaliação e intervenção nas dificuldades de aprendizagem e barreiras cognitivas.',
        icon: 'extension',
        img: 'https://santanamendes.com.br/Sonia/Sonia_d0_img2.png',
        category: 'learning'
    },
    {
        id: 'irlen',
        title: 'Síndrome de Irlen',
        desc: 'Rastreio de estresse visual e distorções na leitura com aplicação de filtros.',
        icon: 'visibility',
        img: 'https://santanamendes.com.br/Sonia/Sonia_d0_img8.png',
        category: 'focus'
    },
    {
        id: 'carreira',
        title: 'Orientação Profissional',
        desc: 'Auxílio na escolha da primeira carreira ou transição profissional para adultos.',
        icon: 'explore',
        img: 'https://santanamendes.com.br/Sonia/Sonia_d3_img0.png',
        category: 'career'
    }
  ]);

  const [siteConfig, setSiteConfig] = useState<SiteConfig>({
    ownerName: "Sônia Andrade",
    professionTitle: "Psicanalista e Psicopedagoga",
    heroBio: "Um espaço de acolhimento e escuta qualificada. Como especialista em desenvolvimento humano, estou pronta para te ajudar a florescer.",
    whatsapp: "5521992717217",
    primaryColor: "pink"
  });

  const navigate = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case Page.HOME:
        return <Home navigate={navigate} profile={profile} config={siteConfig} services={services} />;
      case Page.JOURNEY:
        return <PersonalizedJourney navigate={navigate} profile={profile} />;
      case Page.PSYCHOANALYSIS:
        return <Psychoanalysis navigate={navigate} />;
      case Page.PSYCHOPEDAGOGY:
        return <Psychopedagogy navigate={navigate} />;
      case Page.VOCATIONAL:
        return <Vocational navigate={navigate} />;
      case Page.IRLEN:
        return <Irlen navigate={navigate} setOverlayColor={setOverlayColor} />;
      case Page.ADHD:
        return <Adhd navigate={navigate} />;
      case Page.FLORALS:
        return <Florals navigate={navigate} />;
      case Page.APPOINTMENT:
        return <Appointment navigate={navigate} initialName={profile?.name} config={siteConfig} />;
      case Page.SERVICES:
        return <Services navigate={navigate} filter={profile?.need} services={services} config={siteConfig} />;
      case Page.AUDIENCE:
        return <Audience navigate={navigate} filter={profile?.target} />;
      case Page.CONTACT:
        return <Contact navigate={navigate} />;
      case Page.EDITOR:
        return (
          <Editor 
            navigate={navigate} 
            currentConfig={siteConfig} 
            onUpdateConfig={setSiteConfig}
            services={services}
            onUpdateServices={setServices}
          />
        );
      default:
        return <Home navigate={navigate} profile={profile} config={siteConfig} services={services} />;
    }
  };

  const isMainApp = currentPage !== Page.EDITOR;

  return (
    <div className={`font-sans antialiased text-slate-700 bg-white min-h-screen flex flex-col relative pb-20 md:pb-0 theme-${siteConfig.primaryColor}`}>
      <div 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          pointerEvents: 'none', 
          zIndex: 40, 
          mixBlendMode: 'multiply', 
          transition: 'background-color 0.3s ease',
          backgroundColor: overlayColor
        }} 
      />

      <style>{`
        :root { font-size: 16px; }
        @media (min-width: 768px) { :root { font-size: 18px; } }
        body { -webkit-tap-highlight-color: transparent; scroll-behavior: smooth; }
        .font-heading { font-family: 'Playfair Display', serif; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-slide-up { animation: slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .bg-mesh { background-image: radial-gradient(at 0% 0%, hsla(339, 49%, 91%, 1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225, 39%, 95%, 1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339, 49%, 91%, 1) 0, transparent 50%); }
        
        /* Dynamic Theme Colors */
        .theme-pink .accent-bg { background-color: #db2777; }
        .theme-pink .accent-text { color: #db2777; }
        .theme-blue .accent-bg { background-color: #0284c7; }
        .theme-blue .accent-text { color: #0284c7; }
        .theme-violet .accent-bg { background-color: #7c3aed; }
        .theme-violet .accent-text { color: #7c3aed; }
      `}</style>

      {isMainApp && (
        <div className="lg:hidden p-4 bg-white/80 backdrop-blur-xl sticky top-0 z-30 border-b border-slate-50 flex justify-between items-center">
           <div className={`flex items-center gap-2 font-heading font-bold text-xl theme-${siteConfig.primaryColor} accent-text`}>
              <span className="material-symbols-outlined font-bold" onClick={() => navigate(Page.HOME)}>psychology</span>
              <span onClick={() => navigate(Page.HOME)}>{siteConfig.ownerName.split(' ')[0]}</span>
           </div>
        </div>
      )}

      <main className="flex-grow">
        {renderPage()}
      </main>

      {isMainApp && (
        <>
          <Footer navigate={navigate} />
          <BottomNav navigate={navigate} currentPage={currentPage} />
        </>
      )}
    </div>
  );
};

export default App;
