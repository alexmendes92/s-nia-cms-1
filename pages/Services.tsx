
import React from 'react';
import { Page, ServiceItem, SiteConfig } from '../App';

interface Props {
  navigate: (page: Page) => void;
  filter?: 'emotional' | 'learning' | 'career' | 'focus' | 'general';
  services: ServiceItem[];
  config: SiteConfig;
}

const Services: React.FC<Props> = ({ navigate, filter, services, config }) => {
    
    // Theme helper logic
    const getServiceTheme = (category: string) => {
        switch(category) {
            case 'learning': return { bg: 'bg-orange-50', text: 'text-orange-600', ring: 'ring-orange-50', border: 'border-orange-200' };
            case 'focus': return { bg: 'bg-violet-50', text: 'text-violet-600', ring: 'ring-violet-50', border: 'border-violet-200' };
            case 'career': return { bg: 'bg-sky-50', text: 'text-sky-600', ring: 'ring-sky-50', border: 'border-sky-200' };
            case 'emotional': return { bg: 'bg-pink-50', text: 'text-pink-600', ring: 'ring-pink-50', border: 'border-pink-200' };
            default: 
                // Fallback to main config theme
                if(config.primaryColor === 'blue') return { bg: 'bg-sky-50', text: 'text-sky-600', ring: 'ring-sky-50', border: 'border-sky-200' };
                if(config.primaryColor === 'violet') return { bg: 'bg-violet-50', text: 'text-violet-600', ring: 'ring-violet-50', border: 'border-violet-200' };
                return { bg: 'bg-pink-50', text: 'text-pink-600', ring: 'ring-pink-50', border: 'border-pink-200' };
        }
    };

    return (
        <div className="animate-fade-in bg-white min-h-screen pb-24">
            {/* Header */}
            <header className="bg-gradient-to-b from-slate-50 to-white px-6 pt-12 pb-8 text-center">
                <h1 className="text-4xl font-heading font-bold text-slate-800 mb-4">Serviços & Especialidades</h1>
                <p className="text-slate-500 max-w-lg mx-auto leading-relaxed">
                    Ofereço uma abordagem integrada para cuidar do seu desenvolvimento emocional, cognitivo e profissional.
                </p>
                <div className={`w-12 h-1 mx-auto mt-6 rounded-full bg-slate-300`}></div>
            </header>

            {/* Service Cards List */}
            <div className="container mx-auto px-6 space-y-8 mt-4">
                {services.length > 0 ? (
                    services.map((service, index) => {
                        const theme = getServiceTheme(service.category);
                        const isRecommended = filter && service.category === filter;

                        return (
                            <div 
                                key={service.id}
                                className={`bg-white rounded-[2.5rem] border ${isRecommended ? `border-pink-300 ring-4 ${theme.ring}` : 'border-slate-100'} shadow-xl shadow-slate-100 overflow-hidden flex flex-col md:flex-row relative transition-all duration-300`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {isRecommended && (
                                    <div className="absolute top-4 left-4 z-10 bg-pink-600 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg animate-pulse">
                                        Recomendado para você
                                    </div>
                                )}

                                {/* Service Image */}
                                <div className="w-full md:w-1/3 h-48 md:h-auto bg-slate-100 relative">
                                    {service.img ? (
                                        <img 
                                            src={service.img} 
                                            alt={service.title} 
                                            className="w-full h-full object-cover" 
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-6xl text-slate-300">{service.icon}</span>
                                        </div>
                                    )}
                                </div>

                                {/* Service Content */}
                                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`${theme.bg} ${theme.text} p-3 rounded-2xl`}>
                                            <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-slate-800">{service.title}</h2>
                                    </div>
                                    
                                    <p className="text-slate-600 leading-relaxed mb-8">
                                        {service.desc}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button 
                                            onClick={() => navigate(Page.APPOINTMENT)}
                                            className={`px-6 py-3 ${theme.bg} ${theme.text} rounded-xl font-bold text-sm hover:opacity-80 transition-all`}
                                        >
                                            Agendar este serviço
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-12">
                        <p className="text-slate-400">Nenhum serviço disponível no momento.</p>
                    </div>
                )}
            </div>

            {/* Final CTA */}
            <section className="mt-16 px-6 text-center">
                <div className={`rounded-[3rem] p-10 text-white shadow-2xl ${config.primaryColor === 'pink' ? 'bg-pink-600' : config.primaryColor === 'blue' ? 'bg-sky-600' : 'bg-violet-600'}`}>
                    <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
                    <p className="opacity-90 mb-8 max-w-sm mx-auto">
                        Estou disponível para uma conversa inicial sem compromisso para entendermos qual a melhor abordagem para você.
                    </p>
                    <button 
                        onClick={() => navigate(Page.APPOINTMENT)}
                        className="bg-white text-slate-800 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all"
                    >
                        Falar com {config.ownerName.split(' ')[0]}
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Services;
