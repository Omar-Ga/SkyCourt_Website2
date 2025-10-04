import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const stories = [
  {
    type: 'service',
    title: 'Personal Shopping',
    description: 'Experience bespoke styling with our expert fashion consultants who curate selections tailored to your unique taste and lifestyle.',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    type: 'testimonial',
    quote: 'SkyCourt has redefined luxury shopping for me. The attention to detail and personalized service is simply unmatched.',
    author: 'Isabella Chen',
    location: 'Singapore',
  },
  {
    type: 'service',
    title: 'Valet & Concierge',
    description: 'Arrive in style with complimentary valet service and let our concierge team handle every detail of your visit.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    type: 'testimonial',
    quote: 'Every visit feels like a curated experience. The architecture, the brands, the service—everything is extraordinary.',
    author: 'Marcus Ashford',
    location: 'London',
  },
  {
    type: 'service',
    title: 'Private Events',
    description: 'Host exclusive gatherings in our elegant event spaces, featuring panoramic city views and world-class catering.',
    image: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1920',
  },
  {
    type: 'testimonial',
    quote: 'The perfect blend of sophistication and comfort. SkyCourt is where luxury truly lives.',
    author: 'Sofia Rousseau',
    location: 'Paris',
  },
];

export default function Stories() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % stories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[currentSlide];

  return (
    <section className="relative py-24 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.h2
          className="serif text-5xl md:text-7xl font-light text-black mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Stories
        </motion.h2>
        <motion.p
          className="text-lg text-black/60 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Services and experiences that elevate your visit
        </motion.p>
      </div>

      <div className="relative h-[70vh] min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentStory.type === 'service' ? (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                <img
                  src={currentStory.image}
                  alt={currentStory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-12 md:p-20">
                  <motion.h3
                    className="serif text-5xl md:text-7xl font-light text-white mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {currentStory.title}
                  </motion.h3>
                  <motion.p
                    className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {currentStory.description}
                  </motion.p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-black flex items-center justify-center p-12">
                <div className="max-w-4xl text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Quote className="w-16 h-16 text-white/20 mx-auto mb-8" />
                  </motion.div>
                  <motion.p
                    className="serif text-3xl md:text-5xl font-light text-white mb-12 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    "{currentStory.quote}"
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <p className="text-xl text-white font-medium mb-2">
                      {currentStory.author}
                    </p>
                    <p className="text-sm text-white/60 tracking-wider uppercase">
                      {currentStory.location}
                    </p>
                  </motion.div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-6">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-2">
            {stories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-8 bg-white' : 'w-1 bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
