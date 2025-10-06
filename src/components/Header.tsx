import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Building2, Menu, X } from 'lucide-react';
import Navigation from './shared/Navigation';

export default function Header({ show }: { show: boolean }) {
  const { i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 py-4`}
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: show ? 0 : -100,
          opacity: show ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className={`absolute inset-0`}
        >
          <div className="frosted-glass h-full border-b border-black/5" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="/" // Changed to '/' for home route
            className="flex items-center gap-3 group"
          >
            <Building2 className="w-8 h-8 text-black" strokeWidth={1.5} />
            <span className="serif text-2xl font-semibold text-black tracking-wide">
              SkyCourt
            </span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            <Navigation
              linkClassName="text-black/80 hover:text-black text-sm font-medium tracking-wide"
            />
            <button
              onClick={toggleLanguage}
              className="text-black/80 hover:text-black text-sm font-medium tracking-wide relative group transition-colors"
            >
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </button>
          </div>

          <button
            className="md:hidden text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.header>

      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 frosted-glass flex flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Navigation
            className="flex-col gap-8"
            linkClassName="serif text-3xl text-black/80 hover:text-black"
            onLinkClick={() => setIsMobileMenuOpen(false)}
          />
          <button
            onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
            className="serif text-3xl text-black/80 hover:text-black transition-colors mt-8"
          >
            {i18n.language === 'en' ? 'AR' : 'EN'}
          </button>
        </motion.div>
      )}
    </>
  );
}