import { useTranslation } from 'react-i18next';
import { Building2, Menu, X } from 'lucide-react';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { label: t('nav_brands'), href: '#brands' },
    { label: t('nav_services'), href: '#services' },
    { label: t('nav_location'), href: '#location' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4`}
        initial={{ y: 0 }}
      >
        <motion.div
          className={`absolute inset-0 transition-opacity duration-500 opacity-100`}
        >
          <div className="frosted-glass h-full border-b border-black/5" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
          >
            <Building2 className="w-8 h-8 text-black" strokeWidth={1.5} />
            <span className="serif text-2xl font-semibold text-black tracking-wide">
              SkyCourt
            </span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-black/80 hover:text-black text-sm font-medium tracking-wide relative group transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <button
              onClick={toggleLanguage}
              className="text-black/80 hover:text-black text-sm font-medium tracking-wide relative group transition-colors"
            >
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </button>
          </nav>

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
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="serif text-3xl text-black/80 hover:text-black transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }}
              className="serif text-3xl text-black/80 hover:text-black transition-colors"
            >
              {i18n.language === 'en' ? 'AR' : 'EN'}
            </button>
          </nav>
        </motion.div>
      )}
    </>
  );
}
