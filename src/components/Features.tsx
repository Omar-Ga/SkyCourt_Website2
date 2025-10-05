import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, MapPin, Shield, Clock, Car } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const iconMap: { [key: string]: React.ElementType } = {
  'Premium Shopping': ShoppingBag,
  'Prime Location': MapPin,
  'Always Open': Clock,
  'Safe Environment': Shield,
  'Modern Amenities': Sparkles,
  'Convenient Parking': Car,
};

// Helper component for each feature item
const FeatureItem = ({
  feature,
  index,
  isActive,
  onInViewChange,
}: {
  feature: { title: string; description: string };
  index: number;
  isActive: boolean;
  onInViewChange: (index: number, inView: boolean) => void;
}) => {
  // Use multiple thresholds to get a smooth intersection ratio
  const thresholds = Array.from({ length: 21 }, (_, i) => i / 20);
  const { ref, entry } = useInView({ threshold: thresholds, rootMargin: '0px 0px -20% 0px' });
  const [entered, setEntered] = useState(false);
  const enterTimerRef = useRef<number | null>(null);
  const exitTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const ratio = entry?.intersectionRatio ?? 0;
    const enterThreshold = 0.8; // enter later (requires more of the item visible)
    const exitThreshold = 0.35; // exit later (requires more to leave)

    // Clear pending timers
    if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
    if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current);

    if (!entered && ratio >= enterThreshold) {
      // Debounced enter
      enterTimerRef.current = window.setTimeout(() => {
        setEntered(true);
        onInViewChange(index, true);
      }, 220);
    } else if (entered && ratio <= exitThreshold) {
      // Debounced exit
      exitTimerRef.current = window.setTimeout(() => {
        setEntered(false);
        onInViewChange(index, false);
      }, 140);
    }

    return () => {
      if (enterTimerRef.current) window.clearTimeout(enterTimerRef.current);
      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current);
    };
  }, [entry, entered, index, onInViewChange]);

  // No parent-controlled queue; animation is fully view-driven

  const Icon = iconMap[feature.title] || Sparkles;

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: entered ? 1 : 0, y: entered ? 0 : -24 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex items-start gap-6">
        <div
          className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-primary text-primary-foreground' : 'bg-black text-white'}`}
        >
          <Icon className="w-6 h-6" strokeWidth={1.5} />
        </div>
        <div className="relative">
          <h3 className="serif text-2xl md:text-3xl font-medium text-black mb-3">
            {feature.title}
          </h3>
          {/* Underline that appears for the last visible (active) item */}
          <motion.div
            className="absolute -bottom-0.5 left-0 h-px bg-primary"
            initial={{ width: 0 }}
            animate={{ width: isActive ? '100%' : 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut', delay: isActive ? 0.08 : 0 }}
          />
          <p className="text-base text-black/70 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Features() {
  const { t } = useTranslation();
  const features = t('features', { returnObjects: true }) as { title: string; description: string }[];

  const [activeIndex, setActiveIndex] = useState(0);
  const visibleRef = useRef<boolean[]>([]);

  useEffect(() => {
    const next = Array(features.length).fill(false) as boolean[];
    visibleRef.current = next;
  }, [features.length]);

  const handleInViewChange = (index: number, inView: boolean) => {
    const next = [...(visibleRef.current || [])];
    next[index] = inView;
    visibleRef.current = next;
    const lastVisible = next.reduce((acc, v, i) => (v ? i : acc), -1);
    setActiveIndex(lastVisible === -1 ? 0 : lastVisible);
  };

  return (
    <section className="relative py-32 px-6" id="features">
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
          <div className="h-[300px] md:h-[600px] overflow-hidden rounded-2xl md:sticky md:top-32">
            <motion.img
              src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="SkyCourt Interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="relative space-y-12 md:pt-20">
            {features.map((feature, index) => (
              <div key={feature.title}>
                <FeatureItem
                  feature={feature}
                  index={index}
                  isActive={activeIndex === index}
                  onInViewChange={handleInViewChange}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}