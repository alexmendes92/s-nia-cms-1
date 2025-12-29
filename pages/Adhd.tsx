import React, { useState, useEffect } from 'react';
import { Page } from '../App';
import * as Tone from 'tone';

interface Props {
  navigate: (page: Page) => void;
}

const Adhd: React.FC<Props> = () => {
    const [isSimulating, setIsSimulating] = useState(false);
    const [bubbles, setBubbles] = useState<{id: number, text: string, left: number, duration: number}[]>([]);
    
    // Timer Logic
    const [timeLeft, setTimeLeft] = useState(1500);
    const [timerRunning, setTimerRunning] = useState(false);

    // Tabs State
    const [activeTab, setActiveTab] = useState<'desatento' | 'hiperativo' | 'combinado'>('desatento');

    // Flip Cards State
    const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

    useEffect(() => {
        let interval: any;
        if (timerRunning && timeLeft > 0) {
            interval = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
        } else if (timeLeft === 0) {
            setTimerRunning(false);
            const synth = new Tone.Synth().toDestination();
            synth.triggerAttackRelease("C5", "8n");
        }
        return () => clearInterval(interval);
    }, [timerRunning, timeLeft]);

    const formatTime = (seconds: number) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // Simulation Logic
    useEffect(() => {
        if (!isSimulating) {
            setBubbles([]);
            return;
        }

        const thoughts = ["Olha um passarinho!", "Esqueci a chave?", "Que barulho é esse?", "Tô com fome...", "Boreeed...", "E se eu fosse astronauta?", "Notificação!", "O que eu tava lendo?"];
        
        const interval = setInterval(() => {
            const newBubble = {
                id: Date.now(),
                text: thoughts[Math.floor(Math.random() * thoughts.length)],
                left: Math.random() * 80 + 10,
                duration: Math.random() * 3 + 4
            };
            setBubbles(prev => [...prev, newBubble]);
            
            // Cleanup
            setTimeout(() => {
                setBubbles(prev => prev.filter(b => b.id !== newBubble.id));
            }, newBubble.duration * 1000);
        }, 800);

        return () => clearInterval(interval);
    }, [isSimulating]);

    const toggleFlip = (index: number) => {
        setFlippedCards(prev => ({...prev, [index]: !prev[index]}));
    }

    return (
        <div className="animate-fade-in bg-violet-50">
            {/* Hero */}
            <header className="relative bg-violet-900 text-white overflow-hidden min-h-[85vh] flex items-center">
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900 to-transparent z-10"></div>
                <div className="absolute inset-0 opacity-30">
                    <img src="https://santanamendes.com.br/Sonia/Sonia_d4_img0.png" className="w-full h-full object-cover" alt="bg"/>
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 space-y-6 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/30 border border-violet-400/50 rounded-full text-xs font-bold uppercase tracking-widest text-violet-200">
                                <span className="material-symbols-outlined text-sm animate-pulse">electric_bolt</span> Neurodivergência
                            </div>
                            <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight">Uma mente a <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">mil por hora.</span></h1>
                            <p className="text-xl text-violet-100">O TDAH não é apenas sobre "falta de atenção". É sobre uma atenção que funciona de forma diferente.</p>
                            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                                <button onClick={() => { setIsSimulating(true); document.getElementById('simulation-area')?.scrollIntoView({ behavior: 'smooth' }) }} className="px-8 py-4 bg-yellow-500 text-violet-900 rounded-full font-bold hover:bg-yellow-400 transition-all flex items-center gap-2 justify-center">
                                    <span className="material-symbols-outlined">play_circle</span> Simular Experiência
                                </button>
                                <a href="#tipos" className="px-8 py-4 border border-violet-400 text-violet-200 rounded-full font-bold hover:bg-violet-800 transition-all text-center">Conhecer os Tipos</a>
                            </div>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img alt="Cérebro TDAH" className="w-full max-w-md rounded-full shadow-2xl brain-pulse object-cover aspect-square border-4 border-violet-500/30" src="https://santanamendes.com.br/Sonia/Sonia_d5_img0.png" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Simulation Overlay */}
            {isSimulating && (
                <div id="simulation-area" className="fixed inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center p-4 text-white overflow-hidden">
                    <div className="relative z-20 max-w-2xl bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center">
                        <h2 className="text-2xl font-bold mb-4">Tente ler este texto:</h2>
                        <p className="mb-4">O Transtorno do Déficit de Atenção com Hiperatividade é uma disfunção neurobiológica. Isso afeta as funções executivas: planejar, focar e controlar impulsos.</p>
                        <p>Não é falta de vontade. O cérebro busca constantemente estímulos para compensar a baixa atividade dopaminérgica.</p>
                        <button onClick={() => setIsSimulating(false)} className="mt-8 px-6 py-3 bg-red-500 hover:bg-red-600 rounded-full font-bold">Parar Simulação</button>
                    </div>
                    {bubbles.map(b => (
                        <div key={b.id} className="thought-bubble" style={{ left: `${b.left}%`, animation: `floatUp ${b.duration}s linear forwards` }}>
                            {b.text}
                        </div>
                    ))}
                </div>
            )}

            {/* Explainer */}
            <section className="py-20 bg-white" id="sobre">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-heading font-bold text-slate-800 mb-6">O Maestro Desapareceu?</h2>
                        <p className="text-lg text-slate-600 mb-6">Imagine seu cérebro como uma orquestra. As Funções Executivas são o maestro. No cérebro TDAH, o maestro às vezes sai para um café, e a orquestra toca sozinha.</p>
                        <div className="space-y-3">
                             <div className="flex items-center gap-4 p-4 bg-violet-50 rounded-xl border border-violet-100 hover:border-violet-300 transition-colors">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-violet-600 shadow-sm"><span className="material-symbols-outlined">memory</span></div>
                                <div><h4 className="font-bold text-slate-800">Memória de Trabalho</h4><p className="text-sm text-slate-500">"O que eu vim fazer na cozinha mesmo?"</p></div>
                             </div>
                             <div className="flex items-center gap-4 p-4 bg-violet-50 rounded-xl border border-violet-100 hover:border-violet-300 transition-colors">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-violet-600 shadow-sm"><span className="material-symbols-outlined">filter_center_focus</span></div>
                                <div><h4 className="font-bold text-slate-800">Autorregulação</h4><p className="text-sm text-slate-500">Dificuldade em frear impulsos e emoções.</p></div>
                             </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                         <img alt="Maestro" className="rounded-2xl shadow-xl w-full max-w-md transform rotate-2 hover:rotate-0 transition-all duration-500" src="https://santanamendes.com.br/Sonia/Sonia_d5_img1.png" />
                    </div>
                </div>
            </section>

            {/* Types of ADHD */}
            <section className="py-20 bg-violet-50" id="tipos">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-center text-slate-800 mb-12">Nem todo TDAH é hiperativo</h2>
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row min-h-[500px]">
                         <div className="md:w-1/3 bg-slate-900 p-8 flex flex-col justify-center gap-4">
                            {[
                                { id: 'desatento', label: 'Predominantemente Desatento', sub: '"Cabeça na lua"' },
                                { id: 'hiperativo', label: 'Hiperativo / Impulsivo', sub: '"Motorzinho ligado"' },
                                { id: 'combinado', label: 'Tipo Combinado', sub: 'O mais comum' }
                            ].map(type => (
                                <button 
                                    key={type.id}
                                    onClick={() => setActiveTab(type.id as any)}
                                    className={`text-left p-4 rounded-xl hover:text-white hover:bg-white/10 transition-all border-l-4 ${activeTab === type.id ? 'border-yellow-400 text-white bg-white/10' : 'border-transparent text-white/70'}`}
                                >
                                    <h3 className="font-bold text-lg">{type.label}</h3>
                                    <p className="text-xs opacity-60 mt-1">{type.sub}</p>
                                </button>
                            ))}
                         </div>
                         <div className="md:w-2/3 p-10 flex flex-col justify-center">
                            {activeTab === 'desatento' && (
                                <div className="animate-fade-in">
                                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6"><span className="material-symbols-outlined text-4xl">cloud</span></div>
                                    <h3 className="text-3xl font-bold text-slate-800 mb-4">O Sonhador</h3>
                                    <p className="text-slate-600 text-lg mb-6">Muitas vezes não diagnosticado na infância (especialmente em meninas) porque não incomoda a sala de aula. O caos é interno.</p>
                                    <ul className="space-y-3">
                                        {['Comete erros por descuido', 'Perde objetos com frequência', 'Esquece compromissos diários'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700"><span className="material-symbols-outlined text-blue-500">check</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {activeTab === 'hiperativo' && (
                                <div className="animate-fade-in">
                                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 mb-6"><span className="material-symbols-outlined text-4xl">directions_run</span></div>
                                    <h3 className="text-3xl font-bold text-slate-800 mb-4">A Energia Pura</h3>
                                    <p className="text-slate-600 text-lg mb-6">A necessidade de movimento é física. A impulsividade pode levar a interromper conversas ou tomar decisões precipitadas.</p>
                                    <ul className="space-y-3">
                                        {['Inquietude (mexe mãos e pés)', 'Fala excessivamente', 'Dificuldade em esperar sua vez'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700"><span className="material-symbols-outlined text-yellow-500">check</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            {activeTab === 'combinado' && (
                                <div className="animate-fade-in">
                                    <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-violet-600 mb-6"><span className="material-symbols-outlined text-4xl">all_inclusive</span></div>
                                    <h3 className="text-3xl font-bold text-slate-800 mb-4">O Mix Intenso</h3>
                                    <p className="text-slate-600 text-lg mb-6">Apresenta seis ou mais sintomas de desatenção e seis ou mais de hiperatividade/impulsividade. É a apresentação mais comum na clínica.</p>
                                    <ul className="space-y-3">
                                        {['Alterna entre foco intenso e distração', 'Procrastinação ansiosa', 'Criatividade explosiva mas dificuldade de execução'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-slate-700"><span className="material-symbols-outlined text-violet-500">check</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                         </div>
                    </div>
                </div>
            </section>

            {/* Reframing (Superpowers) */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold text-center text-slate-800 mb-4">O Outro Lado da Moeda</h2>
                    <p className="text-center text-slate-500 mb-12">Clique nos cartões para ressignificar os sintomas.</p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { neg: 'Impulsividade', iconNeg: 'radio_button_unchecked', pos: 'Espontaneidade', iconPos: 'rocket_launch', desc: 'Coragem para assumir riscos e autenticidade.' },
                            { neg: 'Distração', iconNeg: 'blur_on', pos: 'Criatividade', iconPos: 'lightbulb', desc: 'Pensamento "fora da caixa". Conexões únicas.' },
                            { neg: 'Hiperfoco', iconNeg: 'center_focus_weak', pos: 'Maestria', iconPos: 'school', desc: 'Capacidade de aprendizado profundo quando o tema apaixona.' }
                        ].map((item, idx) => (
                            <div key={idx} className="group h-64 perspective-1000 cursor-pointer" onClick={() => toggleFlip(idx)}>
                                <div className={`inner-card relative w-full h-full text-center transition-transform duration-700 transform-style-3d shadow-xl rounded-2xl ${flippedCards[idx] ? 'rotate-y-180' : ''}`}>
                                    {/* Front */}
                                    <div className="absolute inset-0 backface-hidden bg-slate-100 rounded-2xl flex flex-col items-center justify-center p-6 border-2 border-slate-200">
                                        <span className="material-symbols-outlined text-5xl text-red-400 mb-4">{item.iconNeg}</span>
                                        <h3 className="text-2xl font-bold text-slate-600">{item.neg}</h3>
                                    </div>
                                    {/* Back */}
                                    <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-2xl flex flex-col items-center justify-center p-6 rotate-y-180">
                                        <span className="material-symbols-outlined text-5xl text-yellow-300 mb-4">{item.iconPos}</span>
                                        <h3 className="text-2xl font-bold mb-2">{item.pos}</h3>
                                        <p className="text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pomodoro */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold mb-8">Ferramenta de Foco</h2>
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-3xl inline-block">
                        <div className="text-8xl font-bold font-mono mb-8 text-yellow-400">{formatTime(timeLeft)}</div>
                        <div className="flex justify-center gap-4">
                            <button onClick={() => { Tone.start(); setTimerRunning(!timerRunning); }} className={`w-16 h-16 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg ${timerRunning ? 'bg-yellow-500' : 'bg-green-500'}`}>
                                <span className="material-symbols-outlined text-3xl">{timerRunning ? 'pause' : 'play_arrow'}</span>
                            </button>
                             <button onClick={() => { setTimerRunning(false); setTimeLeft(1500); }} className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                                <span className="material-symbols-outlined text-3xl">refresh</span>
                            </button>
                        </div>
                        <p className="mt-4 opacity-60">Método Pomodoro: 25 min de foco / 5 min de descanso</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Adhd;