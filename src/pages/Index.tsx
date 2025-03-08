
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
import SectionDivider from '@/components/SectionDivider';

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
  
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      
      {/* Hero section */}
      <section className="bg-safechat-dark">
        <Hero />
      </section>
      
      {/* Section divider: Hero to How It Works */}
      <SectionDivider 
        fromColor="from-safechat-dark" 
        toColor="to-gray-100" 
        pattern="wave" 
      />
      
      {/* How It Works section */}
      <section className="bg-gray-100">
        <HowItWorks />
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-safechat-dark to-safechat-dark-lighter text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-6 max-w-3xl mx-auto rtl-text text-center">
            הגנו על הילדים שלכם בקבוצות וואטסאפ כבר היום
          </h2>
          <CTAButton className="mx-auto rtl-text text-lg" target="contact">
            התחילו עכשיו
          </CTAButton>
        </div>
      </section>
      
      {/* Section divider: CTA to Benefits */}
      <SectionDivider 
        fromColor="from-safechat-dark-lighter" 
        toColor="to-gray-50" 
        pattern="slant"
      />
      
      {/* Benefits section */}
      <section className="bg-gray-50">
        <Benefits />
      </section>
      
      {/* Section divider: Benefits to Pricing */}
      <SectionDivider 
        fromColor="from-gray-50" 
        toColor="to-white" 
        pattern="curve"
      />
      
      {/* Pricing section */}
      <section className="bg-white">
        <Pricing />
      </section>
      
      {/* Section divider: Pricing to Testimonials */}
      <SectionDivider 
        fromColor="from-white" 
        toColor="to-gray-100" 
        pattern="triangle"
      />
      
      {/* Testimonials section */}
      <section className="bg-gray-100">
        <Testimonials />
      </section>
      
      {/* Section divider: Testimonials to FAQ */}
      <SectionDivider 
        fromColor="from-gray-100" 
        toColor="to-white" 
        pattern="wave"
      />
      
      {/* FAQ Section */}
      <section className="bg-white">
        <FAQ />
      </section>
      
      {/* Section divider: FAQ to Contact */}
      <SectionDivider 
        fromColor="from-white" 
        toColor="to-gray-50" 
        pattern="slant"
      />
      
      {/* Contact Section */}
      <section className="bg-gray-50">
        <Contact />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
