import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

const Index = () => {
  // Enable scroll animations
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.85;
        if (isVisible) {
          if (element.classList.contains('reveal-left')) {
            element.classList.add('animate-slide-right');
          } else if (element.classList.contains('reveal-right')) {
            element.classList.add('animate-slide-left');
          } else {
            element.classList.add('animate-fade-in-up');
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 500);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero section - keep dark background */}
      <div className="bg-safechat-dark">
        <Hero />
      </div>
      
      {/* How It Works section - already has gray-100 background */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-safechat-dark to-transparent"></div>
        <HowItWorks />
      </div>
      
      {/* CTA Section - already has black background */}
      <section className="py-16 bg-black text-white relative">
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-gray-100 to-transparent opacity-10"></div>
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-6 max-w-3xl mx-auto rtl-text text-center">
            הגנו על הילדים שלכם בקבוצות וואטסאפ כבר היום
          </h2>
          <CTAButton className="mx-auto rtl-text text-lg" target="contact">
            התחילו עכשיו
          </CTAButton>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-gray-50 to-transparent opacity-10"></div>
      </section>
      
      {/* Benefits section - has gray-50 background */}
      <Benefits />
      
      {/* Pricing section - has white to gray-50 gradient */}
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <Pricing />
      </div>
      
      {/* Testimonials section */}
      <div className="relative bg-gray-100">
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-gray-50 to-gray-100"></div>
        <Testimonials />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-gray-100"></div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-white">
        <FAQ />
      </div>
      
      {/* Contact Section */}
      <div className="bg-gray-50">
        <Contact />
      </div>
      
      <Footer />
    </div>;
};

export default Index;
