import { motion } from 'framer-motion';
import { MapPin, Clock, Mail } from 'lucide-react';
import LightRays from './LightRays';

export default function Location() {
  return (
    <section className="relative py-32 px-6 bg-neutral-900 overflow-hidden" id="location">
      <LightRays />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="serif text-5xl md:text-7xl font-light text-white mb-6">
            Visit Us
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Experience luxury at the pinnacle of the city
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="serif text-2xl text-white mb-2">Address</h3>
                  <p className="text-white/70 leading-relaxed">
                    One Sky Plaza<br />
                    Tower A, Level 88<br />
                    Financial District<br />
                    Singapore 018956
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="serif text-2xl text-white mb-2">Hours</h3>
                  <p className="text-white/70 leading-relaxed">
                    Monday - Saturday: 10:00 AM - 10:00 PM<br />
                    Sunday: 11:00 AM - 8:00 PM<br />
                    <span className="text-sm text-white/50 mt-2 inline-block">
                      Private appointments available 24/7
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="serif text-2xl text-white mb-2">Contact</h3>
                  <a
                    href="mailto:concierge@skycourt.com"
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    concierge@skycourt.com
                  </a>
                  <p className="text-white/70 mt-1">+65 6123 4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative h-[500px] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-white/30 mx-auto mb-4" strokeWidth={1} />
                <p className="text-white/50 text-sm">Interactive Map</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
