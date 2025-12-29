import React, { useState } from 'react';
import { Page } from '../App';

interface Props {
  navigate: (page: Page) => void;
}

const Vocational: React.FC<Props> = () => {
    // State to handle flip card interactions for touch devices or simple click
    const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

    const toggleFlip = (index: number) => {
        setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div className="animate-fade-in">
            {/* Hero */}
            <header className="relative bg-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                 <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(30deg, #e0f2fe 12%, transparent 12.5%, transparent 87%, #e0f2fe 87.5%, #e0f2fe),
                    linear-gradient(150deg, #e0f2fe 12%, transparent 12.5%, transparent 87%, #e0f2fe 87.5%, #e0f2fe),
                    linear-gradient(30deg, #e0f2fe 12%, transparent 12.5%, transparent 87%, #e0f2fe 87.5%, #e0f2fe),
                    linear-gradient(150deg, #e0f2fe 12%, transparent 12.5%, transparent 87%, #e0f2fe 87.5%, #e0f2fe),
                    linear-gradient(60deg, #f0f9ff 25%, transparent 25.5%, transparent 75%, #f0f9ff 75%, #f0f9ff),
                    linear-gradient(60deg, #f0f9ff 25%, transparent 25.5%, transparent 75%, #f0f9ff 75%, #f0f9ff)`,
                    backgroundSize: '40px 70px',
                    backgroundPosition: '0 0, 0 0, 20px 35px, 20px 35px, 0 0, 20px 35px',
                    opacity: 0.5
                }}></div>
                <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 space-y-6 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-xs font-bold uppercase tracking-widest border border-sky-200">
                                <span className="material-symbols-outlined text-sm">explore</span> Carreira & Futuro
                            </div>
                            <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-800 leading-tight">
                                Descubra seu caminho, <br /> <span className="text-sky-600 italic">construa seu futuro.</span>
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                                A escolha profissional não precisa ser um peso. Oferecemos um processo estruturado de autoconhecimento e análise de mercado.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                                <a className="px-8 py-4 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-all shadow-lg hover:shadow-sky-500/30 text-center font-bold text-lg flex items-center justify-center gap-2 group" href="#contato">
                                    Iniciar Jornada
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </a>
                                <a className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-lg hover:border-sky-400 hover:text-sky-600 transition-all text-center font-bold text-lg" href="#metodologia">
                                    Como funciona
                                </a>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center relative">
                            <div className="relative w-full max-w-lg">
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-200 rounded-full blur-2xl opacity-50"></div>
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-50"></div>
                                <img alt="Carreira" className="relative w-full h-auto rounded-2xl shadow-2xl border-4 border-white object-cover aspect-square z-10" src="https://santanamendes.com.br/Sonia/Sonia_d3_img0.png" />
                                <div className="absolute bottom-8 -left-8 bg-white p-4 rounded-lg shadow-xl border-l-4 border-sky-500 z-20 hidden md:block max-w-xs">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="material-symbols-outlined text-sky-500">check_circle</span>
                                        <span className="font-bold text-slate-800">Autoconhecimento</span>
                                    </div>
                                    <p className="text-xs text-slate-500">O primeiro passo para uma escolha assertiva.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Audience */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-4">Para quem é indicado?</h2>
                        <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">O processo de Orientação Profissional (OP) adapta-se a diferentes momentos da vida.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: '1ª Escolha (Jovens)', icon: 'school', desc: 'Para estudantes do Ensino Médio perdidos diante do vestibular.', items: ['Identificação de interesses', 'Análise de habilidades', 'Informação sobre cursos'] },
                            { title: 'Reorientação', icon: 'sync_alt', desc: 'Para universitários ou recém-formados insatisfeitos com a área.', items: ['Entender o que deu errado', 'Realinhamento de expectativas', 'Novas possibilidades'] },
                            { title: 'Transição de Carreira', icon: 'work_history', desc: 'Para profissionais que buscam novos desafios ou planejamento de aposentadoria.', items: ['Análise de competências transferíveis', 'Planejamento financeiro/temporal', 'Projeto de vida pós-carreira'] }
                        ].map((card, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 hover:shadow-lg">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <span className="material-symbols-outlined text-8xl text-sky-600">{card.icon}</span>
                                </div>
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-sky-600 mb-6">
                                    <span className="material-symbols-outlined text-3xl">{card.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">{card.desc}</p>
                                <ul className="space-y-2 text-sm text-slate-500">
                                    {card.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-sky-500 rounded-full"></span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             {/* Methodology */}
            <section className="py-20 bg-sky-50" id="metodologia">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-center text-slate-800 mb-16">Como funciona o processo?</h2>
                    <div className="max-w-4xl mx-auto relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-sky-200 -translate-x-1/2"></div>
                        
                        {[
                            { num: 1, title: 'Entrevista Inicial', desc: 'Acolhimento da demanda e levantamento da história de vida escolar, familiar e profissional.' },
                            { num: 2, title: 'Autoconhecimento', desc: 'Uso de testes psicológicos, dinâmicas e entrevistas para identificar perfil de personalidade, interesses e valores.' },
                            { num: 3, title: 'Informação Profissional', desc: 'Pesquisa orientada sobre profissões, mercado de trabalho, grades curriculares e rotina das áreas de interesse.' },
                            { num: 4, title: 'Escolha e Projeto', desc: 'Tomada de decisão e elaboração de um plano de ação concreto (vestibular, currículo, networking).' },
                            { num: 5, title: 'Devolutiva', desc: 'Entrega de um laudo ou parecer com a síntese do processo e orientações finais.' }
                        ].map((step, i) => (
                            <div key={i} className="relative flex flex-col md:flex-row items-center justify-between mb-12 group last:mb-0">
                                <div className={`order-1 md:w-5/12 p-4 ${i % 2 === 0 ? 'md:text-right' : 'md:order-3 md:text-left'}`}>
                                    <h3 className="text-xl font-bold text-slate-800 mb-2">{step.num}. {step.title}</h3>
                                    <p className="text-slate-600 text-sm">{step.desc}</p>
                                </div>
                                <div className="order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2 w-12 h-12 bg-white border-4 border-sky-500 rounded-full flex items-center justify-center z-10 shadow-md group-hover:scale-110 transition-transform mb-4 md:mb-0">
                                    {step.num === 5 ? <span className="material-symbols-outlined text-sky-600">flag</span> : <span className="font-bold text-sky-600">{step.num}</span>}
                                </div>
                                <div className={`order-1 md:w-5/12 p-4 hidden md:block ${i % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Myths vs Truths (Interactive) */}
            <section className="py-20 bg-white border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-center text-slate-800 mb-12">Mitos e Verdades</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            { myth: '"O teste vocacional decide por mim."', truth: 'Testes são apenas ferramentas. A escolha é um processo ativo construído por VOCÊ com o auxílio do profissional.' },
                            { myth: '"Existe apenas uma carreira certa pra mim."', truth: 'Temos múltiplos potenciais. Podemos ser felizes e competentes em diversas áreas diferentes.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-xl p-6 cursor-pointer group perspective-1000 h-40" onClick={() => toggleFlip(idx)}>
                                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards[idx] ? 'rotate-y-180' : ''}`}>
                                    {/* Front */}
                                    <div className="absolute inset-0 backface-hidden flex flex-col items-center justify-center text-center">
                                        <span className="text-red-500 font-bold mb-2">MITO</span>
                                        <h3 className="text-lg font-bold text-slate-700">{item.myth}</h3>
                                        <p className="text-xs text-slate-400 mt-2">(Clique para ver a verdade)</p>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-xl flex flex-col items-center justify-center text-center p-4 border border-sky-200 shadow-inner">
                                        <span className="text-green-600 font-bold mb-1">VERDADE</span>
                                        <p className="text-sm text-slate-600">{item.truth}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Contact */}
            <section className="py-20 bg-slate-800 text-white relative overflow-hidden" id="contato">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)'}}></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Pronto para desenhar seu futuro?</h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                        Entre em contato para saber mais sobre os pacotes de Orientação Profissional (número de sessões e valores).
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3" href="https://wa.me/5521992717217?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20Orienta%C3%A7%C3%A3o%20Profissional." target="_blank" rel="noreferrer">
                            <span className="material-symbols-outlined">chat</span> Agendar via WhatsApp
                        </a>
                        <a className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3" href="mailto:soniarosa.psi@email.com">
                            <span className="material-symbols-outlined">mail</span> Enviar E-mail
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vocational;