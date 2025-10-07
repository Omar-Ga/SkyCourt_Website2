import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OurJourney from '../components/about/OurJourney';
import CommitmentChecklist from '../components/about/CommitmentChecklist';
import LegacyDiagram from '../components/about/LegacyDiagram';

export default function About() {
  const { t } = useTranslation();

  const headline = t('about_headline');

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Header show={true} />
      <main>
        <section className="relative h-screen w-full">
          <img
            src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg"
            alt="SkyCourt Mall Architecture"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <motion.h1
              className="font-alan-sans text-7xl font-normal tracking-wider md:text-9xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {t('about_title')}
            </motion.h1>
            <motion.h2 className="serif mt-6 max-w-4xl text-4xl font-light md:text-6xl">
              {headline.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.15, ease: 'easeOut' }}
                  className="inline-block pr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>
          </div>
        </section>
        <OurJourney />
        <CommitmentChecklist />
        <LegacyDiagram />
      </main>
      <Footer />
    </div>
  );
}