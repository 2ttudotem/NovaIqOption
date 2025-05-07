import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.8) 100%), url(https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 py-12 md:py-20 z-10 text-center mt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up leading-tight">
            Filmes, séries e TV ao vivo em um só lugar
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-400 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Experimente 2 horas grátis e descubra o melhor do entretenimento
          </p>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-8 leading-relaxed font-light">
            Assista onde quiser. Cancele quando quiser.
            <br className="hidden md:block" />
            Mais de 200 canais em qualidade HD.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
            <Link 
              href={`https://wa.me/5511993881970?text=Olá! Gostaria de experimentar o serviço de TV com 2 horas grátis.`}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 px-12 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-xl"
            >
              Começar 2 horas grátis
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
          
          <p className="text-white/80 mt-6 text-lg">
            Cancele a qualquer momento. Sem compromisso.
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 rounded-full border-2 border-white/50 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}