
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
      <Hero />
      <HowItWorks />
      
      {/* First CTA Section */}
      <section className="py-16 bg-safechat-dark-lighter text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-6 max-w-3xl mx-auto rtl-text text-center">
            הגנה על ילדים בקבוצות וואטסאפ - בקלות ובמהירות
          </h2>
          <CTAButton className="mx-auto rtl-text text-lg" target="contact">
            למידע נוסף
          </CTAButton>
        </div>
      </section>
      
      <Benefits />
      
      {/* Second CTA Section */}
      <section className="py-16 bg-gray-100 text-safechat-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-6 max-w-3xl mx-auto rtl-text text-center">
            סביבה בטוחה לילדים ברשת - בפשטות ובנוחות
          </h2>
          <CTAButton className="mx-auto rtl-text text-lg" target="contact">
            גלו עוד
          </CTAButton>
        </div>
      </section>
      
      <Pricing />
      <Testimonials />
      
      {/* Third CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-200 to-slate-300 text-safechat-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-6 max-w-3xl mx-auto rtl-text text-center">
            הגנה פשוטה ויעילה על ילדיכם ברשת
          </h2>
          <p className="rtl-text text-xl mb-8 max-w-2xl mx-auto opacity-90">
            התחילו להשתמש במערכת תוך מספר דקות וקבלו תמיכה מקצועית לאורך כל הדרך
          </p>
          <CTAButton className="mx-auto rtl-text text-lg" size="lg" target="contact">
            צרו קשר
          </CTAButton>
        </div>
      </section>
      
      <FAQ />
      <Contact />
      <Footer />
    </div>;
};

export default Index;
