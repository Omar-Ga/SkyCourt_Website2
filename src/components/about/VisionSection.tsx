// src/components/about/VisionSection.tsx

import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Compass, Diamond, Heart } from 'lucide-react';
import { useRef } from 'react';

const pillars = [
  { key: 'pillar1', icon: Compass },
  { key: 'pillar2', icon: Diamond },
  { key: 'pillar3', icon: Heart },
];

export default function VisionSection() {
  const { t } = useTranslation();
  const targetRef = useRef<HTMLDivElement>(null);
  // Set up scroll tracking for the horizontal animation
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // Map scroll progress to horizontal movement (translateX)
  const x = useTransform(scrollYProgress, [0.1, 0.9], ['5%', '-80%']);

  return (
    <section ref={targetRef} className="relative h-[80vh] bg-neutral-900 text-white py-24 sm:py-32">
      <div className="sticky top-0 flex h-full items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12">
           {/* Section Title */}
           <div className="flex-shrink-0 w-[30vw] flex flex-col justify-center">
                <h2 className="text-base font-semibold leading-7 text-primary">{t('about_vision_headline')}</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Our Journey Begins</p>
           </div>
           {/* Scrolling Cards */}
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.key} className="flex-shrink-0 w-[30vw] bg-black/20 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-lg font-semibold leading-8 tracking-tight text-white">
                  {t(`about_vision_${pillar.key}_title`)}
                </p>
                <p className="mt-1 text-base leading-7 text-white/70">
                  {t(`about_vision_${pillar.key}_text`)}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
