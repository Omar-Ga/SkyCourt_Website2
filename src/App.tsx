import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BrandMarquee from './components/BrandMarquee';
import Stories from './components/Stories';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  const { i18n, t } = useTranslation();
  const heroRef = useRef<HTMLElement>(null);
  const heroInView = useInView(heroRef, { margin: '-50% 0px -50% 0px' });

  useEffect(() => {
    document.documentElement.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <SmoothScroll>
      <div className="animated-gradient min-h-screen">
        <div className="grain-overlay" />
        <CustomCursor />
        <Header show={!heroInView} />
        <main>
          <Hero ref={heroRef} />
          <Features />
          <BrandMarquee />
          <section className="relative py-20 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-light text-black"
                style={{ lineHeight: 1.2 }}>
                {t('experience_shopping')}
              </h2>
            </div>
          </section>
          <Stories />
          <Location />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}

export default App;
