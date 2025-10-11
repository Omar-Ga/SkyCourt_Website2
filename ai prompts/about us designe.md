Of course. Here is a complete and detailed AI prompt plan designed to transform your "About Us" page into a world-class, interactive digital experience.

This plan is structured as a single, comprehensive prompt. You can use it as a master guide for development, breaking it down piece by piece. It covers the narrative, content, UI/UX, animations, and the exact code implementation.

-----

### **Master AI Prompt: The SkyCourt "About Us" Interactive Journey**

**Persona:** You are an expert full-stack developer and UI/UX designer. Your specialty is creating premium, animation-rich web experiences using **React**, **Framer Motion**, and **Tailwind CSS**.

**Project Goal:** Your task is to completely redesign and re-implement the "About Us" page for the SkyCourt Mall website. The objective is to transform the static page into a visually stunning, interactive "scrollytelling" narrative called **"The SkyCourt Journey."** This journey will guide the user through the mall's past (The Vision), present (The Experience), and future (The Legacy) using sophisticated animations and a seamless user flow.

-----

### **Part 1: The Narrative & Content Strategy**

We will restructure the page into three distinct sections. All previous content will be repurposed and enhanced to fit this new, engaging narrative.

#### **Section 1: The Vision (Past)**

  * **Concept:** A horizontally scrolling timeline that reveals the foundational pillars of SkyCourt. As the user scrolls down the page, cards will slide in from the side, telling the story of the mall's inception.
  * **Content Keys:** `about_vision_headline`, `about_vision_pillar1_title`, `about_vision_pillar1_text`, etc.

#### **Section 2: The Experience (Present)**

  * **Concept:** A "scrollytelling" feature. A large, beautiful image of the mall will remain fixed on one side of the screen while a list of commitments scrolls on the other. As each commitment comes into view, it will become highlighted, and the image will smoothly cross-fade to a new one that visually represents that commitment.
  * **Content Keys:** `about_experience_headline`, `about_experience_commitment1_title`, `about_experience_commitment1_text`, etc.

#### **Section 3: The Legacy (Future)**

  * **Concept:** A visually deep, parallax section. Three semi-transparent cards representing the core operational strategies will be layered. As the user scrolls, the cards will move at different speeds, creating a 3D effect that signifies a multi-layered approach to a lasting legacy.
  * **Content Keys:** `about_legacy_headline`, `about_legacy_box1_title`, `about_legacy_box1_text`, etc.

-----

### **Part 2: Text & Translation Updates**

Update the following translation files with this new, reorganized content structure.

#### **File to Edit: `src/locales/en/translation.json`**

*Replace all existing `about_*` keys with this new block:*

```json
"about_title": "Our Vision",
"about_headline": "The largest commercial destination on the North Coast, crafting an unparalleled experience.",

"about_vision_headline": "The Art of Selection",
"about_vision_pillar1_title": "The Vision (2007)",
"about_vision_pillar1_text": "Founded to create an architectural and experiential landmark on the North Coast.",
"about_vision_pillar2_title": "The Curation",
"about_vision_pillar2_text": "A gallery of the world's most coveted brands, selected with an unwavering standard of quality.",
"about_vision_pillar3_title": "The Promise",
"about_vision_pillar3_text": "Impeccable service, serene design, and a commitment to your complete satisfaction.",

"about_experience_headline": "An Unwavering Commitment to You",
"about_experience_commitment1_title": "Convenient & Secure Parking",
"about_experience_commitment1_text": "A capacity of over 1000 cars, managed by a professional team to ensure distinguished service for our visitors.",
"about_experience_commitment2_title": "Safe & Fun Kids' Area",
"about_experience_commitment2_text": "Managed by a professional and trained team, ensuring all games are completely safe for children.",
"about_experience_commitment3_title": "24/7 Professional Security",
"about_experience_commitment3_text": "Our trained security team ensures you can shop and stroll with absolute freedom and peace of mind.",
"about_experience_commitment4_title": "Expert Management",
"about_experience_commitment4_text": "A professional team that aims to achieve the highest levels of visitor satisfaction using modern methods.",

"about_legacy_headline": "Investing in a Legacy",
"about_legacy_box1_title": "Strategic Planning",
"about_legacy_box1_text": "A foundation of market insight and long-term vision.",
"about_legacy_box2_title": "Precise Execution",
"about_legacy_box2_text": "A highly qualified team committed to quality standards.",
"about_legacy_box3_title": "Customer Satisfaction",
"about_legacy_box3_text": "The ultimate goal that drives every action."
```

#### **File to Edit: `src/locales/ar/translation.json`**

*Replace all existing `about_*` keys with this new block:*

