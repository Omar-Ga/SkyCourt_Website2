import { motion } from 'framer-motion';
import { Building2, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
  ];

  return (
    <footer className="relative py-20 px-6 bg-black text-white overflow-hidden" id="contact">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-10 h-10" strokeWidth={1.5} />
              <span className="serif text-3xl font-semibold tracking-wide">SkyCourt</span>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md mb-8">
              Redefining luxury retail with an unparalleled collection of the world's finest brands
              and an experience that transcends traditional shopping.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-sm uppercase tracking-wider font-medium mb-4">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#brands" className="text-white/60 hover:text-white transition-colors">
                    Brands
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-white/60 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#location" className="text-white/60 hover:text-white transition-colors">
                    Location
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider font-medium mb-4">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:concierge@skycourt.com"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a href="tel:+6561234567" className="text-white/60 hover:text-white transition-colors">
                    Call
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-white/40 text-sm">
            &copy; 2025 SkyCourt. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
