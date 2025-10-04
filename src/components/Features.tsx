import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShoppingBag, Sparkles, MapPin, Coffee, Shield, Clock } from 'lucide-react';

const features = [
  {
    icon: ShoppingBag,
    title: 'Curated Luxury',
    description: 'Handpicked selection of the world\'s most prestigious brands, all under one magnificent roof.',
  },
  {
    icon: Sparkles,
    title: 'Exclusive Experience',
    description: 'Private shopping suites and personalized services tailored to your distinguished taste.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Situated in the heart of the city with panoramic views that redefine urban luxury.',
  },
  {
    icon: Coffee,
    title: 'Fine Dining',
    description: 'Michelin-starred restaurants and artisanal cafes offering world-class culinary experiences.',
  },
  {
    icon: Shield,
    title: 'Concierge Service',
    description: 'Dedicated personal shoppers and white-glove services for a seamless experience.',
  },
  {
    icon: Clock,
    title: 'Extended Hours',
    description: 'Open late to accommodate your schedule with private appointment availability.',
  },
];

export default function Features() {
  const containerRef = useRef<HTMLElement>(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight / 2 - rect.top) / rect.height));
      const newActive = Math.min(
        features.length - 1,
        Math.floor(scrollProgress * features.length)
      );

      setActiveFeature(newActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="relative py-32 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="serif text-5xl md:text-7xl font-light text-black mb-6">
            Why Choose SkyCourt
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            An unparalleled shopping destination where every detail is crafted for excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="sticky top-32 h-[600px] overflow-hidden rounded-2xl">
            <motion.img
              src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="SkyCourt Interior"
              className="w-full h-full object-cover"
              style={{ y: imageY }}
              loading="lazy"
            />
          </div>

          <div className="space-y-12 md:pt-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === index;

              return (
                <motion.div
                  key={feature.title}
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div
                    className={`transition-all duration-500 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-95'
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
                          isActive ? 'bg-black text-white' : 'bg-black/10 text-black/40'
                        }`}
                      >
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>

                      <div>
                        <h3 className="serif text-2xl md:text-3xl font-medium text-black mb-3">
                          {feature.title}
                        </h3>
                        <p className="text-base text-black/70 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
