import React, { useState } from 'react';
import { Search, CheckCircle2, Instagram } from 'lucide-react';

const Logo = ({ className = "w-auto h-16" }: { className?: string }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <img src="/logo%20space.png" alt="Space Supplements" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" />
  </div>
);

export default function App() {
  const [leadData, setLeadData] = useState('');

  return (
    <div className="min-h-screen relative font-display flex flex-col items-center justify-center overflow-hidden bg-space-black selection:bg-brand-purple selection:text-white">
      {/* Background Image & Overlays */}
      <div 
        className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.png')" }}
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-space-black/80 via-space-black/60 to-space-black/90"></div>
      
      {/* Purple Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-purple/20 blur-[120px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-magenta/10 blur-[150px] rounded-full z-0 pointer-events-none"></div>

      {/* Decorative Text overlaying background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center opacity-[0.03] z-0 pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-black italic whitespace-nowrap tracking-tighter text-white">SPACE SPACE</span>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4 py-8 md:py-12 text-center mt-10 md:mt-20">
        
        {/* Logo */}
        <div className="flex flex-col items-center gap-2 mb-10">
          <Logo className="h-20 md:h-24 w-auto" />
        </div>

        {/* Headlines */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-black uppercase tracking-tighter text-brand-purple mb-4 leading-none" style={{ textShadow: '0 0 40px rgba(106, 13, 252, 0.4)' }}>
          Expandindo seu horizonte.
        </h1>
        <h2 className="text-sm md:text-xl font-light uppercase tracking-widest text-white mb-16 px-4">
          Seu combustível ideal está sendo formulado por especialistas.
        </h2>

        {/* Sub-headlines */}
        <div className="flex flex-col items-center gap-4 mb-16 px-4 max-w-4xl">
          <p className="text-lg md:text-3xl font-bold uppercase tracking-wide text-white leading-snug">
            O primeiro lote de creatina em gomas<br className="hidden md:block"/> está em fase de fabricação.
          </p>
        </div>

        {/* Flavors Section */}
        <div className="w-full max-w-5xl mb-24 grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {[
            {
              title: "UVA CÓSMICA",
              desc: "O poder clássico da uva pura com absorção ultra-rápida.",
              accent: "from-brand-purple to-transparent",
              color: "text-[#A855F7]" // using tailwind color directly so we don't rely only on config
            },
            {
              title: "MAÇÃ VERDE",
              desc: "Refrescância explosiva com o toque cítrico do amanhã.",
              accent: "from-green-500/50 to-transparent",
              color: "text-green-400"
            },
            {
              title: "FRUTAS VERMELHAS",
              desc: "Um mix intenso de energia e sabor para o seu protocolo diário.",
              accent: "from-red-500/50 to-transparent",
              color: "text-red-400"
            }
          ].map((flavor, i) => (
            <div key={i} className="bg-space-black/40 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all rounded-[40px] p-8 flex flex-col items-center text-center relative overflow-hidden group">
              <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${flavor.accent} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <Logo className="h-10 w-auto mb-6 opacity-80" />
              <h3 className={`text-xl font-bold uppercase tracking-wider mb-3 ${flavor.color}`}>{flavor.title}</h3>
              <p className="text-sm font-light text-silver-400 mb-8 flex-1 leading-relaxed">{flavor.desc}</p>
              <button disabled className="w-full py-4 bg-white/5 border border-white/10 rounded-full text-xs font-bold uppercase tracking-widest text-white cursor-not-allowed">
                 Em Breve
              </button>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 mb-20 px-4">
          {[
            "Mais Prática",
            "Mais Gostosa",
            "Mais Inteligente"
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-brand-purple" />
              <span className="uppercase text-white font-medium tracking-wider md:text-lg italic">{feature}</span>
            </div>
          ))}
        </div>

        {/* Lead Capture / Form */}
        <div className="flex flex-col items-center gap-4 mb-4 px-4 max-w-4xl">
           <p className="text-xs md:text-lg font-light uppercase tracking-widest text-silver-400 text-center">
            Seja um dos primeiros a ter acesso exclusivo<br className="hidden md:block"/> e garanta seu lote de lançamento.
          </p>
        </div>

        <div className="w-full max-w-xl md:max-w-3xl relative mb-16 group px-4 md:px-0">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple to-brand-magenta rounded-full opacity-50 blur-xl group-hover:opacity-75 transition duration-500 scale-95 md:scale-100"></div>
          <form className="relative flex flex-col md:flex-row bg-white rounded-3xl md:rounded-full p-1.5 shadow-2xl gap-2 md:gap-0">
            <div className="relative flex-1 flex items-center px-4 md:px-6 py-2 md:py-0">
              <Search className="w-6 h-6 text-space-black/50 absolute left-6 hidden md:block" />
              <input 
                type="text" 
                value={leadData}
                onChange={(e) => setLeadData(e.target.value)}
                placeholder="insira seu e-mail ou whatsapp" 
                className="w-full bg-transparent border-none outline-none py-4 md:py-5 md:pl-12 pr-4 text-space-black placeholder:text-space-black/40 font-medium text-base md:text-lg rounded-full text-center md:text-left"
              />
            </div>
            <a 
              href={`https://wa.me/5581999150484?text=${encodeURIComponent(`Olá, quero saber mais sobre a Creatina em Gomas Space Supplements! Meu contato/e-mail para novidades: ${leadData}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-magenta hover:bg-brand-purple text-white font-bold uppercase tracking-wider py-4 md:py-5 px-10 rounded-full transition-colors flex items-center justify-center text-sm md:text-lg whitespace-nowrap shadow-[0_0_20px_rgba(147,0,204,0.5)]"
            >
              Quero saber mais
            </a>
          </form>
        </div>

        {/* Social */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-white uppercase font-light tracking-widest text-xs md:text-base mb-8">
          <span>Siga-nos para novidades:</span>
          <a href="https://instagram.com/space.supps" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-purple transition-colors">
            <Instagram className="w-5 h-5 md:w-6 md:h-6" />
            <span className="font-bold">@space.supps</span>
          </a>
        </div>

      </main>
    </div>
  );
}
