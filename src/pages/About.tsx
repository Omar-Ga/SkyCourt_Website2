import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
// NEW: Import the new section components
import VisionSection from '../components/about/VisionSection';
import ExperienceSection from '../components/about/ExperienceSection';
import LegacySection from '../components/about/LegacySection';

export default function About() {
  const { t } = useTranslation();
  const headline = t('about_headline');

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Header show={true} />
      <main>
        {/* This is the top hero section, it remains the same */}
        <section className="relative h-screen w-full">
          <img
            src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg"
            alt="SkyCourt Mall Architecture"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <motion.h1 /* ... same as before ... */ >{t('about_title')}</motion.h1>
            <motion.h2 /* ... same as before ... */ >
                {/* ... mapping logic same as before ... */}
            </motion.h2>
          </div>
        </section>

        {/* NEW: Render the new sections in order */}
        <VisionSection />
        <ExperienceSection />
        <LegacySection />

      </main>
      <Footer />
    </div>
  );
}