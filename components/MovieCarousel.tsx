"use client"

import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const movies = [
  {
    title: "X-Men: Days of Future Past",
    image: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
    category: "Ação"
  },
  {
    title: "Velozes e Furiosos 10",
    image: "https://images.pexels.com/photos/2036544/pexels-photo-2036544.jpeg",
    category: "Ação"
  },
  {
    title: "Avatar 2",
    image: "https://images.pexels.com/photos/4666754/pexels-photo-4666754.jpeg",
    category: "Ficção Científica"
  },
  {
    title: "Guardiões da Galáxia Vol. 3",
    image: "https://images.pexels.com/photos/6985003/pexels-photo-6985003.jpeg",
    category: "Aventura"
  },
  {
    title: "John Wick 4",
    image: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg",
    category: "Ação"
  },
  {
    title: "Barbie",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg",
    category: "Comédia"
  },
  {
    title: "Oppenheimer",
    image: "https://images.pexels.com/photos/2873277/pexels-photo-2873277.jpeg",
    category: "Drama"
  }
];

export default function MovieCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    dragFree: true
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    // Auto-scroll every 3 seconds
    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3000);

    return () => {
      clearInterval(autoplayInterval);
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          🎬 Lançamentos imperdíveis
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {movies.map((movie, index) => (
                <div key={index} className="min-w-[280px] sm:min-w-[320px] md:min-w-[400px] pl-4">
                  <div className="relative group overflow-hidden rounded-xl">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full aspect-[2/3] object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <span className="inline-block px-3 py-1 bg-purple-600 text-white text-sm rounded-full mb-2">
                          {movie.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-600/80 hover:bg-purple-600 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-600/80 hover:bg-purple-600 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}