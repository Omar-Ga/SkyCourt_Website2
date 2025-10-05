import { useState, useEffect, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { RotatingText } from '@/components/ui/shadcn-io/rotating-text';

const Hero = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const headline = "SKYCOURT";
  const navItems = [
    { label: t('home'), href: '#' },
    { label: t('nav_brands'), href: '#brands' },
    { label: t('nav_services'), href: '#services' },
    { label: t('nav_location'), href: '#location' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-30 flex justify-center pt-8">
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-white text-sm font-medium tracking-wide transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000' width='1920' height='1080'/%3E%3C/svg%3E"
      >
        <source src="/herosection_vid.webm" type="video/webm" />
      </video>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-6">
        <motion.h1
          className="serif text-7xl md:text-9xl font-light tracking-wider mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: textVisible ? 1 : 0 }}
        >
          {headline.split('').map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              animate={{
                opacity: textVisible ? 1 : 0,
                filter: textVisible ? 'blur(0px)' : 'blur(10px)'
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 20 }}
          transition={{ duration: 0.8, delay: headline.length * 0.05 + 0.3 }}
        >
          <RotatingText
            text={t('rotating_texts', { returnObjects: true }) as string[]}
            duration={3000}
            className="text-2xl md:text-3xl font-light tracking-wide text-center max-w-2xl"
          />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-px h-16 bg-white/50 draw-line pulse-gentle" />
        <ChevronDown className="w-6 h-6 text-white/70 animate-bounce" />
      </motion.div>
    </section>
  );
});

export default Hero;
