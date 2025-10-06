
---

## **AI Coder Prompt: The Final Polish - RTL Hardening & Animation Perfection**

### **Primary Directive**

This is the final polish and hardening phase. The client's aesthetic choices are locked in. Your mission is to address all remaining technical inconsistencies and bugs, with a primary focus on perfecting the Right-to-Left (RTL) experience for Arabic-speaking users and re-engineering key animations for robustness and visual perfection.

### **Task 1: Comprehensive RTL (Arabic) Bug Fixes**

**Objective:** The Arabic version of the site has several visual and interactive bugs due to the LTR-centric nature of many CSS properties. You will audit and fix these issues across the entire application.

1.  **Embrace Logical Properties:**
    *   **The Problem:** Properties like `left`, `right`, `margin-left`, `padding-right`, and `transform: translateX()` are physical. They don't automatically flip in RTL mode, causing layouts to break.
    *   **The Mandate:** Audit your components and replace physical properties with their logical equivalents wherever possible.
        *   `left` becomes `inset-inline-start`.
        *   `right` becomes `inset-inline-end`.
        *   `margin-left` -> `ms-` (or `ml-` in Tailwind, which often handles this automatically if `dir` is set).
        *   `padding-right` -> `pe-`.
        *   For transforms, you will need conditional logic.

2.  **Fix Component-Specific RTL Bugs:**

    *   **`DiningTeaser.tsx` & `Stories.tsx` (Navigation Arrows):**
        *   **Problem:** The `ArrowRight` icon on buttons and the `ChevronLeft`/`ChevronRight` navigation arrows do not flip automatically in Arabic. An arrow pointing "next" should always point in the reading direction.
        *   **Action:** In these components, use the `i18n.language` to conditionally render the correct icon.
        ```jsx
        // Example for a "next" button
        const { i18n } = useTranslation();
        // ...
        <button>
          {t('next')}
          {i18n.language === 'ar' ? <ChevronLeft /> : <ChevronRight />}
        </button>
        ```
        Apply this logic to the `useDrag` swipe handler in `Stories.tsx` as well, so a swipe "forward" is a swipe to the left in Arabic.

    *   **`Location.tsx` (Mixed-Direction Text):**
        *   **Problem:** Phone numbers and email addresses are LTR content. When placed within an RTL paragraph, they can wrap incorrectly and look broken.
        *   **Action:** In `Location.tsx`, wrap any inherently LTR content (like the phone number and email) in a `<span>` and give it a `dir="ltr"` attribute to ensure it's always rendered correctly.
        ```jsx
        // Example in Location.tsx
        <p className="text-lg md:text-xl">
          <span dir="ltr">{eatery.phone}</span>
        </p>
        ```

### **Task 2: Re-engineer `Features.tsx` with Perfected Animation**

**Objective:** The scrollytelling animation is a core feature but is not working as intended. You will rebuild it to be robust, smooth, and include the client's desired "active item" highlight and animated underline.

1.  **Use this definitive, production-ready code.** It replaces the buggy `useInView` logic with a more reliable `useScroll` implementation that correctly tracks the active item.

    **File to be created/updated: `src/components/FeatureItem.tsx`**
    ```typescript
    // src/components/FeatureItem.tsx
    import { motion, type MotionValue } from 'framer-motion';
    import { Sparkles, type LucideProps } from 'lucide-react';

    // Assuming iconMap is defined and exported from Features.tsx
    import { iconMap } from './Features';

    interface FeatureItemProps {
      feature: { title: string; description: string };
      isActive: boolean;
    }

    export function FeatureItem({ feature, isActive }: FeatureItemProps) {
      const Icon = iconMap[feature.title] || Sparkles;

      const itemVariants = {
        hidden: { opacity: 0.5, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
      };

      return (
        <motion.div variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ amount: 0.4 }}>
          <div className="flex items-start gap-6">
            <motion.div
              className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
              animate={{
                backgroundColor: isActive ? 'hsl(var(--primary))' : '#000000',
                color: isActive ? 'hsl(var(--primary-foreground))' : '#FFFFFF',
                scale: isActive ? 1.1 : 1,
              }}
            >
              <Icon className="w-6 h-6" strokeWidth={1.5} />
            </motion.div>
            <div className="relative pt-1">
              <h3 className="serif text-2xl md:text-3xl font-medium text-black mb-3">
                {feature.title}
              </h3>
              <p className="text-base text-black/70 leading-relaxed">
                {feature.description}
              </p>
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-primary"
                animate={{ width: isActive ? '100%' : '0%' }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      );
    }
    ```

    **File to be updated: `src/components/Features.tsx`**
    ```typescript
    // src/components/Features.tsx
    import { useTranslation } from 'react-i18next';
    import { motion, useScroll, useTransform, motionValueEvent } from 'framer-motion';
    import { ShoppingBag, Sparkles, MapPin, Shield, Clock, Car } from 'lucide-react';
    import { useRef, useState } from 'react';
    import { FeatureItem } from './FeatureItem';

    export const iconMap: { [key: string]: React.ElementType } = { /* ... as before ... */ };

    export default function Features() {
      const { t } = useTranslation();
      const features = t('features', { returnObjects: true }) as { title: string; description: string }[];
      
      const targetRef = useRef<HTMLDivElement>(null);
      const [activeIndex, setActiveIndex] = useState(0);

      const { scrollYProgress } = useScroll({
          target: targetRef,
          offset: ["start center", "end center"]
      });

      const activeIndexValue = useTransform(scrollYProgress, (progress) => {
          return Math.min(features.length - 1, Math.floor(progress * features.length));
      });

      motionValueEvent(activeIndexValue, "change", (latest) => {
          setActiveIndex(latest);
      });

      return (
        <section className="relative py-32 px-6" id="features">
          <div className="max-w-7xl mx-auto">
            {/* ... Headline Markup ... */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="h-[600px] overflow-hidden rounded-2xl sticky top-32">
                <img src="/home_images/entrance darker.webp" alt="SkyCourt Interior" className="w-full h-full object-cover" />
              </div>
              <div ref={targetRef} className="relative space-y-24 md:pt-20">
                {features.map((feature, index) => (
                  <FeatureItem
                      key={feature.title}
                      feature={feature}
                      isActive={activeIndex === index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    }
    ```

