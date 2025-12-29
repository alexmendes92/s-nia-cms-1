
import React, { useState } from 'react';
import { Page, SiteConfig, ServiceItem } from '../App';

interface Props {
  navigate: (page: Page) => void;
  currentConfig: SiteConfig;
  onUpdateConfig: (config: SiteConfig) => void;
  services: ServiceItem[];
  onUpdateServices: (services: ServiceItem[]) => void;
}

const Editor: React.FC<Props> = ({ navigate, currentConfig, onUpdateConfig, services, onUpdateServices }) => {
    const [activeTab, setActiveTab] = useState<'general' | 'services'>('general');
    
    // Services Form State
    const [isEditingService, setIsEditingService] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [serviceForm, setServiceForm] = useState<ServiceItem>({
        id: '',
        title: '',
        desc: '',
        icon: 'psychology',
        img: 'https://santanamendes.com.br/Sonia/Sonia_d0_img1.png',
        category: 'general'
    });

    // Theme Helpers
    const getThemeColor = (color: string) => {
        switch(color) {
            case 'pink': return 'text-pink-600 bg-pink-50 border-pink-200';
            case 'blue': return 'text-sky-600 bg-sky-50 border-sky-200';
            case 'violet': return 'text-violet-600 bg-violet-50 border-violet-200';
            default: return 'text-slate-600 bg-slate-50 border-slate-200';
        }
    };
    
    const currentColorClass = getThemeColor(currentConfig.primaryColor);
    const accentColor = currentConfig.primaryColor === 'pink' ? 'bg-pink-600' : currentConfig.primaryColor === 'blue' ? 'bg-sky-600' : 'bg-violet-600';

    // Handlers
    const handleConfigChange = (field: keyof SiteConfig, value: string) => {
        onUpdateConfig({ ...currentConfig, [field]: value });
    };

    const handleEditService = (service: ServiceItem) => {
        setServiceForm(service);
        setEditingId(service.id);
        setIsEditingService(true);
        // Scroll to top on mobile when editing
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleAddService = () => {
        setServiceForm({
            id: Date.now().toString(),
            title: '',
            desc: '',
            icon: 'psychology',
            img: 'https://santanamendes.com.br/Sonia/Sonia_d0_img1.png',
            category: 'general'
        });
        setEditingId(null);
        setIsEditingService(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleDeleteService = (id: string) => {
        if(window.confirm('Tem certeza que deseja excluir este serviço?')) {
            onUpdateServices(services.filter(s => s.id !== id));
        }
    };

    const handleSaveService = () => {
        if(!serviceForm.title || !serviceForm.desc) return;

        if (editingId) {
            // Edit existing
            onUpdateServices(services.map(s => s.id === editingId ? serviceForm : s));
        } else {
            // Add new
            onUpdateServices([...services, serviceForm]);
        }
        setIsEditingService(false);
    };

    const iconOptions = ['psychology', 'extension', 'visibility', 'explore', 'local_florist', 'child_care', 'elderly', 'favorite', 'school', 'spa', 'bolt', 'chat', 'healing'];

    return (
        <div className="min-h-screen bg-slate-50 font-sans flex flex-col md:flex-row">
            
            {/* 
              MOBILE HEADER / DESKTOP SIDEBAR 
              Adapts layout based on screen size
            */}
            <div className="bg-slate-900 text-white shrink-0 md:w-64 md:min-h-screen sticky top-0 z-50 md:static flex flex-col shadow-lg">
                <div className="p-4 md:p-6 flex items-center justify-between md:block">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl ${accentColor} flex items-center justify-center shadow-lg`}>
                            <span className="material-symbols-outlined text-lg">edit_square</span>
                        </div>
                        <div>
                            <span className="font-bold tracking-wide block text-sm md:text-base">Studio Sônia</span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Painel Admin</span>
                        </div>
                    </div>
                    {/* Mobile Only: Preview Button compact */}
                    <button 
                        onClick={() => navigate(Page.HOME)}
                        className="md:hidden w-10 h-10 bg-white/10 rounded-full flex items-center justify-center active:bg-white/20"
                    >
                        <span className="material-symbols-outlined text-sm">rocket_launch</span>
                    </button>
                </div>

                {/* Navigation Links - Horizontal scroll on mobile, Vertical on desktop */}
                <nav className="flex md:flex-col overflow-x-auto md:overflow-visible px-4 md:px-6 pb-4 md:pb-6 gap-2 no-scrollbar">
                    <button 
                        onClick={() => setActiveTab('general')}
                        className={`whitespace-nowrap flex items-center gap-2 px-4 py-3 rounded-xl transition-all border md:border-transparent ${activeTab === 'general' ? 'bg-white text-slate-900 font-bold border-white' : 'border-white/20 text-slate-400 hover:text-white'}`}
                    >
                        <span className="material-symbols-outlined">palette</span>
                        <span>Identidade</span>
                    </button>
                    <button 
                        onClick={() => setActiveTab('services')}
                        className={`whitespace-nowrap flex items-center gap-2 px-4 py-3 rounded-xl transition-all border md:border-transparent ${activeTab === 'services' ? 'bg-white text-slate-900 font-bold border-white' : 'border-white/20 text-slate-400 hover:text-white'}`}
                    >
                        <span className="material-symbols-outlined">grid_view</span>
                        <span>Serviços ({services.length})</span>
                    </button>
                </nav>

                {/* Desktop Only: Preview Button Full */}
                <div className="hidden md:block mt-auto p-6">
                     <button 
                        onClick={() => navigate(Page.HOME)}
                        className={`w-full flex items-center justify-center gap-2 px-4 py-4 rounded-xl font-bold text-white shadow-lg transition-transform active:scale-95 ${accentColor}`}
                    >
                        <span className="material-symbols-outlined">rocket_launch</span>
                        Ver Site Online
                    </button>
                </div>
            </div>

            {/* MAIN CONTENT AREA */}
            <div className="flex-grow p-4 md:p-12 overflow-y-auto bg-slate-50 pb-24 md:pb-12">
                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden min-h-[80vh]">
                    
                    {/* --- GENERAL SETTINGS TAB --- */}
                    {activeTab === 'general' && (
                        <div className="animate-fade-in p-6 md:p-10">
                            <div className="mb-8 border-b border-slate-100 pb-6">
                                <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-800">Identidade Visual</h2>
                                <p className="text-slate-500 text-sm mt-1">Defina as cores e textos principais do seu site.</p>
                            </div>

                            <div className="space-y-8">
                                {/* Color Selector */}
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Cor do Tema</label>
                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { id: 'pink', label: 'Rosa' },
                                            { id: 'blue', label: 'Azul' },
                                            { id: 'violet', label: 'Violeta' }
                                        ].map(color => (
                                            <button
                                                key={color.id}
                                                onClick={() => handleConfigChange('primaryColor', color.id)}
                                                className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${currentConfig.primaryColor === color.id ? `border-${color.id === 'blue' ? 'sky' : color.id === 'violet' ? 'violet' : 'pink'}-500 bg-${color.id === 'blue' ? 'sky' : color.id === 'violet' ? 'violet' : 'pink'}-50` : 'border-slate-100'}`}
                                            >
                                                <div className={`w-8 h-8 rounded-full bg-${color.id === 'blue' ? 'sky' : color.id === 'violet' ? 'violet' : 'pink'}-500 shadow-sm`}></div>
                                                <span className="font-bold text-sm text-slate-700">{color.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Inputs Stack */}
                                <div className="space-y-5">
                                    {[
                                        { label: "Nome Profissional", field: "ownerName", placeholder: "Ex: Sônia Andrade" },
                                        { label: "Título / Cargo", field: "professionTitle", placeholder: "Ex: Psicanalista" },
                                        { label: "WhatsApp (Apenas números)", field: "whatsapp", placeholder: "5521999999999", type: "tel" },
                                    ].map((input) => (
                                        <div key={input.field}>
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{input.label}</label>
                                            <input 
                                                type={input.type || "text"}
                                                value={(currentConfig as any)[input.field]}
                                                onChange={(e) => handleConfigChange(input.field as any, e.target.value.replace(input.type === 'tel' ? /\D/g : '', input.type === 'tel' ? '' : '$&'))}
                                                className="w-full h-14 px-4 bg-white rounded-xl border border-slate-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none font-bold text-slate-800 placeholder:text-slate-300 transition-all text-lg"
                                                placeholder={input.placeholder}
                                            />
                                        </div>
                                    ))}
                                    
                                    <div>
                                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Bio (Boas-vindas)</label>
                                        <textarea 
                                            rows={4}
                                            value={currentConfig.heroBio}
                                            onChange={(e) => handleConfigChange('heroBio', e.target.value)}
                                            className="w-full p-4 bg-white rounded-xl border border-slate-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-100 outline-none text-slate-800 placeholder:text-slate-300 resize-none transition-all text-base leading-relaxed"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* --- SERVICES TAB --- */}
                    {activeTab === 'services' && (
                        <div className="animate-slide-up h-full flex flex-col">
                            {!isEditingService ? (
                                <div className="p-4 md:p-10">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                                        <div>
                                            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-800">Gerenciar Serviços</h2>
                                            <p className="text-slate-500 text-sm">Adicione ou edite os serviços oferecidos.</p>
                                        </div>
                                        <button 
                                            onClick={handleAddService}
                                            className={`w-full md:w-auto px-6 py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 shadow-lg hover:brightness-110 active:scale-95 transition-all ${accentColor}`}
                                        >
                                            <span className="material-symbols-outlined">add</span>
                                            Novo Serviço
                                        </button>
                                    </div>

                                    <div className="space-y-4 pb-20">
                                        {services.length === 0 && (
                                            <div className="text-center py-12 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
                                                <span className="material-symbols-outlined text-4xl text-slate-300 mb-2">post_add</span>
                                                <p className="text-slate-500 font-bold">Nenhum serviço cadastrado.</p>
                                            </div>
                                        )}
                                        {services.map(service => (
                                            <div key={service.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 relative group hover:border-pink-300 transition-colors">
                                                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 ${currentColorClass.split(' ')[1]} ${currentColorClass.split(' ')[0]}`}>
                                                    <span className="material-symbols-outlined text-2xl md:text-3xl">{service.icon}</span>
                                                </div>
                                                <div className="flex-grow min-w-0 pr-0 md:pr-24">
                                                    <h3 className="font-bold text-lg text-slate-800 truncate">{service.title}</h3>
                                                    <p className="text-sm text-slate-500 line-clamp-2 mt-1">{service.desc}</p>
                                                </div>
                                                
                                                {/* Actions - Visible on Mobile, Group Hover on Desktop */}
                                                <div className="flex gap-2 mt-2 sm:mt-0 sm:absolute sm:right-5 sm:top-1/2 sm:-translate-y-1/2">
                                                    <button 
                                                        onClick={() => handleEditService(service)} 
                                                        className="flex-1 sm:flex-none h-10 px-4 bg-slate-100 rounded-lg flex items-center justify-center gap-2 text-slate-600 font-bold text-sm hover:bg-slate-200 active:scale-95 transition-all"
                                                    >
                                                        <span className="material-symbols-outlined text-sm">edit</span>
                                                        <span className="sm:hidden">Editar</span>
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDeleteService(service.id)} 
                                                        className="h-10 w-10 sm:w-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 hover:bg-red-100 active:scale-95 transition-all"
                                                    >
                                                        <span className="material-symbols-outlined text-xl">delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <div className="p-4 md:p-10 animate-fade-in flex flex-col h-full">
                                    <div className="flex items-center gap-2 mb-6">
                                        <button onClick={() => setIsEditingService(false)} className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 active:scale-90 transition-transform">
                                            <span className="material-symbols-outlined">arrow_back</span>
                                        </button>
                                        <h2 className="text-xl font-bold text-slate-800">{editingId ? 'Editar Serviço' : 'Criar Novo Serviço'}</h2>
                                    </div>
                                    
                                    <div className="space-y-6 pb-20">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Título</label>
                                            <input 
                                                type="text" 
                                                value={serviceForm.title}
                                                onChange={(e) => setServiceForm({...serviceForm, title: e.target.value})}
                                                className="w-full h-14 px-4 bg-white rounded-xl border border-slate-300 focus:border-pink-500 outline-none font-bold text-slate-800 text-lg placeholder:text-slate-300"
                                                placeholder="Ex: Terapia"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Descrição</label>
                                            <textarea 
                                                rows={4}
                                                value={serviceForm.desc}
                                                onChange={(e) => setServiceForm({...serviceForm, desc: e.target.value})}
                                                className="w-full p-4 bg-white rounded-xl border border-slate-300 focus:border-pink-500 outline-none text-slate-800 resize-none placeholder:text-slate-300 text-base"
                                                placeholder="Descreva o serviço..."
                                            />
                                        </div>
                                        
                                        <div>
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Escolha um Ícone</label>
                                            <div className="grid grid-cols-5 gap-3">
                                                {iconOptions.map(icon => (
                                                    <button 
                                                        key={icon}
                                                        onClick={() => setServiceForm({...serviceForm, icon})}
                                                        className={`aspect-square rounded-xl flex items-center justify-center transition-all ${serviceForm.icon === icon ? `${accentColor} text-white shadow-lg scale-110` : 'bg-slate-50 text-slate-400 border border-slate-200'}`}
                                                    >
                                                        <span className="material-symbols-outlined text-2xl">{icon}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">URL da Imagem (Opcional)</label>
                                            <input 
                                                type="text" 
                                                value={serviceForm.img}
                                                onChange={(e) => setServiceForm({...serviceForm, img: e.target.value})}
                                                className="w-full h-12 px-4 bg-white rounded-xl border border-slate-300 focus:border-pink-500 outline-none text-slate-600 text-sm placeholder:text-slate-300"
                                                placeholder="https://exemplo.com/imagem.jpg"
                                            />
                                        </div>

                                        <button 
                                            onClick={handleSaveService}
                                            disabled={!serviceForm.title || !serviceForm.desc}
                                            className={`w-full py-5 rounded-2xl font-bold text-white shadow-xl text-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 transition-all ${accentColor}`}
                                        >
                                            Salvar Alterações
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Editor;
