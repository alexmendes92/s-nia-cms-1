import React, { useState, useEffect } from 'react';
import { Page } from '../App';

interface Props {
  navigate: (page: Page) => void;
}

const flowerData: Record<string, { title: string; desc: string; virtue: string; from: string; to: string; img: string }> = {
    medo: {
        title: 'Grupo do Medo',
        desc: 'Para quem sente medos conhecidos (doença, pobreza), pânico ou medos vagos e inexplicáveis. Os florais trazem a coragem para enfrentar a vida.',
        virtue: 'Coragem',
        from: 'Medo / Pânico',
        to: 'Coragem / Confiança',
        img: 'https://santanamendes.com.br/Sonia/Sonia_d6_img0.png' 
    },
    incerteza: {
        title: 'Grupo da Incerteza',
        desc: 'Para quem duvida do próprio julgamento, pede conselho a todos ou sente desânimo diante de pequenos obstáculos. Restaura a fé interior.',
        virtue: 'Intuição',
        from: 'Indecisão',
        to: 'Certeza Interior',
        img: 'https://santanamendes.com.br/Sonia/Sonia_d6_img0.png'
    },
    presente: {
        title: 'Falta de Interesse',
        desc: 'Para quem vive no passado (nostalgia), sonha com o futuro mas não age, ou sente apatia. Ajuda a ancorar no aqui e agora.',
        virtue: 'Foco',
        from: 'Apatia',
        to: 'Presença Viva',
        img: 'https://santanamendes.com.br/Sonia/Sonia_d6_img0.png'
    },
    solidao: {
        title: 'Grupo da Solidão',
        desc: 'Para quem se isola por orgulho, ou por impaciência com o ritmo lento dos outros. Ensina a empatia e a troca.',
        virtue: 'Empatia',
        from: 'Isolamento',
        to: 'Troca',
        img: 'https://santanamendes.com.br/Sonia/Sonia_d6_img0.png'
    },
    hipersensivel: {
        title: 'Hipersensibilidade',
        desc: 'Para quem tem dificuldade em dizer não, esconde a tristeza atrás de um sorriso ou sente inveja/ciúmes.',
        virtue: 'Paz Interior',
        from: 'Submissão',
        to: 'Autenticidade',
        img: 'https://santanamendes.com.br/Sonia/Sonia_d6_img0.png'
    },
    desespero: {
        title: 'Desespero e Abatimento',
        desc: 'Para situações de trauma, choque, culpa, ressentimento ou sensação de capacidade sobrecarregada.',
        virtue: 'Restauração',
        from: 'Trauma',
        to: 'Consolo',
        img: 'https://santanamendes.com.br/Sonia/Sonia_d6_img0.png'
    }
};