### **Task 3: Harden the `BrandMarquee.tsx` Component**

**Objective:** Replace the fragile "magic number" animation with a dynamic, measurement-based solution for a truly infinite scroll.

1.  **Refactor `BrandMarquee.tsx`:** Use `useRef` and `useLayoutEffect` to measure the width of the scrolling content and dynamically calculate the animation distance.

    ```typescript
    // src/components/BrandMarquee.tsx
    import { useRef, useState, useLayoutEffect } from 'react';
    import { motion } from 'framer-motion';
    import { useTranslation } from 'react-i18next';

    export default function BrandMarquee() {
      const { t } = useTranslation();
      const brands = t('brands', { returnObjects: true }) as { name: string }[];
      const duplicatedBrands = [...brands, ...brands];
      
      const marqueeRef = useRef<HTMLDivElement>(null);
      const [marqueeWidth, setMarqueeWidth] = useState(0);

      useLayoutEffect(() => {
        if (marqueeRef.current) {
          // Measure the width of the first half of the items.
          const halfWidth = marqueeRef.current.scrollWidth / 2;
          setMarqueeWidth(halfWidth);
        }
      }, [brands, t]); // Re-measure if brands or language change

      return (
        <section className="relative py-16 overflow-hidden" id="brands">
          {/* ... Headline ... */}
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafaf8] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafaf8] to-transparent z-10" />

            {marqueeWidth > 0 && ( // Only render when measured to prevent animation jump
              <motion.div
                ref={marqueeRef}
                className="flex gap-16 py-8"
                animate={{ x: [0, -marqueeWidth] }}
                transition={{ 
                  duration: marqueeWidth / 50, // Dynamic duration based on content width
                  ease: 'linear', 
                  repeat: Infinity 
                }}
              >
                {duplicatedBrands.map((brand, index) => (
                  <div key={index} className="flex-shrink-0">
                    <div className="bg-white/80 backdrop-blur-sm border border-black/10 rounded-2xl px-12 py-8 shadow-lg">
                      <span className="serif text-2xl font-medium text-black tracking-wider whitespace-nowrap">
                        {brand.name}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      );
    }
    ```

### **Task 4: Fix Missing Content in `Stories.tsx`**

**Objective:** The `services` slides in the `Stories` component are missing their images because the image paths are not defined in the i18n files.

1.  **Update Translation Files:** Add the `image` and optional `objectPosition` keys to the `services` array in both `en/translation.json` and `ar/translation.json`.

    **In `src/locales/en/translation.json`:**
    ```json
    // ... inside "services": [ ... ]
    { "title": "Safe & Fun Kids Area", "description": "...", "image": "/home_images/kids_area.webp" },
    { "title": "24-Hour Supermarket", "description": "...", "image": "/home_images/supermarket.webp", "objectPosition": "top" },
    { "title": "Cafes & Eateries", "description": "...", "image": "/home_images/open_setting_edited.webp" }
    ```
    **In `src/locales/ar/translation.json`:**
    ```json
    // ... inside "services": [ ... ]
    { "title": "منطقة أطفال آمنة وممتعة", "description": "...", "image": "/home_images/kids_area.webp" },
    { "title": "سوبر ماركت 24 ساعة", "description": "...", "image": "/home_images/supermarket.webp", "objectPosition": "top" },
    { "title": "مقاهي ومطاعم", "description": "...", "image": "/home_images/open_setting_edited.webp" }
    ```

2.  **Update `Stories.tsx`:** Ensure the component correctly reads and applies the `image` and `objectPosition` properties to the `<img>` tag for service slides.

This targeted set of fixes will address the remaining bugs, elevate the quality of your key animations, and ensure a flawless experience for all users, regardless of language.