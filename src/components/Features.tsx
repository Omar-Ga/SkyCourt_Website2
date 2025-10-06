import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ShoppingBag, Sparkles, MapPin, Shield, Clock, Car } from 'lucide-react';
import { useRef } from 'react';

const iconMap: { [key: string]: React.ElementType } = {
  'Premium Shopping': ShoppingBag,
  'Prime Location': MapPin,
  'Always Open': Clock,
  'Safe Environment': Shield,
  'Modern Amenities': Sparkles,
  'Convenient Parking': Car,
};

interface FeatureItemProps {
  feature: { title: string; description: string };
  progress: MotionValue<number>;
}

function FeatureItem({ feature, progress }: FeatureItemProps) {
  const opacity = useTransform(progress, [0, 0.5, 1], [0.4, 1, 0.4]);
  const scale = useTransform(progress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const Icon = iconMap[feature.title] || Sparkles;

  return (
    <motion.div style={{ opacity, scale }}>
      <div className="flex items-start gap-6">
        <motion.div 
          className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 bg-black text-white"
          style={{ scale }} // You can bind scale to the icon too for more depth
        >
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </motion.div>
        <div>
          <h3 className="serif text-2xl md:text-3xl font-medium text-black mb-3">{feature.title}</h3>
          <p className="text-base text-black/70 leading-relaxed">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  const { t } = useTranslation();
  const features = t('features', { returnObjects: true }) as { title: string; description: string }[];
  const containerRef = useRef<HTMLElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });

  return (
    <section ref={containerRef} className="relative py-32 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="serif text-5xl md:text-7xl font-light text-black mb-6">
            {t('why_choose_skycourt')}
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            {t('experience_shopping')}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="h-[600px] overflow-hidden rounded-2xl sticky top-32">
            <motion.img src="/home_images/entrance darker.webp" alt="SkyCourt Interior" className="w-full h-full object-cover" />
          </div>
          <div ref={targetRef} className="relative space-y-24 md:pt-20">
            {features.map((feature, index) => {
              const start = index / features.length;
              const end = start + 1 / features.length;
              const progress = useTransform(scrollYProgress, [start, end], [0, 1]);
              return <FeatureItem key={feature.title} progress={progress} feature={feature} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}