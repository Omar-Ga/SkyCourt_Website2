import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ClipboardList, Cog, Star, ArrowRight } from 'lucide-react';
import React from 'react';

const diagramParts = [
  {
    key: 'box1',
    icon: ClipboardList,
  },
  {
    key: 'box2',
    icon: Cog,
  },
  {
    key: 'box3',
    icon: Star,
  },
];

export default function LegacyDiagram() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.h2
            className="text-base font-semibold leading-7 text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            {t('about_legacy_headline')}
          </motion.h2>
          <motion.p
            className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            How We Do It
          </motion.p>
        </div>

        <div className="relative mt-20 flex items-center justify-center">
          <div className="grid grid-cols-1 items-center gap-y-16 md:grid-cols-5">
            {diagramParts.map((part, index) => (
              <React.Fragment key={part.key}>
                <motion.div
                  className="flex flex-col items-center rounded-lg bg-gray-50 p-8 text-center shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.4 }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    <part.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {t(`about_${part.key}_title`)}
                  </p>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    {t(`about_${part.key}_text`)}
                  </p>
                </motion.div>
                {index < diagramParts.length - 1 && (
                  <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.4 }}
                  >
                    <ArrowRight className="h-8 w-8 text-gray-400 mx-auto" />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
