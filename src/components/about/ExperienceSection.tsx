// src/components/about/ExperienceSection.tsx

import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Car, Smile, Shield, Users } from 'lucide-react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const commitments = [
  { key: 'commitment1', icon: Car, image: '/experience_parking.webp' },
  { key: 'commitment2', icon: Smile, image: '/experience_kids_area.webp' },
  { key: 'commitment3', icon: Shield, image: '/experience_security.webp' },
  { key: 'commitment4', icon: Users, image: '/experience_management.webp' },
];

function CommitmentItem({ item, onInView, isActive }: { item: typeof commitments[0], onInView: () => void, isActive: boolean }) {
  const { t } = useTranslation();
  const { ref } = useInView({
    threshold: 0.6,
    onChange: (inView) => { if (inView) onInView(); },
  });
  const Icon = item.icon;

  return (
    <div ref={ref} className="relative pl-12 pb-20">
      <motion.div
        className="absolute top-1 left-1 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-300"
        animate={{
          backgroundColor: isActive ? 'hsl(var(--primary))' : 'rgba(0, 0, 0, 0.05)',
          color: isActive ? 'hsl(var(--primary-foreground))' : 'rgba(0, 0, 0, 0.4)',
        }} >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </motion.div>
      <p className="font-semibold text-gray-900 text-lg">{t(`about_experience_${item.key}_title`)}</p>
      <p className="mt-1 text-gray-600">{t(`about_experience_${item.key}_text`)}</p>
    </div>
  );
}

export default function ExperienceSection() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-base font-semibold leading-7 text-primary">{t('about_experience_headline')}</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Commitment</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-8">
          <div className="sticky top-24 self-start h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <AnimatePresence>
              <motion.img
                key={activeIndex}
                src={commitments[activeIndex].image}
                alt={t(`about_experience_${commitments[activeIndex].key}_title`)}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </AnimatePresence>
          </div>
          <div className="lg:pt-4">
            {commitments.map((commitment, index) => (
              <CommitmentItem
                key={commitment.key}
                item={commitment}
                isActive={activeIndex === index}
                onInView={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
