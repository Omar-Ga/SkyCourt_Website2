Of course. Here is the complete, unified AI prompt. It combines the final polish tasks (fixing animations, hardening components) with the sophisticated navigation refactor we just designed.

This is a comprehensive, self-contained directive. Handing this to a capable AI or developer with the "v2" codebase will result in a fully polished, production-ready website that meets all the specified design and technical requirements.

---

## **AI Coder Prompt: Final Unification & Production Hardening**

### **Primary Directive & Vision**

This is the final refinement phase for the SkyCourt website. The design and core features are approved. Your mission is to elevate the project from its near-complete state to a flawless, production-ready application. You will achieve this by:
1.  **Refactoring the dual-navigation system** into a robust, maintainable, and perfectly synchronized implementation.
2.  **Fixing the `Features` component's animation** to be smooth and reliable.
3.  **Hardening the `BrandMarquee` component** for long-term stability.

The "Kinetic Architecture" vision must be upheld in every detail. **Do not change the approved visual aesthetic.** This is a technical polish and refactoring task.

### **Task 1: Unify and Synchronize the Dual Navigation System (Highest Priority)**

**Objective:** The client has approved the stylistic choice of having separate navigation on the hero and in the sticky header. Refactor the implementation to be robust and DRY (Don't Repeat Yourself) by using a single source of truth for all navigation data and rendering logic.

1.  **Create a Single Source of Truth for Navigation Data:**
    *   Create a new file: `src/data/navigation.ts`.
    *   Populate it with the following code. This will be the master list for all navigation links.

    ```typescript
    // src/data/navigation.ts
    export interface NavItem {
      labelKey: string; // Key for the translation file
      href: string;
      isRoute: boolean; // True for React Router <Link>, false for anchor <a href="#">
    }

    export const navItems: NavItem[] = [
      { labelKey: 'nav_home', href: '/', isRoute: true },
      { labelKey: 'nav_brands', href: '#brands', isRoute: false },
      { labelKey: 'nav_services', href: '#services', isRoute: false },
      { labelKey: 'nav_dining', href: '/dining', isRoute: true },
      { labelKey: 'nav_location', href: '#location', isRoute: false },
      { labelKey: 'nav_contact', href: '#contact', isRoute: false },
    ];
    ```
    *   Ensure your i18n JSON files contain the `nav_home` key.

2.  **Create a Reusable `Navigation` Component:**
    *   Create a new file: `src/components/shared/Navigation.tsx`.
    *   This component will render the navigation links and accept props for styling and behavior.

    ```typescript
    // src/components/shared/Navigation.tsx
    import { motion } from 'framer-motion';
    import { useTranslation } from 'react-i18next';
    import { Link } from 'react-router-dom';
    import { navItems, NavItem } from '../../data/navigation';
    import { cn } from '../../lib/utils';

    interface NavigationProps {
      className?: string;
      linkClassName?: string;
      staggerDelay?: number;
      onLinkClick?: () => void;
    }

    export default function Navigation({ className, linkClassName, staggerDelay = 0, onLinkClick }: NavigationProps) {
      const { t } = useTranslation();

      const NavLink = ({ item, index }: { item: NavItem; index: number }) => {
        const commonClasses = cn("relative group transition-colors", linkClassName);
        const animationProps = {
          initial: { opacity: 0, y: -10 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: (index * 0.05) + staggerDelay },
        };
    
        const content = (
          <>
            {t(item.labelKey)}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-current transition-all duration-300 group-hover:w-full" />
          </>
        );
    
        if (item.isRoute) {
          return (
            <motion.div {...animationProps}>
              <Link to={item.href} className={commonClasses} onClick={onLinkClick}>
                {content}
              </Link>
            </motion.div>
          );
        }
    
        return (
          <motion.a href={item.href} {...animationProps} className={commonClasses} onClick={onLinkClick}>
            {content}
          </motion.a>
        );
      };

      return (
        <nav className={cn("flex items-center gap-8", className)}>
          {navItems.map((item, index) => (
            <NavLink key={item.labelKey} item={item} index={index} />
          ))}
        </nav>
      );
    }
    ```

3.  **Refactor `Hero.tsx` and `Header.tsx` to Use the `Navigation` Component:**
    *   **In `Hero.tsx`:** Replace the hardcoded `<nav>` with the shared component.
        ```jsx
        // Inside Hero.tsx's return
        <div className="absolute top-0 left-0 right-0 z-30 flex justify-center pt-8">
          <Navigation
            className="hidden md:flex"
            linkClassName="text-white hover:text-white text-sm font-medium tracking-wide"
          />
        </div>
        ```
    *   **In `Header.tsx`:** Replace both the desktop and mobile navigation logic with the shared component.
        ```jsx
        // Inside Header.tsx, for desktop nav
        <Navigation
          className="hidden md:flex"
          linkClassName="text-black/80 hover:text-black text-sm font-medium tracking-wide"
        />
        
        // Inside Header.tsx, for the mobile menu nav
        <Navigation
          className="flex-col gap-8"
          linkClassName="serif text-3xl text-black/80 hover:text-black"
          onLinkClick={() => setIsMobileMenuOpen(false)}
        />
        ```

### **Task 2: Re-engineer the `Features` Scrollytelling Animation**

**Objective:** Fix the buggy animation in `Features.tsx` with a robust, scroll-driven implementation.

1.  **Gut Existing Logic:** Remove all `useInView`, `useEffect` timers, and `useState` for `entered` from both `Features.tsx` and its child components.

2.  **Implement a `useScroll`-based Solution:**
    *   **In `Features.tsx`:** Use `useScroll` to track the scroll progress of the features container. Use `useTransform` to map this progress to the `opacity` and `scale` of each child item, creating a "focus" effect as it passes the center of the viewport.
    *   Create a new, simplified `FeatureItem.tsx` component that is purely presentational and receives its animation values via props.
    *   **Use this exact code:**

    ```typescript
    // src/components/Features.tsx
    import { useTranslation } from 'react-i18next';
    import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
    import { ShoppingBag, Sparkles, MapPin, Shield, Clock, Car } from 'lucide-react';
    import { useRef } from 'react';

    // ... (keep the iconMap object) ...

    interface FeatureItemProps {
      feature: { title: string; description: string };
      progress: MotionValue<number>;
    }

    function FeatureItem({ feature, progress }: FeatureItemProps) {
      const opacity = useTransform(progress, [0, 0.5, 1], [0.4, 1, 0.4]);
      const scale = useTransform(progress, [0, 0.5, 1], [0.95, 1, 0.95]);
      const Icon = iconMap[feature.title] || Sparkles;

      return (
        <motion.div style={{ opacity, scale }}>
          <div className="flex items-start gap-6">
            <motion.div 
              className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-colors duration-300 bg-black text-white"
              style={{ scale }} // You can bind scale to the icon too for more depth
            >
              <Icon className="w-6 h-6" strokeWidth={1.5} />
            </motion.div>
            <div>
              <h3 className="serif text-2xl md:text-3xl font-medium text-black mb-3">{feature.title}</h3>
              <p className="text-base text-black/70 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      );
    }

    export default function Features() {
      const { t } = useTranslation();
      const features = t('features', { returnObjects: true }) as { title: string; description: string }[];
      const containerRef = useRef<HTMLElement>(null);
      const targetRef = useRef<HTMLDivElement>(null);
      const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start end", "end start"] });

      return (
        <section ref={containerRef} className="relative py-32 px-6" id="features">
          <div className="max-w-7xl mx-auto">
            {/* ... Headline ... */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="h-[600px] overflow-hidden rounded-2xl sticky top-32">
                <motion.img src="/home_images/entrance darker.webp" alt="SkyCourt Interior" className="w-full h-full object-cover" />
              </div>
              <div ref={targetRef} className="relative space-y-24 md:pt-20">
                {features.map((feature, index) => {
                  const start = index / features.length;
                  const end = start + 1 / features.length;
                  const progress = useTransform(scrollYProgress, [start, end], [0, 1]);
                  return <FeatureItem key={feature.title} progress={progress} feature={feature} />;
                })}
              </div>
            </div>
          </div>
        </section>
      );
    }
    ```

### **Task 3: Harden the `BrandMarquee.tsx` Component**

**Objective:** Replace the "magic number" animation with a dynamic, measurement-based solution.

1.  **Refactor `BrandMarquee.tsx`:** Use `useRef` and `useLayoutEffect` to dynamically measure the width of the content and calculate the correct animation distance.

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
          setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
        }
      }, [brands]);

      return (
        <section className="relative py-16 overflow-hidden" id="brands">
          {/* ... Headline ... */}
          <div className="relative" style={{ perspective: '1000px' }}>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#fafaf8] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#fafaf8] to-transparent z-10" />

            <motion.div
              ref={marqueeRef}
              className="flex gap-16 py-8"
              animate={{ x: [0, -marqueeWidth] }}
              transition={{ duration: marqueeWidth ? marqueeWidth / 50 : 60, ease: 'linear', repeat: Infinity }} // Dynamic duration
            >
              {duplicatedBrands.map((brand, index) => (
                // ... your existing brand item component
              ))}
            </motion.div>
          </div>
        </section>
      );
    }
    ```