```json
"about_title": "رؤيتنا",
"about_headline": "أكبر وجهة تجارية في الساحل الشمالي، نصنع تجربة لا مثيل لها.",

"about_vision_headline": "فن الاختيار",
"about_vision_pillar1_title": "الرؤية (2007)",
"about_vision_pillar1_text": "تأسست برؤية لإنشاء معلم معماري وتجريبي في الساحل الشمالي.",
"about_vision_pillar2_title": "التنظيم",
"about_vision_pillar2_text": "معرض لأكثر العلامات التجارية المرغوبة في العالم، تم اختيارها بمعايير جودة لا تتزعزع.",
"about_vision_pillar3_title": "التجربة",
"about_vision_pillar3_text": "خدمة لا تشوبها شائبة، تصميم هادئ، والتزام برضاك الكامل.",

"about_experience_headline": "التزام لا يتزعزع تجاهك",
"about_experience_commitment1_title": "مواقف سيارات آمنة ومريحة",
"about_experience_commitment1_text": "قدرة استيعابية تتجاوز 1000 سيارة، يديرها فريق متخصص لضمان تقديم خدمة مميزة للزوار.",
"about_experience_commitment2_title": "منطقة ألعاب آمنة للأطفال",
"about_experience_commitment2_text": "تُدار عن طريق فريق محترف ومدرب بأحدث الأساليب، وجميع الألعاب آمنة تمامًا على الأطفال.",
"about_experience_commitment3_title": "أمان على مدار الساعة",
"about_experience_commitment3_text": "فريقنا الأمني المدرب والمحترف يتيح للزوار التسوق والتنزه بحرية مطلقة داخل أرجاء المول.",
"about_experience_commitment4_title": "إدارة احترافية",
"about_experience_commitment4_text": "فريق إداري محترف يهدف الى تحقيق اعلى مستويات رضا الزوار وذلك باستخدام أحدث الطرق الإدارية.",

"about_legacy_headline": "الاستثمار في إرث",
"about_legacy_box1_title": "التخطيط الاستراتيجي",
"about_legacy_box1_text": "أساس من رؤية السوق والرؤية طويلة الأمد.",
"about_legacy_box2_title": "تنفيذ دقيق",
"about_legacy_box2_text": "فريق مؤهل تأهيلاً عالياً ملتزم بمعايير الجودة.",
"about_legacy_box3_title": "رضا العملاء",
"about_legacy_box3_text": "الهدف النهائي الذي يدفع كل عمل."
```

-----

### **Part 3: Asset Requirements**

Place the following new image assets into the `/public/` directory.

  * `experience_parking.webp` (Image of the mall's parking facility)
  * `experience_kids_area.webp` (Image of the children's play area)
  * `experience_security.webp` (Image conveying safety and a welcoming atmosphere)
  * `experience_management.webp` (Image of professional staff/the mall interior)
  * `legacy_background.webp` (A subtle, high-class architectural or texture image for the parallax background)

-----

### **Part 4: Code Implementation Plan**

Create and modify the following files to build the new page structure.

#### **1. Update the Main Page Component**

  * **File to Edit:** `src/pages/About.tsx`
  * **Action:** Replace the body of the `About` component. Remove the old components (`OurJourney`, `CommitmentChecklist`, `LegacyDiagram`) and import the three new section components.

<!-- end list -->

```tsx
// src/pages/About.tsx

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
// NEW: Import the new section components
import VisionSection from '../components/about/VisionSection';
import ExperienceSection from '../components/about/ExperienceSection';
import LegacySection from '../components/about/LegacySection';

export default function About() {
  const { t } = useTranslation();
  const headline = t('about_headline');

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      <Header show={true} />
      <main>
        {/* This is the top hero section, it remains the same */}
        <section className="relative h-screen w-full">
          <img
            src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg"
            alt="SkyCourt Mall Architecture"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <motion.h1 /* ... same as before ... */ >{t('about_title')}</motion.h1>
            <motion.h2 /* ... same as before ... */ >
                {/* ... mapping logic same as before ... */}
            </motion.h2>
          </div>
        </section>

        {/* NEW: Render the new sections in order */}
        <VisionSection />
        <ExperienceSection />
        <LegacySection />

      </main>
      <Footer />
    </div>
  );
}
```

#### **2. Create the "Vision" Horizontal Scroll Section**

  * **New File:** `src/components/about/VisionSection.tsx`
  * **Action:** Create the file and add the following code. This component uses Framer Motion's `useScroll` and `useTransform` hooks to create a horizontal scrolling effect as the user scrolls vertically.

<!-- end list -->

```tsx
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
```

#### **3. Create the "Experience" Scrollytelling Section**

  * **New File:** `src/components/about/ExperienceSection.tsx`
  * **Action:** Create the file and add the code for the interactive scrollytelling component. This is the implementation we discussed previously.

<!-- end list -->

```tsx
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
```

#### **4. Create the "Legacy" Parallax Section**

  * **New File:** `src/components/about/LegacySection.tsx`
  * **Action:** Create the file and add the following code. This component creates a parallax effect by transforming the `y` position of each card at a different rate based on the overall scroll progress of the section.

<!-- end list -->

```tsx
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
```