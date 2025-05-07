"use client"

import { Star } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

const testimonials = [
  {
    name: "Carlos Silva",
    location: "São Paulo, SP",
    text: "Melhor serviço de IPTV que já usei! Qualidade HD impressionante e zero travamentos.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    name: "Ana Santos",
    location: "Rio de Janeiro, RJ",
    text: "Atendimento excelente e canais sempre funcionando. Recomendo muito!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    name: "Pedro Costa",
    location: "Belo Horizonte, MG",
    text: "Instalação super fácil e rápida. O suporte responde na hora quando preciso.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
  },
  {
    name: "Mariana Lima",
    location: "Curitiba, PR",
    text: "Ótimo custo-benefício! Muito conteúdo por um preço justo.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    dragFree: true
  });

  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    // Auto-scroll every 4 seconds
    const autoplayInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 4000);

    return () => {
      clearInterval(autoplayInterval);
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-black to-purple-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          ⭐ Clientes satisfeitos
        </h2>
        <p className="text-xl text-white/80 text-center mb-16 max-w-2xl mx-auto">
          Veja o que nossos assinantes dizem sobre o serviço
        </p>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -mx-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-4">
                <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/10 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-white">{testimonial.name}</h3>
                      <p className="text-white/60 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-white/80">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? 'bg-purple-500 w-8' : 'bg-purple-500/30'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}