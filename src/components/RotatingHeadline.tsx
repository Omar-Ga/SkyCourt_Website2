import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function RotatingHeadline() {
  const { t } = useTranslation();
  const phrases = t('rotating_texts', { returnObjects: true }) as string[];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="serif text-4xl md:text-6xl lg:text-7xl font-light text-black leading-tight">
          {t('discover')}{' '}
          <span className="inline-block relative w-full md:w-auto" style={{ minWidth: '400px' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentPhraseIndex}
                className="inline-block"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {phrases[currentPhraseIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </h2>
      </div>

      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-black to-transparent rounded-full blur-3xl" />
      </div>
    </section>
  );
}
