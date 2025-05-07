import Hero from '@/components/Hero';
import Features from '@/components/Features';
import PricingPlans from '@/components/PricingPlans';
import MovieCarousel from '@/components/MovieCarousel';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <MovieCarousel />
      <Features />
      <PricingPlans />
      <Testimonials />
    </main>
  );
}