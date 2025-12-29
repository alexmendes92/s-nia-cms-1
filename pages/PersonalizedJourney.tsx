
import React from 'react';
import { Page, UserProfile } from '../App';

interface Props {
  navigate: (page: Page) => void;
  profile: UserProfile | null;
}

const PersonalizedJourney: React.FC<Props> = ({ navigate, profile }) => {
  if (!profile) return null;

  const getThemeColor = () => {
    switch(profile.need) {
      case 'learning': return 'from-orange-500 to-amber-600';
      case 'emotional': return 'from-pink-500 to-rose-600';
      case 'focus': return 'from-violet-500 to-purple-600';
      case 'career': return 'from-sky-500 to-blue-600';
      default: return 'from-slate-700 to-slate-900';
    }
  };

  const getSteps = () => {
    const common = {
      step1: { title: "Acolhimento Inicial", desc: "Uma sessão para nos conhecermos e mapearmos profundamente sua história." },
      step3: { title: "Evolução & Alta", desc: "Acompanhamento periódico para consolidar os ganhos e garantir autonomia." }
    };

    switch(profile.need) {
      case 'learning': return { ...common, step2: { title: "Intervenção Cognitiva", desc: "Jogos e técnicas psicopedagógicas para destravar o aprendizado do seu filho." } };
      case 'emotional': return { ...common, step2: { title: "Mergulho Psicanalítico", desc: "Análise profunda das raízes das suas angústias para ressignificar traumas." } };
      case 'focus': return { ...common, step2: { title: "Rastreio & Estratégia", desc: "Avaliação de Irlen ou TDAH com aplicação de filtros e rotinas de foco." } };
      case 'career': return { ...common, step2: { title: "Projeto de Vida", desc: "Mapeamento de competências e testes vocacionais para sua transição." } };
      default: return { ...common, step2: { title: "Plano Personalizado", desc: "Construção de uma abordagem híbrida entre psicanálise e neurociência." } };
    }
  };

  const steps = getSteps();

  return (
    <div className="animate-fade-in bg-slate-50 min-h-screen pb-24">
      {/* Hero Header */}
      <div className={`h-[50vh] bg-gradient-to-br ${getThemeColor()} relative flex items-center justify-center text-white px-6 overflow-hidden`}>
          <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="max-w-2xl text-center space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-[0.3em] bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full inline-block mb-4">Seu Plano de Transformação</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold italic">{profile.name.split(' ')[0]}, seu caminho começa aqui.</h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">Preparei um guia exclusivo baseado no que você compartilha comigo hoje.</p>
          </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-20">
          <div className="grid lg:grid-cols-3 gap-8">
              
              {/* Profile Context */}
              <div className="lg:col-span-2 space-y-8">
                  <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-8 items-center">
                      <div className="shrink-0">
                          <img src="https://santanamendes.com.br/Sonia/Sonia_d0_img0.png" className="w-32 h-32 rounded-3xl object-cover shadow-lg border-4 border-white" />
                      </div>
                      <div className="space-y-4">
                          <h2 className="text-2xl font-bold text-slate-800">Uma mensagem para você:</h2>
                          <p className="text-slate-600 leading-relaxed italic">
                            "{profile.name.split(' ')[0]}, entendo que você busca apoio para {profile.need === 'learning' ? 'o desenvolvimento escolar' : profile.need === 'emotional' ? 'suas questões emocionais' : 'seus desafios atuais'}. Meu compromisso é criar um espaço seguro para que você ou seu familiar possa se desenvolver com dignidade e leveza."
                          </p>
                          <div className="flex gap-4">
                              <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-bold uppercase">Perfil: {profile.target === 'self' ? 'Pessoal' : profile.target === 'child' ? 'Infantil' : 'Sênior'}</span>
                              <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-bold uppercase">Meta: {profile.need}</span>
                          </div>
                      </div>
                  </div>

                  {/* The Journey Timeline */}
                  <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl border border-slate-100">
                      <h3 className="text-2xl font-bold text-slate-800 mb-12 flex items-center gap-3">
                        <span className="material-symbols-outlined text-pink-500">timeline</span>
                        Sua Jornada Conosco
                      </h3>
                      
                      <div className="space-y-12 relative">
                          <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-slate-100"></div>
                          
                          {[
                            { num: "01", ...steps.step1, icon: "waving_hand" },
                            { num: "02", ...steps.step2, icon: "psychology" },
                            { num: "03", ...steps.step3, icon: "verified" }
                          ].map((s, i) => (
                            <div key={i} className="flex gap-8 relative group">
                                <div className="w-14 h-14 bg-white border-2 border-slate-100 rounded-2xl flex items-center justify-center shrink-0 z-10 group-hover:border-pink-500 transition-colors shadow-sm">
                                    <span className="material-symbols-outlined text-slate-400 group-hover:text-pink-500 transition-colors">{s.icon}</span>
                                </div>
                                <div className="pt-2">
                                    <span className="text-pink-500 font-bold text-xs uppercase tracking-widest">{s.num} — Fase</span>
                                    <h4 className="text-xl font-bold text-slate-800 mt-1">{s.title}</h4>
                                    <p className="text-slate-500 mt-2 text-sm leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                          ))}
                      </div>
                  </div>
              </div>

              {/* Sidebar Action */}
              <div className="space-y-6">
                  <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500 rounded-full blur-[60px] opacity-20"></div>
                      <h3 className="text-2xl font-bold mb-6">Próximo Passo</h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-8">
                        Baseado no seu perfil, o ideal é iniciarmos com uma <span className="text-white font-bold">Avaliação Preliminar</span> de 50 minutos.
                      </p>
                      <button 
                        onClick={() => navigate(Page.APPOINTMENT)}
                        className="w-full bg-pink-600 hover:bg-pink-700 text-white py-5 rounded-2xl font-bold shadow-xl shadow-pink-900/20 active:scale-95 transition-all flex items-center justify-center gap-3"
                      >
                        <span className="material-symbols-outlined">calendar_month</span>
                        Agendar Agora
                      </button>
                      <p className="text-center text-[10px] text-slate-500 mt-4 uppercase tracking-widest">Disponível em Miguel Pereira e Ilha</p>
                  </div>

                  <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                      <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-500">video_library</span>
                        Material de Apoio
                      </h4>
                      <div className="space-y-4">
                          <div className="p-4 bg-slate-50 rounded-2xl hover:bg-pink-50 cursor-pointer transition-colors group">
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Artigo</p>
                              <p className="text-sm font-bold text-slate-700 group-hover:text-pink-600 transition-colors">Como lidar com a ansiedade no dia a dia</p>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-2xl hover:bg-pink-50 cursor-pointer transition-colors group">
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Vídeo</p>
                              <p className="text-sm font-bold text-slate-700 group-hover:text-pink-600 transition-colors">O que é psicopedagogia clínica?</p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>

          {/* Footer Back Button */}
          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate(Page.HOME)}
              className="px-8 py-3 bg-white text-slate-400 rounded-full text-xs font-bold uppercase tracking-widest border border-slate-200 hover:text-pink-600 hover:border-pink-200 transition-all"
            >
              Voltar para o Início
            </button>
          </div>
      </div>
    </div>
  );
};

export default PersonalizedJourney;
