import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const commitments = [
  {
    key: 'commitment1',
  },
  {
    key: 'commitment2',
  },
  {
    key: 'commitment3',
  },
  {
    key: 'commitment4',
  },
];

export default function CommitmentChecklist() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <motion.h2
                className="text-base font-semibold leading-7 text-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                {t('about_commitment_headline')}
              </motion.h2>
              <motion.p
                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Our Commitment
              </motion.p>
            </div>
          </div>
          <div className="-mt-12 p-12 lg:mt-0">
            <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={commitment.key}
                  className="relative pl-9"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                >
                  <dt className="inline font-semibold text-gray-900">
                    <motion.div
                      className="absolute top-1 left-1 flex h-5 w-5 items-center justify-center rounded-lg bg-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.2, type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <Check className="h-3 w-3 text-white" aria-hidden="true" />
                    </motion.div>
                    {t(`about_${commitment.key}_title`)}
                  </dt>
                  <dd className="inline"> {t(`about_${commitment.key}_text`)}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
