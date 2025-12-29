import React, { useState, useEffect, useRef } from 'react';
import { Page, SiteConfig } from '../App';

interface Props {
  navigate: (page: Page) => void;
  initialName?: string;
  config: SiteConfig;
}

// Components moved outside to avoid re-creation and fix type inference issues
interface ChatBubbleProps {
    children?: React.ReactNode;
    delay?: number;
    ownerName: string;
}

const ChatBubble = ({ children, delay = 0, ownerName }: ChatBubbleProps) => (
    <div className="flex gap-4 mb-6 animate-slide-up" style={{ animationDelay: `${delay}ms` }}>
        <div className="shrink-0">
            <img src="https://santanamendes.com.br/Sonia/Sonia_d0_img0.png" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md" alt={ownerName} />
        </div>
        <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-slate-700 leading-relaxed max-w-[85%] relative">
            {children}
        </div>
    </div>
);

const UserBubble = ({ children }: { children?: React.ReactNode }) => (
    <div className="flex gap-4 mb-8 justify-end animate-slide-up">
        <div className="bg-pink-600 text-white p-4 rounded-2xl rounded-tr-none shadow-md max-w-[85%] text-right">
            {children}
        </div>
    </div>
);

const TypingIndicator = ({ ownerName }: { ownerName: string }) => (
    <div className="flex gap-4 mb-6 animate-fade-in">
         <div className="shrink-0">
            <img src="https://santanamendes.com.br/Sonia/Sonia_d0_img0.png" className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md opacity-80" alt={ownerName} />
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl rounded-tl-none border border-slate-100 flex gap-1 items-center h-12">
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
        </div>
    </div>
);

