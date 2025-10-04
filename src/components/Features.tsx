import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShoppingBag, Sparkles, MapPin, Shield, Clock, Car } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  'Premium Shopping': ShoppingBag,
  'Prime Location': MapPin,
  'Always Open': Clock,
  'Safe Environment': Shield,
  'Modern Amenities': Sparkles,
  'Convenient Parking': Car,
};

export default function Features() {
  const { t } = useTranslation();
  const features = t('features', { returnObjects: true }) as { title: string; description: string }[];

  return (
    <section className="relative py-32 px-6" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          <div className="sticky top-32 h-[600px] overflow-hidden rounded-2xl">
            <motion.img
              src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="SkyCourt Interior"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="space-y-12 md:pt-20">
            {features.map((feature, index) => {
              const Icon = iconMap[feature.title] || Sparkles;

              return (
                <motion.div
                  key={feature.title}
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div>
                    <div className="flex items-start gap-6">
                      <div
                        className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 bg-black text-white'}
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
