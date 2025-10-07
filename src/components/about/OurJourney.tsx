import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Diamond, Heart } from 'lucide-react';
import { useRef } from 'react';

const pillars = [
  {
    key: 'pillar1',
    icon: Compass,
  },
  {
    key: 'pillar2',
    icon: Diamond,
  },
  {
    key: 'pillar3',
    icon: Heart,
  },
];

export default function OurJourney() {
  const { t } = useTranslation();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start end', 'end start'] });

  const pathLength = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            className="text-base font-semibold leading-7 text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            {t('about_journey_headline')}
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our Journey
          </motion.p>
        </div>

        <div ref={targetRef} className="relative mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-gray-200" />
          <motion.div
            className="absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 bg-primary"
            style={{ scaleX: pathLength, transformOrigin: 'left' }}
          />

          <div className="relative grid grid-cols-1 gap-y-16 md:grid-cols-3 md:gap-x-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.key}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {t(`about_${pillar.key}_title`)}
                  </p>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    {t(`about_${pillar.key}_text`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
