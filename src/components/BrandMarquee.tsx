import { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function BrandMarquee() {
  const { t } = useTranslation();
  const brands = t('brands', { returnObjects: true }) as { name: string }[];
  const duplicatedBrands = [...brands, ...brands];
  
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useLayoutEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, [brands]);

  return (
    <section className="relative py-16 overflow-hidden" id="brands">
      <div className="mb-16 text-center px-6">
        <motion.h2
          className="serif text-5xl md:text-7xl font-light text-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 0.8 }}
        >
          {t('iconic_brands')}
        </motion.h2>
      </div>
      <div className="relative" style={{ perspective: '1000px' }}>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafaf8] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafaf8] to-transparent z-10" />

        <motion.div
          ref={marqueeRef}
          className="flex gap-16 py-8"
          animate={{ x: [0, -marqueeWidth] }}
          transition={{ duration: marqueeWidth ? marqueeWidth / 50 : 60, ease: 'linear', repeat: Infinity }} // Dynamic duration
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 relative"
              style={{
                transformStyle: 'preserve-3d',
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="bg-white/80 backdrop-blur-sm border border-black/10 rounded-2xl px-12 py-8 shadow-lg hover:shadow-[0_25px_50px_-12px_hsl(var(--primary)/0.25)] transition-shadow duration-300"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0)',
                }}
              >
                <span className="serif text-2xl font-medium text-black tracking-wider whitespace-nowrap">
                  {brand.name}
                </span>
              </div>

              <div
                className="absolute inset-0 bg-black/5 rounded-2xl blur-xl -z-10"
                style={{
                  transform: 'translateZ(-20px)',
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}