const Florals: React.FC<Props> = () => {
    const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
    const [petals, setPetals] = useState<{id: number, size: string, left: string, duration: string}[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newPetal = {
                id: Date.now(),
                size: Math.random() * 10 + 5 + 'px',
                left: Math.random() * 100 + 'vw',
                duration: Math.random() * 5 + 5 + 's'
            };
            setPetals(prev => [...prev, newPetal]);
            
            setTimeout(() => {
                setPetals(prev => prev.filter(p => p.id !== newPetal.id));
            }, parseFloat(newPetal.duration) * 1000);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="animate-fade-in bg-green-50">
             {/* Hero */}
             <header className="relative overflow-hidden min-h-[80vh] flex items-center bg-[#f0fdf4]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2386efac' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}>
                {/* Petals Container */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {petals.map(p => (
                        <div key={p.id} className="petal" style={{ width: p.size, height: p.size, left: p.left, top: '-20px', animation: `float-petal ${p.duration} linear forwards` }}></div>
                    ))}
                </div>

                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 py-16 relative z-10">
                    <div className="md:w-1/2 space-y-8 text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-green-100 text-green-800 rounded-full text-xs font-bold uppercase tracking-widest border border-green-200">
                            <span className="material-symbols-outlined text-sm">spa</span> Equilíbrio Natural
                        </div>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-slate-800 leading-tight">
                            A cura sutil das <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-700 italic">Flores</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed font-serif">"A doença é o resultado do conflito entre a alma e a mente." — Dr. Edward Bach</p>
                        <p className="text-slate-600">A Terapia Floral utiliza a essência energética das flores para harmonizar emoções, tratar medos e resgatar o equilíbrio interior, sem efeitos colaterais.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                             <a href="#jardim" className="px-8 py-4 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all shadow-lg text-center font-bold text-lg flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">filter_drama</span> Identificar Emoções
                             </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center relative">
                        <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <img alt="Florais" className="relative z-10 w-full max-w-md rounded-3xl shadow-2xl border-4 border-white object-cover hover:-translate-y-2 transition-transform duration-500" src="https://santanamendes.com.br/Sonia/Sonia_d6_img0.png" />
                    </div>
                </div>
             </header>

             {/* What Is It */}
             <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-6">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-sm">Terapia Integrativa</span>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800">O que são os Florais?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Os florais não são medicamentos químicos, fitoterápicos ou homeopatia. Eles são <strong>preparados vibracionais</strong>. Da mesma forma que uma música bonita pode alterar seu humor, a frequência energética de certas flores tem o poder de despertar virtudes adormecidas em nós.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                             {[
                                 { icon: 'child_care', title: 'Para Crianças' },
                                 { icon: 'pets', title: 'Para Animais' },
                                 { icon: 'face_4', title: 'Para Adultos' },
                                 { icon: 'pregnant_woman', title: 'Para Gestantes' }
                             ].map((item, i) => (
                                 <div key={i} className="text-center">
                                     <div className="w-16 h-16 bg-green-50 mx-auto rounded-full flex items-center justify-center text-green-600 mb-3">
                                         <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                                     </div>
                                     <h3 className="font-bold text-slate-700">{item.title}</h3>
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>
             </section>

             {/* Garden of Emotions */}
             <section className="py-24 bg-emerald-900 text-white relative overflow-hidden" id="jardim">
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-[150px] opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500 rounded-full blur-[150px] opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-4">O Jardim das Emoções</h2>
                    <p className="text-center text-green-100 max-w-2xl mx-auto mb-16">Como você se sente hoje? Clique em um sentimento para descobrir qual virtude as flores podem despertar em você.</p>
                    <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Object.entries(flowerData).map(([key, data]) => (
                                <button key={key} onClick={() => setSelectedEmotion(key)} className="bg-emerald-800/50 p-6 rounded-xl border border-emerald-700 hover:border-emerald-400 text-left transition-all hover:bg-emerald-800 group">
                                    <span className="material-symbols-outlined text-3xl text-emerald-300 mb-2 group-hover:scale-110 transition-transform">local_florist</span>
                                    <h3 className="font-bold text-lg capitalize text-emerald-100 group-hover:text-white">{data.from}</h3>
                                </button>
                            ))}
                        </div>
                        <div className="bg-white text-slate-800 rounded-2xl p-8 shadow-2xl flex flex-col justify-center items-center text-center min-h-[400px]">
                            {selectedEmotion ? (
                                <div className="animate-fade-in w-full">
                                    <div className="w-full h-48 mb-6 overflow-hidden rounded-xl relative">
                                         <img src={flowerData[selectedEmotion].img} alt="Floral" className="w-full h-full object-cover" />
                                         <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-4">
                                            <span className="text-white font-heading text-2xl font-bold tracking-wide">{flowerData[selectedEmotion].virtue}</span>
                                         </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-emerald-700 mb-2">{flowerData[selectedEmotion].title}</h3>
                                    <p className="text-slate-600 mb-6">{flowerData[selectedEmotion].desc}</p>
                                    <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                                        <p className="text-sm font-bold text-emerald-800">Transformação:</p>
                                        <div className="flex items-center justify-center gap-4 mt-2 text-slate-600">
                                            <span className="line-through decoration-red-400">{flowerData[selectedEmotion].from}</span>
                                            <span className="material-symbols-outlined text-emerald-500">arrow_right_alt</span>
                                            <span className="font-bold text-emerald-600">{flowerData[selectedEmotion].to}</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <span className="material-symbols-outlined text-6xl text-emerald-200 mb-4">local_florist</span>
                                    <h3 className="text-2xl font-bold text-slate-400">Selecione uma emoção</h3>
                                    <p className="text-slate-400 mt-2">Veja como a natureza pode te acolher.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
             </section>

             {/* How it works */}
             <section className="py-20 bg-green-50" id="como-funciona">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-center text-slate-800 mb-16">Como é o atendimento?</h2>
                    <div className="grid md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-green-200 z-0"></div>
                        {[
                            { step: 1, title: 'Escuta Ativa', icon: 'record_voice_over', text: 'Conversamos sobre o que você está sentindo, seus medos e o momento atual.' },
                            { step: 2, title: 'Seleção Floral', icon: 'potted_plant', text: 'Seleciono as essências que ressoam com a sua necessidade emocional.' },
                            { step: 3, title: 'Manipulação', icon: 'water_drop', text: 'Você recebe a prescrição para manipular seu frasco em uma farmácia.' }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md border-4 border-green-100 mb-6">
                                    <span className="material-symbols-outlined text-4xl text-green-600">{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.step}. {item.title}</h3>
                                <p className="text-slate-600 text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
             </section>

             {/* FAQ */}
             <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-heading font-bold text-center text-slate-800 mb-12">Perguntas Frequentes</h2>
                    <div className="space-y-4">
                        {[
                            { q: 'Tem efeito colateral ou contraindicação?', a: 'Não. Os florais são totalmente naturais e não possuem princípio ativo químico. Podem ser tomados por bebês e idosos.' },
                            { q: 'Quanto tempo demora para fazer efeito?', a: 'Varia. Algumas pessoas sentem alívio imediato, outras precisam de alguns meses para mudanças profundas.' },
                            { q: 'Substitui o tratamento médico?', a: 'Não. A Terapia Floral é uma Prática Integrativa e atua em conjunto com a medicina e psicologia.' }
                        ].map((faq, i) => (
                            <details key={i} className="group bg-slate-50 p-6 rounded-xl cursor-pointer">
                                <summary className="flex justify-between items-center font-bold text-slate-700 list-none">
                                    <span>{faq.q}</span>
                                    <span className="transition group-open:rotate-180 material-symbols-outlined">expand_more</span>
                                </summary>
                                <div className="text-slate-600 mt-4 text-sm leading-relaxed animate-fade-in">{faq.a}</div>
                            </details>
                        ))}
                    </div>
                </div>
             </section>

             {/* CTA */}
             <section className="py-20 bg-emerald-800 text-white relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Permita-se florescer</h2>
                    <p className="text-emerald-100 text-lg max-w-2xl mx-auto mb-10">Se as emoções estão pesadas, a natureza tem a leveza que você precisa.</p>
                    <div className="flex justify-center">
                        <a href="https://wa.me/5521992717217?text=Quero%20saber%20mais%20sobre%20Terapia%20Floral." target="_blank" rel="noreferrer" className="px-8 py-4 bg-white text-emerald-900 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-3">
                            <span className="material-symbols-outlined">chat</span> Agendar via WhatsApp
                        </a>
                    </div>
                </div>
             </section>
        </div>
    );
};

export default Florals;