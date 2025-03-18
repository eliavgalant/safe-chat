
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
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-6 max-w-3xl mx-auto rtl-text text-center">
            הגנו על הילדים שלכם בקבוצות וואטסאפ כבר היום
          </h2>
          <CTAButton className="mx-auto rtl-text text-lg" target="contact">
            לשבועיים נסיון חינם ללא התחייבות
          </CTAButton>
          <p className="rtl-text mt-3 text-safechat-gold font-medium">ואז רק 49 ש"ח לחודש</p>
        </div>
      </section>
      
      <Benefits />
      
      {/* Second CTA Section */}
      <section className="py-16 bg-safechat-dark-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-6 max-w-3xl mx-auto rtl-text text-center">
            צרו סביבה בטוחה לילדיכם ברשת - בלחיצת כפתור
          </h2>
          <div className="bg-white/10 mx-auto mb-6 max-w-md rounded-lg border-2 border-safechat-gold p-3 animate-pulse">
            <p className="rtl-text text-lg font-bold text-white text-center">
              ✨ שבועיים התנסות חינם! | ללא התחייבות ✨
            </p>
          </div>
          <CTAButton className="mx-auto rtl-text text-lg" target="contact">
            לשבועיים נסיון חינם ללא התחייבות
          </CTAButton>
          <p className="rtl-text mt-3 text-safechat-gold font-medium">ואז רק 49 ש"ח לחודש</p>
        </div>
      </section>
      
      <Pricing />
      <Testimonials />
      
      {/* Third CTA Section */}
      <section className="py-16 bg-gradient-to-r from-safechat-dark to-safechat-dark-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="heading-md mb-6 max-w-3xl mx-auto rtl-text text-center">
            הגנו על ילדיכם ברשת כבר עכשיו
          </h2>
          <p className="rtl-text text-xl mb-6 max-w-2xl mx-auto opacity-90">
            תוכלו להתחיל בפחות מ-5 דקות ולקבל שקט נפשי בידיעה שילדיכם מוגנים
          </p>
          <div className="bg-white/10 mx-auto mb-6 max-w-md rounded-lg border-2 border-safechat-gold p-3 animate-pulse">
            <p className="rtl-text text-lg font-bold text-white text-center">
              ✨ שבועיים התנסות חינם! | ללא התחייבות ✨
            </p>
          </div>
          <CTAButton className="mx-auto rtl-text text-lg" size="lg" target="contact">
            לשבועיים נסיון חינם ללא התחייבות
          </CTAButton>
          <p className="rtl-text mt-3 text-safechat-gold font-medium">ואז רק 49 ש"ח לחודש</p>
        </div>
      </section>
      
      <FAQ />
      <Contact />
      <Footer />
    </div>;
};

export default Index;
