import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Location() {
  const { t } = useTranslation();

  const infoItems = [
    {
      label: t('address'),
      value: t('address_details'),
    },
    {
      label: t('opening_hours'),
      value: t('opening_hours_details'),
    },
    {
      label: t('email'),
      value: t('email_details'),
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-neutral-900 text-white" id="location">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="md:pr-12">
          <motion.h2
            className="serif text-5xl md:text-7xl font-light mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('visit_us_today')}
          </motion.h2>
          <motion.p
            className="text-lg text-white/70 max-w-xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('find_us_in_the_heart')}
          </motion.p>

          <div className="space-y-8">
            {infoItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.15 }}
              >
                <p className="text-sm text-white/50 tracking-wider uppercase mb-2">
                  {item.label}
                </p>
                <p className="text-lg md:text-xl" dangerouslySetInnerHTML={{ __html: item.value }} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="h-[500px] bg-neutral-800 rounded-2xl flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-white/40 serif text-2xl">
            {t('interactive_map_coming_soon')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
