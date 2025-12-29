import React, { useState } from 'react';
import { Page } from '../App';

interface Props {
  navigate: (page: Page) => void;
}

const Psychoanalysis: React.FC<Props> = () => {
  const [activeTab, setActiveTab] = useState('ansiedade');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = [
    { question: 'Quanto tempo dura o tratamento?', answer: 'A psicanálise não trabalha com prazos fixos, pois respeita o tempo subjetivo de cada paciente. Alguns processos são breves, focados em questões pontuais, enquanto outros podem durar anos.' },
    { question: 'Qual a diferença para a psicologia tradicional?', answer: 'Enquanto muitas terapias focam na mudança imediata de comportamento ou no alívio rápido de sintomas (foco na consciência), a psicanálise investiga as causas inconscientes e profundas.' },
    { question: 'Eu preciso deitar no divã?', answer: 'Não necessariamente. O uso do divã é uma ferramenta clássica que ajuda o paciente a relaxar, mas as sessões podem perfeitamente ocorrer "face a face".' },
    { question: 'Como são os atendimentos?', answer: 'Os atendimentos ocorrem semanalmente. Ofereço modalidades presenciais e também atendimento online, mantendo o mesmo rigor ético e técnico.' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <header className="relative bg-white overflow-hidden">
        <div className="absolute inset-0" style={{
            backgroundColor: '#fce7f3',
            backgroundImage: 'radial-gradient(#db2777 0.5px, transparent 0.5px), radial-gradient(#db2777 0.5px, #fce7f3 0.5px)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 10px 10px',
            opacity: 0.3
        }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10"></div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-20">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-bold uppercase tracking-widest">
                        <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span> Serviço Clínico
                    </div>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-slate-800 leading-tight">
                        Acompanhamento <span className="text-pink-600 italic">Psicanalítico</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                        Um espaço de escuta qualificada onde a fala ganha novos sentidos. Descubra como a psicanálise pode ajudar a transformar angústias em movimento e autoconhecimento.
                    </p>
                     <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                       <a href="https://wa.me/5521992717217?text=Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20psican%C3%A1lise." target="_blank" rel="noreferrer" className="px-8 py-4 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-all shadow-lg text-center font-semibold text-lg flex items-center justify-center gap-2 group">
                        Agendar Sessão
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                       </a>
                       <a href="#como-funciona" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-lg hover:border-pink-300 hover:text-pink-600 transition-all shadow-sm text-center font-semibold text-lg">
                        Como funciona?
                       </a>
                      </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <div className="relative w-full max-w-md">
                        <img alt="Ilustração metafórica" className="w-full h-auto rounded-full shadow-2xl border-8 border-white animate-float object-cover aspect-square bg-white" src="https://santanamendes.com.br/Sonia/Sonia_d1_img0.png" />
                    </div>
                </div>
            </div>
        </div>
      </header>

      {/* Explanation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-800 mb-6">Um encontro com a sua verdade</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                    Diferente de uma conversa comum, o acompanhamento psicanalítico oferece uma <strong>escuta técnica e isenta de julgamentos</strong>. É um convite para olhar para dentro, revisitando histórias, traumas e desejos que, muitas vezes, operam em silêncio no nosso inconsciente.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { icon: 'record_voice_over', title: 'A Associação Livre', text: 'A regra fundamental: fale tudo o que vier à mente. Sem filtro. É na liberdade da fala que surgem as conexões inesperadas.' },
                    { icon: 'self_improvement', title: 'Singularidade', text: 'Não existem receitas prontas. Cada sujeito é único, e a análise respeita o tempo e a história de cada um.' },
                    { icon: 'psychology_alt', title: 'Ressignificação', text: 'O objetivo não é apagar o passado, mas dar a ele um novo lugar e sentido, permitindo que você deixe de repetir padrões dolorosos.' }
                ].map((item, i) => (
                    <div key={i} className="bg-pink-50/50 p-8 rounded-2xl border border-pink-100 hover:shadow-lg transition-all duration-300">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-pink-600 mb-6 shadow-sm">
                            <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                        <p className="text-slate-600">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 bg-slate-50 border-y border-slate-200" id="como-funciona">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-heading font-bold text-center text-slate-800 mb-12">Quando procurar análise?</h2>
            <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
                <div className="md:w-1/3 flex flex-col gap-2">
                    {[
                        { id: 'ansiedade', label: 'Ansiedade e Angústia' },
                        { id: 'repeticao', label: 'Padrões de Repetição' },
                        { id: 'luto', label: 'Luto e Perdas' },
                        { id: 'relacionamentos', label: 'Conflitos Relacionais' }
                    ].map(tab => (
                        <button 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`text-left px-6 py-4 rounded-xl font-bold text-slate-600 transition-all border-l-4 ${activeTab === tab.id ? 'bg-white shadow-sm border-pink-500 text-pink-600' : 'border-transparent hover:bg-white hover:shadow-md'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className="md:w-2/3 bg-white rounded-2xl p-8 shadow-md min-h-[400px] relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-64 h-64 opacity-10 pointer-events-none">
                        <img alt="" className="w-full h-full object-cover rounded-bl-full" src="https://santanamendes.com.br/Sonia/Sonia_d1_img1.png" />
                    </div>
                    {activeTab === 'ansiedade' && (
                        <div className="animate-fade-in">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-4xl text-pink-500">sentiment_stressed</span>
                                <h3 className="text-2xl font-bold text-slate-800">Ansiedade e Angústia</h3>
                            </div>
                            <p className="text-slate-600 text-lg mb-6">A ansiedade muitas vezes é um sinal de alerta de que algo no nosso desejo ou na nossa vida não vai bem. Na análise, tentamos entender o que esse sintoma diz.</p>
                            <ul className="space-y-3">
                                {['Sensação constante de perigo iminente.', 'Dificuldade de estar no presente.', 'Sintomas físicos sem causa médica aparente.'].map((li, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700">
                                        <span className="material-symbols-outlined text-green-500">check_circle</span> {li}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === 'repeticao' && (
                        <div className="animate-fade-in">
                             <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-4xl text-pink-500">sync_problem</span>
                                <h3 className="text-2xl font-bold text-slate-800">Padrões de Repetição</h3>
                            </div>
                            <p className="text-slate-600 text-lg mb-6">"Por que isso sempre acontece comigo?" Se você sente que vive sempre as mesmas situações, isso pode ser uma repetição inconsciente.</p>
                            <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                                <p className="italic text-slate-700">"Aquilo que não se pode lembrar, repete-se na conduta." - Freud</p>
                            </div>
                        </div>
                    )}
                    {activeTab === 'luto' && (
                        <div className="animate-fade-in">
                             <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-4xl text-pink-500">broken_image</span>
                                <h3 className="text-2xl font-bold text-slate-800">Luto e Perdas</h3>
                            </div>
                            <p className="text-slate-600 text-lg mb-6">O luto não é apenas sobre a morte de alguém. É sobre perder um emprego, um sonho ou uma fase da vida.</p>
                            <p className="text-slate-600">Oferecemos um espaço seguro para que a dor possa ser dita, chorada e transformada.</p>
                        </div>
                    )}
                     {activeTab === 'relacionamentos' && (
                        <div className="animate-fade-in">
                             <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-4xl text-pink-500">group_work</span>
                                <h3 className="text-2xl font-bold text-slate-800">Conflitos Relacionais</h3>
                            </div>
                            <p className="text-slate-600 text-lg mb-6">Dificuldades em estabelecer limites, dependência emocional ou conflitos familiares constantes são temas centrais na clínica.</p>
                            <p className="text-slate-600">Ao compreender seu posicionamento frente ao outro, você ganha autonomia.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-64 bg-fixed bg-center bg-cover relative" style={{ backgroundImage: 'url("https://santanamendes.com.br/Sonia/Sonia_d1_img0.png")' }}>
          <div className="absolute inset-0 bg-slate-900/70 flex items-center justify-center">
               <p className="text-white text-2xl md:text-3xl font-heading font-bold text-center px-4">
                "O inconsciente é estruturado como uma linguagem."
                <br />
                <span className="text-lg font-sans font-normal mt-2 block opacity-80">- Jacques Lacan</span>
               </p>
          </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-center text-slate-800 mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-pink-50 transition-colors text-left focus:outline-none"
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="font-bold text-slate-700">{faq.question}</span>
                  <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {openFaq === idx && (
                  <div className="px-5 py-4 bg-white text-slate-600 border-t border-slate-100 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800 text-white relative overflow-hidden" id="agendamento">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Dê o primeiro passo</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
            Se você sente que é hora de cuidar de si e compreender suas questões mais profundas, estou à disposição para iniciar essa jornada com você.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-bold text-lg shadow-lg hover:shadow-green-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3" href="https://wa.me/5521992717217?text=Gostaria%20de%20agendar%20uma%20sess%C3%A3o." target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">chat</span> Agendar pelo WhatsApp
            </a>
            <a className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3" href="mailto:soniarosa.psi@email.com">
              <span className="material-symbols-outlined">mail</span> Enviar E-mail
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-400">Atendimentos Particulares | Consultar convênios para reembolso</p>
        </div>
      </section>
    </div>
  );
};

export default Psychoanalysis;