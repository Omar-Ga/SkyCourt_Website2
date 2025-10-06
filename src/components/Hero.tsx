import { useState, useEffect, forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { RotatingText } from './ui/shadcn-io/rotating-text';
import { Link } from 'react-router-dom';

const Hero = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const headline = "SkyCourt Mall";
  const navItems = [
    { label: t('nav_home'), href: '/', isRoute: true },
    { label: t('nav_brands'), href: '#brands', isRoute: false },
    { label: t('nav_services'), href: '#services', isRoute: false },
    { label: t('nav_dining'), href: '/dining', isRoute: true },
    { label: t('nav_location'), href: '#location', isRoute: false },
    { label: t('nav_contact'), href: '#contact', isRoute: false },
  ];

  const NavLink = ({ item }: { item: typeof navItems[0] }) => {
    const commonProps = {
      className: "text-white hover:text-white text-sm font-medium tracking-wide transition-colors",
    };

    if (item.isRoute) {
      return (
        <Link to={item.href} {...commonProps}>
          {item.label}
        </Link>
      );
    }

    return (
      <a href={item.href} {...commonProps}>
        {item.label}
      </a>
    );
  };

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 right-0 z-30 flex justify-center pt-8">
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.label} item={item} />
          ))}
        </nav>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 z-10" />

      <img
        src="/home_images/entrance darker.webp"
        alt="SkyCourt Mall"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white px-6">
        <motion.h1
          className="font-alan-sans text-7xl md:text-9xl font-normal tracking-wider mb-6 text-center"
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
