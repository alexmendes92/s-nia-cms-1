import React, { useState } from 'react';
import { Page } from '../App';

interface Props {
  navigate: (page: Page) => void;
  setOverlayColor?: (color: string) => void;
}

const Irlen: React.FC<Props> = () => {
    const [activeEffect, setActiveEffect] = useState<string | null>(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const toggleEffect = (effect: string) => {
        setActiveEffect(activeEffect === effect ? null : effect);
    };

    const questions = [
        "A luz do sol ou luzes fluorescentes incomodam seus olhos?",
        "Você sente dor de cabeça ou enjoo durante a leitura?",
        "As palavras parecem se mexer ou vibrar no papel?",
        "Você evita ler ou tem dificuldade de entender o que leu?",
        "Você se cansa muito rápido ao fazer tarefas visuais?",
        "Você tem dificuldade em julgar distâncias (ex: estacionar)?"
    ];

    const handleAnswer = (val: number) => {
        setScore(score + val);
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResult(false);
    };

    const getResult = () => {
        if (score >= 3) return { title: "Alta Probabilidade", color: "text-red-600", desc: "Seus sintomas indicam uma forte possibilidade de Síndrome de Irlen." };
        if (score >= 1) return { title: "Probabilidade Moderada", color: "text-yellow-600", desc: "Você apresenta alguns sinais que merecem investigação." };
        return { title: "Baixa Probabilidade", color: "text-green-600", desc: "Seus sintomas parecem estar dentro da normalidade." };
    };

    return (
        <div className="animate-fade-in">
             <header className="relative bg-slate-900 text-white overflow-hidden min-h-[70vh] flex items-center">
                <img alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-20" src="https://santanamendes.com.br/Sonia/Sonia_d4_img0.png"/>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-block px-4 py-2 border border-pink-500 text-pink-400 rounded-full text-xs font-bold tracking-widest uppercase mb-6 animate-pulse">
                        Escotópica / Síndrome de Irlen
                    </div>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                        O mundo através de <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">outros olhos.</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
                        Cerca de 14% da população sofre with distorções visuais que dificultam a leitura e o aprendizado.
                    </p>
                </div>
            </header>

            {/* Simulator */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-12 gap-12">
                        <div className="md:col-span-4 space-y-4">
                            <h2 className="text-3xl font-bold text-slate-800">Simulador de Sintomas</h2>
                            <p className="text-slate-600 text-sm mb-4">Clique nos botões para visualizar como uma pessoa com Irlen pode enxergar um texto.</p>
                            
                            {[
                                { id: 'vibrate', label: 'Movimentação', icon: 'vibration' },
                                { id: 'blur', label: 'Desfocamento', icon: 'blur_on' },
                                { id: 'rivers', label: 'Rios de Branco', icon: 'waves' },
                                { id: 'halo', label: 'Halo / Brilho', icon: 'flare' }
                            ].map(effect => (
                                <button 
                                    key={effect.id}
                                    onClick={() => toggleEffect(effect.id)}
                                    className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between ${activeEffect === effect.id ? 'border-pink-500 bg-pink-50' : 'border-slate-200 hover:border-pink-300'}`}
                                >
                                    <span className="font-bold text-slate-700">{effect.label}</span>
                                    <span className="material-symbols-outlined text-slate-400">{effect.icon}</span>
                                </button>
                            ))}
                            <button onClick={() => setActiveEffect(null)} className="w-full py-2 text-sm text-slate-400 underline">Parar Simulação</button>
                        </div>
                        <div className="md:col-span-8">
                             <div className="bg-white border shadow-2xl p-8 md:p-12 rounded-2xl min-h-[400px] relative overflow-hidden transition-all duration-300">
                                <div className="absolute inset-0 opacity-50 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/cream-paper.png')" }}></div>
                                <div className={`relative z-10 transition-all duration-500 text-black ${activeEffect ? `irlen-${activeEffect}` : ''}`}>
                                    <h3 className="text-3xl font-bold mb-6">A Leitura Desafiadora</h3>
                                    <p className="text-lg leading-relaxed mb-6">Imagine tentar ler um livro quando as letras parecem não ficar paradas na página. O contraste entre o preto e o branco cria uma verdadeira guerra visual.</p>
                                    <p className="text-lg leading-relaxed mb-6">Muitas crianças são diagnosticadas erroneamente como disléxicas ou com TDAH, quando na verdade sofrem de Estresse Visual.</p>
                                    <p className="text-lg leading-relaxed">A luz fluorescente e telas de computador pioram drasticamente os sintomas.</p>
                                </div>
                                {activeEffect && (
                                    <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase animate-pulse">
                                        Simulando: {activeEffect}
                                    </div>
                                )}
                             </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explainer Cards */}
            <section className="py-20 bg-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-center mb-12">Não é "vista", é cérebro.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Hiperatividade Visual', icon: 'psychology', color: 'text-blue-600', bg: 'bg-blue-100', desc: 'O cérebro reage de forma exagerada à luz, processando-a de maneira desorganizada. Isso consome muita energia e causa falhas na interpretação da imagem.' },
                            { title: 'Fotofobia Seletiva', icon: 'light_mode', color: 'text-yellow-600', bg: 'bg-yellow-100', desc: 'Não é só a luz do sol. Luzes fluorescentes, faróis de carros à noite e o brilho de telas (computador/celular) são grandes vilões.' },
                            { title: 'Impacto na Escola', icon: 'school', color: 'text-green-600', bg: 'bg-green-100', desc: 'Leitura lenta, pular linhas, não entender o que lê e evitar ler a todo custo são sinais clássicos, muitas vezes confundidos com "preguiça".' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group cursor-default">
                                <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <span className={`material-symbols-outlined text-4xl ${item.color}`}>{item.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quiz */}
            <section className="py-24 bg-white" id="teste">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-pink-600 font-bold tracking-wider text-sm uppercase">Autoavaliação</span>
                        <h2 className="text-4xl font-heading font-bold text-slate-800 mt-2">Teste de Rastreio Rápido</h2>
                        <p className="text-slate-500 mt-4">Responda honestamente para verificar a probabilidade.</p>
                    </div>
                    <div className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden text-center min-h-[300px] flex flex-col justify-center items-center">
                        {!showResult ? (
                            <>
                                <h3 className="text-2xl font-bold text-slate-800 mb-8">{questions[currentQuestion]}</h3>
                                <div className="flex gap-4 w-full max-w-md">
                                    <button onClick={() => handleAnswer(0)} className="flex-1 py-4 rounded-xl border-2 border-slate-300 text-slate-500 font-bold hover:bg-slate-100 transition-colors">Não</button>
                                    <button onClick={() => handleAnswer(1)} className="flex-1 py-4 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 shadow-lg hover:scale-105 transition-all">Sim</button>
                                </div>
                                <div className="w-full bg-slate-200 h-2 mt-8 rounded-full overflow-hidden">
                                    <div className="bg-pink-500 h-full transition-all duration-300" style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}></div>
                                </div>
                            </>
                        ) : (
                            <div className="animate-fade-in">
                                <h3 className={`text-3xl font-bold mb-4 ${getResult().color}`}>{getResult().title}</h3>
                                <p className="text-lg text-slate-600 mb-8">{getResult().desc}</p>
                                <a href="https://wa.me/5521992717217?text=Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20de%20Irlen." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all shadow-lg mr-4">
                                   <span className="material-symbols-outlined">calendar_month</span> Agendar Avaliação
                                </a>
                                <button onClick={resetQuiz} className="text-slate-400 underline mt-4 block mx-auto">Refazer Teste</button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Solution / Overlays */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black"></div>
                <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-heading font-bold mb-6">A Solução: Filtros Espectrais</h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            A boa notícia é que a Síndrome de Irlen tem tratamento imediato. O uso de sobreposições coloridas (overlays) ou óculos com filtros espectrais específicos reequilibra a entrada de luz no cérebro.
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed mb-8">
                            <strong>Experimente agora:</strong> Use os botões coloridos no topo da página (na barra de navegação) para aplicar um filtro em todo este site. Perceba como, para muitas pessoas, uma simples cor de fundo reduz o brilho e "segura" as letras no lugar.
                        </p>
                        <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="material-symbols-outlined text-yellow-400 text-3xl">light_mode</span>
                                {/* Fix: Changed 'class' to 'className' to resolve TypeScript error on line 182 */}
                                <h4 className="font-bold text-xl">Dica Prática</h4>
                            </div>
                            <p className="text-sm opacity-80">
                                No computador ou celular, ative o modo "Night Shift" ou "Filtro de Luz Azul". Para papel, réguas coloridas transparentes podem mudar a vida escolar de uma criança.
                            </p>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative">
                            <img alt="Irlen Overlays" className="rounded-xl shadow-2xl w-full max-w-md transform rotate-3 hover:rotate-0 transition-transform duration-500" src="https://santanamendes.com.br/Sonia/Sonia_d4_img1.png" />
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-500/30 rounded-full blur-2xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Irlen;