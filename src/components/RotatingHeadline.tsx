import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const phrases = [
  'premium shops and brands.',
  'all your favorite brands.',
  'world-class dining experiences.',
  'exclusive luxury boutiques.',
  'unparalleled service.',
];

export default function RotatingHeadline() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const currentPhrase = phrases[currentPhraseIndex];
  const words = currentPhrase.split(' ');

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="serif text-4xl md:text-6xl lg:text-7xl font-light text-black leading-tight">
          Discover{' '}
          <span className="inline-block relative" style={{ minWidth: '400px' }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentPhraseIndex}
                className="inline-flex flex-wrap justify-center gap-x-3"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {words.map((word, wordIndex) => (
                  <span key={wordIndex} className="inline-block overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${currentPhraseIndex}-${wordIndex}`}
                        className="inline-flex"
                        initial={{ y: 100, opacity: 0, rotateX: -90 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -100, opacity: 0, rotateX: 90 }}
                        transition={{
                          duration: 0.5,
                          delay: wordIndex * 0.1,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                          transformStyle: 'preserve-3d',
                          transformOrigin: 'center center',
                        }}
                      >
                        {word.split('').map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            className="inline-block"
                            initial={{ y: 100, opacity: 0, rotateX: -90 }}
                            animate={{ y: 0, opacity: 1, rotateX: 0 }}
                            exit={{ y: -100, opacity: 0, rotateX: 90 }}
                            transition={{
                              duration: 0.4,
                              delay: wordIndex * 0.1 + charIndex * 0.02,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                            style={{
                              transformStyle: 'preserve-3d',
                              display: 'inline-block',
                            }}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                ))}
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
