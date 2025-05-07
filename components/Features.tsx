import { Tv, Film, Download, Zap, CheckCircle2 } from 'lucide-react';

export default function Features() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          🚀 Entretenimento sem limites
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-lg rounded-xl p-8 transform transition-all duration-300 hover:scale-105 border border-purple-500/20">
            <div className="h-14 w-14 rounded-full bg-purple-600 flex items-center justify-center mb-6">
              <Tv className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              +200 canais ao vivo
            </h3>
            <p className="text-white/80">
              Canais nacionais e internacionais em HD, incluindo filmes, séries e esportes.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-lg rounded-xl p-8 transform transition-all duration-300 hover:scale-105 border border-purple-500/20">
            <div className="h-14 w-14 rounded-full bg-purple-600 flex items-center justify-center mb-6">
              <Film className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Conteúdo on demand
            </h3>
            <p className="text-white/80">
              Acesso ao melhor conteúdo das plataformas vizinhas em uma única plataforma. Filmes e séries atualizados diariamente.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-lg rounded-xl p-8 transform transition-all duration-300 hover:scale-105 border border-purple-500/20">
            <div className="h-14 w-14 rounded-full bg-purple-600 flex items-center justify-center mb-6">
              <Zap className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Qualidade garantida
            </h3>
            <p className="text-white/80">
              Transmissão em HD sem travamentos. Experiência perfeita em todos os dispositivos.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-lg rounded-xl p-8 transform transition-all duration-300 hover:scale-105 border border-purple-500/20">
            <div className="h-14 w-14 rounded-full bg-purple-600 flex items-center justify-center mb-6">
              <Download className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Multi-dispositivos
            </h3>
            <p className="text-white/80">
              Smart TVs, celulares, computadores e TV Box. Assista em qualquer lugar.
            </p>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-400/20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Vantagens exclusivas</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
              <p className="text-white/90">Qualidade HD em todos os canais</p>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
              <p className="text-white/90">Suporte 24h via WhatsApp</p>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
              <p className="text-white/90">Conteúdo sempre atualizado</p>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
              <p className="text-white/90">Sem fidelidade</p>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
              <p className="text-white/90">Até 3 telas simultâneas</p>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
              <p className="text-white/90">Instalação simples e rápida</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}