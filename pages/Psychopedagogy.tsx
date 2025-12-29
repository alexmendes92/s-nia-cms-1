import React, { useState } from 'react';
import { Page } from '../App';

interface Props {
  navigate: (page: Page) => void;
}

const Psychopedagogy: React.FC<Props> = () => {
    const [openAccordion, setOpenAccordion] = useState<string | null>('tdah');

    const toggleAccordion = (id: string) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <header className="relative bg-white overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(#fb923c 0.5px, transparent 0.5px), radial-gradient(#fb923c 0.5px, #fff7ed 0.5px)',
                    backgroundSize: '20px 20px',
                    backgroundColor: '#fff7ed'
                }}></div>
                <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 space-y-6 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold uppercase tracking-widest border border-orange-200">
                                <span className="material-symbols-outlined text-sm">extension</span> Aprendizagem & Desenvolvimento
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-800 leading-tight">
                                Acompanhamento <br /> <span className="text-orange-500 italic">Psicopedagógico</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                                Quando aprender se torna um desafio, nós construímos pontes. Identificamos barreiras e potencializamos habilidades para que todos reencontrem o prazer de aprender.
                            </p>
                             <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                               <a href="https://wa.me/5521992717217?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20psicopedag%C3%B3gica." target="_blank" rel="noreferrer" className="px-8 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 text-center font-bold text-lg flex items-center justify-center gap-2 group">
                                Agendar Avaliação
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                               </a>
                               <a href="#sinais" className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-700 rounded-xl hover:border-orange-300 hover:text-orange-600 transition-all text-center font-bold text-lg">
                                Sinais de Alerta
                               </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-md">
                                <img alt="Aprendizado" className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white animate-float object-cover aspect-square" src="https://santanamendes.com.br/Sonia/Sonia_d2_img0.png" />
                                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-xl shadow-lg border border-orange-100 flex items-center gap-3">
                                    <div className="bg-green-100 p-2 rounded-full text-green-600">
                                        <span className="material-symbols-outlined">radio_button_unchecked</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase">Foco na</p>
                                        <p className="text-sm font-bold text-slate-700">Potencialidade</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Approach */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">Mais que reforço escolar</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Enquanto o reforço foca no conteúdo da matéria, a <strong>Psicopedagogia foca em COMO se aprende</strong>. Investigamos os processos cognitivos (memória, atenção, raciocínio) e emocionais.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                {['Estratégias de Estudo', 'Suporte Emocional', 'Estímulo Cognitivo', 'Orientação Familiar'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                                        <span className="material-symbols-outlined text-orange-500">check_circle</span>
                                        <span className="font-bold text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <img className="rounded-2xl shadow-lg w-full h-full object-cover mt-8" src="https://santanamendes.com.br/Sonia/Sonia_d2_img1.png" alt="Jogos" />
                             <img className="rounded-2xl shadow-lg w-full h-full object-cover" src="https://santanamendes.com.br/Sonia/Sonia_d2_img2.png" alt="Estudo" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sinais de Alerta */}
            <section className="py-20 bg-orange-50" id="sinais">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-center text-slate-800 mb-4">Sinais de Alerta</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
                        <div className="space-y-4">
                            {[
                                { id: 'tdah', title: 'Atenção e Hiperatividade (TDAH)', icon: 'bolt', items: ['Dificuldade em manter o foco.', 'Perde objetos com frequência.', 'Agitação motora.'] },
                                { id: 'dislexia', title: 'Leitura e Escrita (Dislexia)', icon: 'menu_book', items: ['Troca letras com sons parecidos.', 'Leitura lenta ou silabada.', 'Dificuldade de compreensão.'] },
                                { id: 'calc', title: 'Matemática (Discalculia)', icon: 'calculate', items: ['Dificuldade com operações básicas.', 'Não lê relógio analógico.', 'Problemas com lógica.'] }
                            ].map(item => (
                                <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-orange-100">
                                    <button className="w-full flex items-center justify-between p-5 text-left hover:bg-orange-50 transition-colors" onClick={() => toggleAccordion(item.id)}>
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-orange-500">{item.icon}</span>
                                            <span className="font-bold text-slate-800 text-lg">{item.title}</span>
                                        </div>
                                        <span className={`material-symbols-outlined text-slate-400 transition-transform ${openAccordion === item.id ? 'rotate-180' : ''}`}>expand_more</span>
                                    </button>
                                    {openAccordion === item.id && (
                                        <div className="px-5 pb-5 pt-0 text-slate-600 animate-fade-in">
                                            <ul className="space-y-2 mt-2 ml-2 list-disc list-inside marker:text-orange-500">
                                                {item.items.map((li, idx) => <li key={idx}>{li}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 h-fit sticky top-24">
                            <h3 className="font-bold text-slate-800 mb-4">Como ajudamos?</h3>
                            <div className="relative pl-8 border-l-2 border-orange-200 space-y-8">
                                {[
                                    { num: 1, title: 'Avaliação Detalhada', desc: 'Testes e jogos para mapear dificuldades.' },
                                    { num: 2, title: 'Plano de Intervenção', desc: 'Estratégias personalizadas.' },
                                    { num: 3, title: 'Orientação Escolar', desc: 'Parceria com a escola.' }
                                ].map((step, i) => (
                                    <div key={i} className="relative">
                                        <span className="absolute -left-[41px] bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">{step.num}</span>
                                        <h4 className="font-bold text-slate-800">{step.title}</h4>
                                        <p className="text-sm text-slate-600">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gamification Section */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <img alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-10" src="https://santanamendes.com.br/Sonia/Sonia_d2_img3.png" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl font-heading font-bold mb-8">Aprender Brincando é Coisa Séria</h2>
                    <p className="text-slate-300 max-w-2xl mx-auto mb-12">
                        Utilizamos recursos de gamificação e neurociência. O cérebro aprende melhor quando está motivado e emocionado. Nossas sessões são dinâmicas, desafiadoras e acolhedoras.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: 'sports_esports', title: 'Jogos Cognitivos', color: 'text-orange-400', border: 'hover:border-orange-500' },
                            { icon: 'palette', title: 'Arteterapia', color: 'text-pink-400', border: 'hover:border-pink-500' },
                            { icon: 'computer', title: 'Softwares', color: 'text-blue-400', border: 'hover:border-blue-500' },
                            { icon: 'auto_stories', title: 'Leitura Guiada', color: 'text-green-400', border: 'hover:border-green-500' }
                        ].map((item, i) => (
                            <div key={i} className={`bg-slate-800 p-6 rounded-xl border border-slate-700 ${item.border} transition-colors group`}>
                                <span className={`material-symbols-outlined text-4xl ${item.color} mb-4 group-hover:scale-110 transition-transform`}>{item.icon}</span>
                                <h3 className="font-bold">{item.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-orange-100" id="agendamento">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/2 p-12 flex flex-col justify-center text-center md:text-left">
                            <h2 className="text-3xl font-heading font-bold text-slate-800 mb-4">Vamos desbloquear esse potencial?</h2>
                            <p className="text-slate-600 mb-8">
                                Agende uma conversa inicial. Entender a dificuldade é o primeiro passo para superá-la. Atendemos crianças, adolescentes e adultos.
                            </p>
                            <a className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg hover:shadow-green-500/30" href="https://wa.me/5521992717217?text=Quero%20saber%20mais%20sobre%20acompanhamento%20psicopedag%C3%B3gico." target="_blank" rel="noreferrer">
                                <span className="material-symbols-outlined">chat</span> Falar no WhatsApp
                            </a>
                        </div>
                        <div className="md:w-1/2 bg-orange-200 relative min-h-[300px]">
                            <img alt="Mãos segurando um diploma ou sucesso escolar" className="absolute inset-0 w-full h-full object-cover" src="https://santanamendes.com.br/Sonia/Sonia_d2_img4.png" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Psychopedagogy;