const Appointment: React.FC<Props> = ({ navigate, initialName, config }) => {
    // Steps: 0=Name, 1=Service, 2=Time/Details, 3=Review
    const [step, setStep] = useState(initialName ? 1 : 0);
    const [isTyping, setIsTyping] = useState(false);
    
    // Data State
    const [name, setName] = useState(initialName || '');
    const [selectedService, setSelectedService] = useState<{id: string, label: string, icon: string, color: string} | null>(null);
    const [preference, setPreference] = useState(''); // Morning, Afternoon, Evening
    const [message, setMessage] = useState('');

    const services = [
        { id: 'psicanalise', label: 'Psicanálise', icon: 'psychology_alt', color: 'bg-pink-100 text-pink-700 border-pink-200' },
        { id: 'psicopedagogia', label: 'Psicopedagogia', icon: 'extension', color: 'bg-orange-100 text-orange-700 border-orange-200' },
        { id: 'irlen', label: 'Síndrome de Irlen', icon: 'visibility', color: 'bg-blue-100 text-blue-700 border-blue-200' },
        { id: 'carreira', label: 'Carreira/OP', icon: 'explore', color: 'bg-sky-100 text-sky-700 border-sky-200' },
        { id: 'tdah', label: 'TDAH', icon: 'bolt', color: 'bg-violet-100 text-violet-700 border-violet-200' },
        { id: 'florais', label: 'Florais', icon: 'local_florist', color: 'bg-green-100 text-green-700 border-green-200' }
    ];

    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [step, isTyping]);

    // Simulate typing effect when changing steps
    useEffect(() => {
        setIsTyping(true);
        const timer = setTimeout(() => {
            setIsTyping(false);
        }, 1200);
        return () => clearTimeout(timer);
    }, [step]);

    const handleNext = () => {
        setStep(prev => prev + 1);
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const handleSendWhatsApp = () => {
        const text = `Olá ${config.ownerName.split(' ')[0]}! Meu nome é *${name}*.%0A%0AGostaria de agendar um atendimento para: *${selectedService?.label.toUpperCase()}*.%0A%0APreferência de horário: ${preference}%0AObservações: ${message || 'Nenhuma.'}`;
        window.open(`https://wa.me/${config.whatsapp}?text=${text}`, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen pb-32">
            {/* Header Sticky */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
                <button onClick={() => navigate(Page.HOME)} className="flex items-center gap-2 text-slate-500 hover:text-pink-600 transition-colors">
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                    <span className="text-sm font-bold uppercase tracking-wider">Voltar</span>
                </button>
                <div className="flex flex-col items-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Agendamento</span>
                    <div className="flex gap-1 mt-1">
                        {[0, 1, 2, 3].map(i => (
                            <div key={i} className={`h-1.5 w-6 rounded-full transition-colors duration-500 ${step >= i ? 'bg-pink-500' : 'bg-slate-200'}`}></div>
                        ))}
                    </div>
                </div>
                <div className="w-16"></div> {/* Spacer */}
            </header>

            <div className="container mx-auto px-6 max-w-2xl py-8">
                
                {/* Step 0: Name (Only if not provided) */}
                {step === 0 && (
                    <>
                        <ChatBubble ownerName={config.ownerName}>
                            Olá! Que alegria receber você aqui. 😊<br/>
                            Para começarmos, <strong>qual é o seu nome completo?</strong>
                        </ChatBubble>
                        
                        {!isTyping && (
                            <div className="animate-slide-up mt-4">
                                <input 
                                    type="text" 
                                    autoFocus
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && name.trim() && handleNext()}
                                    placeholder="Digite seu nome..."
                                    className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none text-lg transition-all shadow-sm"
                                />
                                <button 
                                    onClick={handleNext}
                                    disabled={!name.trim()}
                                    className="w-full mt-4 bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-xl active:scale-95 transition-all"
                                >
                                    Continuar
                                </button>
                            </div>
                        )}
                    </>
                )}

                {/* Step 1: Service */}
                {step >= 1 && (
                    <>
                        {/* History of Step 0 */}
                        {!initialName && step > 0 && <UserBubble>Me chamo {name}.</UserBubble>}

                        {/* Current Step 1 */}
                        {step === 1 && (
                            <>
                                {isTyping ? <TypingIndicator ownerName={config.ownerName} /> : (
                                    <ChatBubble ownerName={config.ownerName}>
                                        Prazer, {name.split(' ')[0]}! ✨<br/>
                                        Como posso te ajudar hoje? Selecione o atendimento que você busca:
                                    </ChatBubble>
                                )}

                                {!isTyping && (
                                    <div className="grid grid-cols-2 gap-3 animate-slide-up">
                                        {services.map(s => (
                                            <button
                                                key={s.id}
                                                onClick={() => { setSelectedService(s); handleNext(); }}
                                                className={`p-4 rounded-2xl border-2 text-left transition-all hover:scale-[1.02] active:scale-95 flex flex-col gap-2 ${s.color}`}
                                            >
                                                <div className="w-10 h-10 bg-white/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                                                    <span className="material-symbols-outlined text-2xl">{s.icon}</span>
                                                </div>
                                                <span className="font-bold text-sm leading-tight">{s.label}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}

                {/* Step 2: Time & Details */}
                {step >= 2 && (
                    <>
                        {/* History of Step 1 */}
                        {step > 1 && <UserBubble>Gostaria de saber sobre {selectedService?.label}.</UserBubble>}

                        {/* Current Step 2 */}
                        {step === 2 && (
                            <>
                                {isTyping ? <TypingIndicator ownerName={config.ownerName} /> : (
                                    <ChatBubble ownerName={config.ownerName}>
                                        Excelente escolha. O {selectedService?.label} é transformador.<br/><br/>
                                        Para agilizar, você tem preferência por algum turno? E quer deixar alguma observação?
                                    </ChatBubble>
                                )}

                                {!isTyping && (
                                    <div className="space-y-6 animate-slide-up">
                                        <div className="space-y-2">
                                            <span className="text-xs font-bold text-slate-400 uppercase ml-2">Preferência de Turno</span>
                                            <div className="flex gap-2">
                                                {['Manhã', 'Tarde', 'Noite', 'Flexível'].map(p => (
                                                    <button 
                                                        key={p}
                                                        onClick={() => setPreference(p)}
                                                        className={`flex-1 py-3 rounded-xl font-bold text-sm border-2 transition-all ${preference === p ? 'bg-pink-600 text-white border-pink-600 shadow-lg' : 'bg-white border-slate-200 text-slate-600 hover:border-pink-300'}`}
                                                    >
                                                        {p}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <span className="text-xs font-bold text-slate-400 uppercase ml-2">Mensagem Adicional (Opcional)</span>
                                            <textarea 
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                                placeholder="Ex: Gostaria de atendimento online..."
                                                className="w-full p-4 rounded-2xl border-2 border-slate-200 focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all shadow-sm"
                                                rows={3}
                                            />
                                        </div>

                                        <div className="flex gap-3">
                                            <button onClick={handleBack} className="px-6 py-4 rounded-2xl font-bold text-slate-500 hover:bg-slate-100 transition-colors">Voltar</button>
                                            <button 
                                                onClick={handleNext}
                                                disabled={!preference}
                                                className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                            >
                                                Revisar Pedido
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}

                {/* Step 3: Review & Send */}
                {step >= 3 && (
                    <>
                         {/* History of Step 2 */}
                         {step > 2 && <UserBubble>Prefiro à {preference}. {message && `Obs: ${message}`}</UserBubble>}

                         {step === 3 && (
                             <>
                                {isTyping ? <TypingIndicator ownerName={config.ownerName} /> : (
                                    <ChatBubble ownerName={config.ownerName}>
                                        Tudo pronto, {name.split(' ')[0]}! ✨<br/>
                                        Preparei um resumo do seu pedido. Se estiver tudo certo, clique abaixo para abrir nosso WhatsApp.
                                    </ChatBubble>
                                )}

                                {!isTyping && (
                                    <div className="animate-slide-up">
                                        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-pink-100 relative overflow-hidden mb-6 group cursor-pointer hover:-translate-y-1 transition-transform duration-500">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 rounded-full blur-[60px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                                            
                                            <div className="flex justify-between items-start mb-6">
                                                <div>
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Paciente</span>
                                                    <h3 className="text-xl font-bold text-slate-800">{name}</h3>
                                                </div>
                                                <div className={`p-3 rounded-full ${selectedService?.color} bg-opacity-20`}>
                                                    <span className="material-symbols-outlined text-2xl">{selectedService?.icon}</span>
                                                </div>
                                            </div>

                                            <div className="space-y-4 border-t border-dashed border-slate-200 pt-6">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-bold text-slate-500">Serviço</span>
                                                    <span className="text-sm font-bold text-slate-800">{selectedService?.label}</span>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-bold text-slate-500">Horário</span>
                                                    <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-bold text-slate-700">{preference}</span>
                                                </div>
                                                {message && (
                                                    <div className="bg-slate-50 p-3 rounded-xl text-xs text-slate-500 italic">
                                                        "{message}"
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <button 
                                            onClick={handleSendWhatsApp}
                                            className="w-full bg-green-500 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-200 hover:bg-green-600 active:scale-95 transition-all flex items-center justify-center gap-3 animate-pulse"
                                        >
                                            <span className="material-symbols-outlined text-2xl">chat</span>
                                            Confirmar no WhatsApp
                                        </button>
                                        <button onClick={handleBack} className="w-full py-4 text-slate-400 text-sm font-bold mt-2 hover:text-pink-600 transition-colors">Alterar algo</button>
                                    </div>
                                )}
                             </>
                         )}
                    </>
                )}

                <div ref={messagesEndRef} />
            </div>
        </div>
    );
};

export default Appointment;