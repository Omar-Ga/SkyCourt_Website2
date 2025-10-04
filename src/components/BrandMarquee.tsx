import { motion } from 'framer-motion';

const brands = [
  'GUCCI',
  'PRADA',
  'LOUIS VUITTON',
  'CHANEL',
  'HERMÈS',
  'DIOR',
  'VERSACE',
  'BURBERRY',
  'CARTIER',
  'ROLEX',
  'TIFFANY & CO.',
  'BALENCIAGA',
];

export default function BrandMarquee() {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="relative py-24 overflow-hidden" id="brands">
      <div className="mb-16 text-center px-6">
        <motion.h2
          className="serif text-5xl md:text-7xl font-light text-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Iconic Brands
        </motion.h2>
        <motion.p
          className="text-lg text-black/60 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Home to the world's most coveted luxury brands
        </motion.p>
      </div>

      <div className="relative" style={{ perspective: '1000px' }}>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafaf8] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafaf8] to-transparent z-10" />

        <motion.div
          className="flex gap-16 py-8"
          animate={{
            x: [0, -50 * brands.length],
          }}
          transition={{
            duration: 30,
            ease: 'linear',
            repeat: Infinity,
          }}
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
                className="bg-white/80 backdrop-blur-sm border border-black/10 rounded-2xl px-12 py-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'translateZ(0)',
                }}
              >
                <span className="serif text-2xl font-medium text-black tracking-wider whitespace-nowrap">
                  {brand}
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

      <div className="mt-16 text-center">
        <motion.p
          className="text-sm text-black/50 tracking-wider uppercase"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          And many more exclusive boutiques
        </motion.p>
      </div>
    </section>
  );
}
