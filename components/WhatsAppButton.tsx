"use client"

import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Show button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <a
      href="https://wa.me/5511993881970?text=Olá! Gostaria de saber mais sobre o serviço de TV."
      className={`fixed bottom-6 right-6 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg transition-all duration-500 z-50 ${
        isVisible 
          ? 'opacity-100 transform translate-y-0' 
          : 'opacity-0 transform translate-y-10'
      }`}
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="absolute w-full h-full rounded-full bg-green-500 animate-ping opacity-30"></div>
      <MessageCircle className="h-8 w-8 text-white" />
    </a>
  );
}