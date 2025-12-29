
import React, { useState, useEffect } from 'react';
import { UserProfile } from '../App';

interface Props {
  onComplete: (data: UserProfile) => void;
}

const Onboarding: React.FC<Props> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    target: 'self',
    need: 'general'
  });

  useEffect(() => {
    setIsTyping(true);
    const timer = setTimeout(() => setIsTyping(false), 1200);
    return () => clearTimeout(timer);
  }, [step]);

  const updateProfile = (field: keyof UserProfile, value: string) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 0 && !profile.name.trim()) return;
    setStep(prev => prev + 1);
  };

  const finish = (need: UserProfile['need']) => {
    const finalData = { ...profile, need };
    onComplete(finalData);
  };

  return (
    <div className="min-h-screen bg-mesh flex items-center justify-center p-6 overflow-hidden">
      <div className="max-w-md w-full space-y-8">
        
        {/* Progress Bar */}
        <div className="flex gap-2 justify-center mb-12">
          {[0, 1, 2].map(i => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? 'w-12 bg-pink-500' : 'w-4 bg-slate-200'}`}></div>
          ))}
        </div>

        {/* Avatar Section */}
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-pink-300 blur-3xl opacity-30 rounded-full animate-pulse"></div>
            <img 
              src="https://santanamendes.com.br/Sonia/Sonia_d0_img0.png" 
              alt="Sônia Andrade" 
              className="relative w-28 h-28 rounded-full border-4 border-white shadow-2xl object-cover mx-auto"
            />
            <div className="absolute -bottom-1 -right-1 bg-white p-2 rounded-full shadow-lg">
               <span className="material-symbols-outlined text-green-500 text-lg">verified</span>
            </div>
          </div>
        </div>

        <div className="bg-white/60 backdrop-blur-xl border border-white p-8 rounded-[3rem] shadow-2xl shadow-pink-100/50">
          {step === 0 && (
            <div className="animate-slide-up space-y-6">
              <div className="space-y-2">
                <h1 className="text-2xl font-heading font-bold text-slate-800">
                  Olá, sou a Sônia.
                </h1>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Para que eu possa te acolher da melhor forma, como posso te chamar?
                </p>
              </div>
              
              <input 
                type="text" 
                autoFocus
                value={profile.name}
                onChange={(e) => updateProfile('name', e.target.value)}
                placeholder="Seu nome ou apelido"
                className="w-full p-5 bg-white border border-slate-100 rounded-2xl shadow-inner text-lg text-center focus:ring-2 focus:ring-pink-500 outline-none transition-all"
                onKeyPress={(e) => e.key === 'Enter' && handleNext()}
              />
              
              <button 
                onClick={handleNext}
                disabled={!profile.name.trim()}
                className="w-full bg-slate-800 text-white py-5 rounded-2xl font-bold text-lg shadow-xl active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
              >
                Continuar <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          )}

          {step === 1 && (
            <div className="animate-slide-up space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-heading font-bold text-slate-800">Prazer, {profile.name.split(' ')[0]}!</h2>
                <p className="text-slate-500 text-sm">O atendimento será para você ou para outra pessoa?</p>
              </div>

              <div className="grid gap-3">
                {[
                  { id: 'self', label: 'Para mim', icon: 'person' },
                  { id: 'child', label: 'Para meu filho(a)', icon: 'child_care' },
                  { id: 'elder', label: 'Para um idoso(a)', icon: 'elderly' }
                ].map(opt => (
                  <button 
                    key={opt.id}
                    onClick={() => { updateProfile('target', opt.id); handleNext(); }}
                    className="w-full p-5 bg-white border border-slate-50 rounded-2xl flex items-center justify-between hover:border-pink-500 hover:bg-pink-50 transition-all group shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-pink-500 group-hover:scale-110 transition-transform">{opt.icon}</span>
                      <span className="font-bold text-slate-700">{opt.label}</span>
                    </div>
                    <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-slide-up space-y-6">
              <div className="space-y-2 text-center">
                <h2 className="text-2xl font-heading font-bold text-slate-800">Último passo...</h2>
                <p className="text-slate-500 text-sm">Qual o principal desafio hoje?</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'emotional', label: 'Emocional / Traumas', icon: 'psychology', color: 'bg-pink-100 text-pink-600' },
                  { id: 'learning', label: 'Aprendizado / Escola', icon: 'school', color: 'bg-orange-100 text-orange-600' },
                  { id: 'focus', label: 'Foco / TDAH / Irlen', icon: 'bolt', color: 'bg-violet-100 text-violet-600' },
                  { id: 'career', label: 'Carreira / Futuro', icon: 'explore', color: 'bg-sky-100 text-sky-600' }
                ].map(opt => (
                  <button 
                    key={opt.id}
                    onClick={() => finish(opt.id as any)}
                    className="flex flex-col items-center justify-center p-6 bg-white border border-slate-50 rounded-[2rem] hover:border-pink-500 hover:bg-pink-50 transition-all group shadow-sm text-center"
                  >
                    <div className={`w-12 h-12 ${opt.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                      <span className="material-symbols-outlined">{opt.icon}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-700 leading-tight">{opt.label}</span>
                  </button>
                ))}
              </div>
              <button onClick={() => finish('general')} className="w-full text-center text-xs font-bold text-slate-400 uppercase tracking-widest pt-2 hover:text-pink-600">Apenas conhecer</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
