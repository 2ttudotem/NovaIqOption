"use client"

import { useState } from 'react';
import { Check, Calendar, CreditCard, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PricingPlans() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  
  const plans = [
    {
      id: 'mensal',
      title: 'Plano Mensal',
      price: 'R$ 30,00',
      period: '/mês',
      features: [
        'Mais de 200 canais',
        'Canais abertos, filmes, séries e esportes',
        'Atualizações frequentes',
        'Suporte via WhatsApp'
      ],
      icon: Calendar,
      whatsappMessage: 'Olá! Gostaria de assinar o Plano Mensal por R$ 30,00/mês.'
    },
    {
      id: 'trimestral',
      title: 'Plano Trimestral',
      price: 'R$ 80,00',
      period: '/trimestre',
      features: [
        'Tudo do plano mensal',
        'Economia de R$ 10,00',
        'Prioridade no atendimento'
      ],
      icon: CreditCard,
      whatsappMessage: 'Olá! Gostaria de assinar o Plano Trimestral por R$ 80,00/trimestre.',
      popular: true
    },
    {
      id: 'semestral',
      title: 'Plano Semestral',
      price: 'R$ 150,00',
      period: '/semestre',
      features: [
        'Tudo dos planos anteriores',
        'Economia de R$ 30,00',
        'Atendimento prioritário'
      ],
      icon: Award,
      whatsappMessage: 'Olá! Gostaria de assinar o Plano Semestral por R$ 150,00/semestre.'
    }
  ];

  return (
    <section id="pricing" className="w-full py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            💰 Escolha seu plano
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Aproveite o melhor da TV online com qualidade, 
            estabilidade e suporte premium
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <div 
                key={plan.id}
                className={cn(
                  "relative bg-gradient-to-br rounded-2xl overflow-hidden transition-all duration-500 group flex flex-col",
                  hoveredPlan === plan.id 
                    ? "from-purple-900/40 to-purple-800/30 transform scale-105 shadow-xl" 
                    : "from-purple-900/20 to-purple-800/10 shadow-lg",
                  plan.popular && "border-2 border-purple-500/50"
                )}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-purple-600 text-white text-sm font-bold py-1 px-3 text-center">
                      MAIS POPULAR
                    </div>
                  </div>
                )}
                
                <div className="p-8 flex-grow">
                  <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.title}
                  </h3>
                  
                  <div className="flex items-end mb-6">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                    <span className="text-white/70 ml-1">{plan.period}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0">
                  <a
                    href={`https://wa.me/5511993881970?text=${encodeURIComponent(plan.whatsappMessage)}`}
                    className={cn(
                      "block w-full py-4 px-6 rounded-lg font-medium text-center transition-all duration-300",
                      hoveredPlan === plan.id
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "bg-white/10 text-white hover:bg-white/20"
                    )}
                  >
                    Assinar agora
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}