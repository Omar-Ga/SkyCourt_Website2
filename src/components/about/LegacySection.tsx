// src/components/about/LegacySection.tsx

import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ClipboardList, Cog, Star } from 'lucide-react';
import { useRef } from 'react';

const legacyParts = [
  { key: 'box1', icon: ClipboardList, yRange: [0, -150] },
  { key: 'box2', icon: Cog, yRange: [0, -75] },
  { key: 'box3', icon: Star, yRange: [0, 0] }, // Stays in place
];

function LegacyCard({ part, scrollYProgress }: { part: typeof legacyParts[0], scrollYProgress: any }) {
    const { t } = useTranslation();
    const y = useTransform(scrollYProgress, [0, 1], part.yRange);
    const Icon = part.icon;

    return (
        <motion.div style={{ y }} className="absolute inset-x-0 mx-auto w-full max-w-3xl">
            <div className="bg-white/60 backdrop-blur-md border border-black/10 rounded-2xl p-8 text-center shadow-lg">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {t(`about_legacy_${part.key}_title`)}
                </p>
                <p className="mt-1 text-base leading-7 text-gray-600">
                    {t(`about_legacy_${part.key}_text`)}
                </p>
            </div>
        </motion.div>
    );
}

export default function LegacySection() {
  const { t } = useTranslation();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section ref={targetRef} className="relative h-[150vh] py-24 sm:py-32 overflow-hidden">
        <div className="sticky top-0 h-screen w-full">
            <img src="/legacy_background.webp" className="absolute inset-0 w-full h-full object-cover opacity-30" alt=""/>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />

            <div className="relative h-full flex flex-col items-center justify-center">
                 {/* Section Title */}
                <div className="text-center mb-32">
                    <h2 className="text-base font-semibold leading-7 text-primary">{t('about_legacy_headline')}</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How We Do It</p>
                </div>

                {/* Parallax Cards */}
                <div className="relative w-full h-1/2">
                    {legacyParts.map((part) => (
                        <LegacyCard key={part.key} part={part} scrollYProgress={scrollYProgress} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}
