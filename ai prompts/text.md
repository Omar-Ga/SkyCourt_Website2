---

## **AI Coder Prompt: SkyCourt Website - Production Polish & Content Integration**

### **Project Phase: Iteration & Finalization**

**Context:** The visual design and component architecture ("v2") are approved and serve as our foundation. This phase is strictly focused on replacing all placeholder content with the final production content, implementing full internationalization (i18n), and addressing critical usability/cleanup tasks. **Do not alter the existing design, layout, or animation styles.**

### **Task 1: Full Internationalization (i18n) and Content Integration (Highest Priority)**

1.  **Integrate `react-i18next`:** Set up and configure `react-i18next` and `i18next-browser-languagedetector` within the project.
2.  **Populate Translation Files:**
    *   Create `src/locales/en/translation.json` and `src/locales/ar/translation.json`.
    *   Copy the full JSON content provided in the **"Content Source of Truth"** section below into these respective files.
3.  **Implement Language Logic:**
    *   In `App.tsx` (or a similar root component), add a `useEffect` hook to dynamically set the `dir` attribute on the `<html>` element to `ltr` or `rtl` based on the current `i18n.language`.
    *   In the `Header.tsx` component, add a language switcher button. On click, it should toggle the language between `en` and `ar`.
4.  **Replace All Hardcoded Text:**
    *   Go through every component (`Hero.tsx`, `Features.tsx`, `BrandMarquee.tsx`, `RotatingHeadline.tsx`, `Stories.tsx`, `Location.tsx`, `Footer.tsx`).
    *   Import the `useTranslation` hook in each component.
    *   Replace every single hardcoded string (e.g., "Curated Luxury," "Isabella Chen," brand names like "GUCCI") with the corresponding key from the translation files (e.g., `t('features.0.title')`, `t('testimonials.0.name')`).
    *   For the `BrandMarquee`, map over the `brands` array from the `translation.json` file. The image path will need to be constructed based on the brand name (e.g., `/brands/{brand_name_lowercase_with_dashes}.webp`). You will need to create a mapping or a utility function to match the i18n brand names to the existing image file names from the previous project.
    *   For the `Stories` component, map over both the `services` and `testimonials` arrays from the JSON file to dynamically generate the slides.

### **Task 2: Critical Usability & Accessibility Fix**

1.  **Modify `CustomCursor.tsx`:**
    *   Locate and remove the `cursor: none;` style from `index.css`.
    *   The native operating system cursor **must** remain visible at all times.
    *   The custom cursor component should act as a visual enhancement that follows the native cursor, not as a replacement for it.

### **Task 3: Production Cleanup & Metadata**

1.  **Update `index.html`:**
    *   Change the `<title>` tag to "SkyCourt - Luxury Shopping Destination".
    *   Add appropriate `<meta>` tags for description, keywords, and Open Graph (og:title, og:description, og:image) to represent the SkyCourt brand for social sharing.
2.  **Remove Developer Artifacts:**
    *   Delete the entire `.bolt/` directory and all its contents.
3.  **Correct Project Naming:**
    *   In `package.json`, change the `"name"` field from `"vite-react-typescript-starter"` to `"skycourt-website"`.

---

### **Content Source of Truth (For Task 1)**

*(This section contains the same JSON objects from the previous prompt for easy copy-pasting into the new `translation.json` files.)*

#### `src/locales/en/translation.json`
```json
{
  "home": "Home",
  "why_choose_skycourt": "Why Choose SkyCourt?",
  "experience_shopping": "Experience shopping like never before with our world-class amenities and services",
  "features": [
    { "title": "Premium Shopping", "description": "Discover over 50 premium brands and local favorites all under one roof" },
    { "title": "Prime Location", "description": "Strategically located in one of the city's most luxurious and accessible districts" },
    { "title": "Always Open", "description": "Experience SkyCourt 24/7, ensuring convenience at any time" },
    { "title": "Safe Environment", "description": "24/7 security and family-friendly atmosphere for peace of mind" },
    { "title": "Modern Amenities", "description": "Enjoy a comfortable and convenient experience with our modern facilities" },
    { "title": "Convenient Parking", "description": "Dedicated and easily accessible parking spaces for all our visitors" }
  ],
  "rotating_texts": [
    "50+ premium shops and brands.",
    "all your favorite brands.",
    "unforgettable moments."
  ],
  "iconic_brands": "Iconic brands at SkyCourt",
  "brands": [
    { "name": "Ammar Auto" }, { "name": "B-Tech" }, { "name": "Balbaa Village" }, { "name": "Blaban" }, { "name": "Bright Store" }, { "name": "Dream 2000" }, { "name": "Fathalla Market" }, { "name": "Ftirty" }, { "name": "Donia El Gambary" }, { "name": "Hamed El Basiony" }, { "name": "Hans" }, { "name": "Hardees" }, { "name": "KFC" }, { "name": "Khatab" }, { "name": "Pizza Hut" }, { "name": "Ragab Perfumes" }, { "name": "Raya" }, { "name": "Smart Furniture" }, { "name": "El Tahrir" }, { "name": "Zizo & Lavish" }
  ],
  "services": [
    { "title": "Safe & Fun Kids Area", "description": "Enjoy peace of mind with our fully enclosed and supervised play space for your children." },
    { "title": "24-Hour Supermarket", "description": "All your needs, anytime. Our supermarket is open 24/7 for your convenience." },
    { "title": "Cafes & Eateries", "description": "From a quick coffee to a relaxing lunch, choose from our diverse selection of cafes." }
  ],
  "testimonials": [
    { "name": "Sarah Ahmed", "rating": 5, "comment": "SkyCourt has everything I need in one place. The kids area is fantastic and the variety of stores is impressive!", "location": "Cairo" },
    { "name": "Mohamed Hassan", "rating": 5, "comment": "Great shopping experience with excellent food options. The 24-hour supermarket is incredibly convenient.", "location": "Giza" },
    { "name": "Fatima Ali", "rating": 5, "comment": "Clean, safe, and well-organized. Perfect for family shopping trips. The parking is always available too!", "location": "Alexandria" }
  ],
  "visit_us_today": "Visit Us Today",
  "find_us_in_the_heart": "Find us in the heart of the city - easily accessible by car or public transport",
  "address": "Address",
  "address_details": "sidi abdelrehman - al sahel al shamaly<br />alexandria road - the 137 kilo road",
  "opening_hours": "Opening Hours",
  "opening_hours_details": "Open 24/7 Saturday through Friday",
  "email": "Email",
  "email_details": "info@skycourt.com",
  "interactive_map_coming_soon": "Interactive Map Coming Soon"
}
```

#### `src/locales/ar/translation.json`
```json
{
  "home": "الرئيسية",
  "why_choose_skycourt": "لماذا تختار سكاي كورت؟",
  "experience_shopping": "جرب التسوق كما لم يحدث من قبل مع وسائل الراحة والخدمات ذات المستوى العالمي",
  "features": [
    { "title": "تسوق فاخر", "description": "اكتشف أكثر من 50 علامة تجارية متميزة ومفضلة محلية تحت سقف واحد" },
    { "title": "موقع متميز", "description": "يقع في موقع استراتيجي في أحد أكثر أحياء المدينة فخامة وسهولة في الوصول إليه" },
    { "title": "مفتوح دائمًا", "description": "جرب سكاي كورت 24/7 ، مما يضمن الراحة في أي وقت" },
    { "title": "بيئة آمنة", "description": "أمن على مدار 24/7 وأجواء مناسبة للعائلة لراحة البال" },
    { "title": "وسائل راحة حديثة", "description": "استمتع بتجربة مريحة ومناسبة مع مرافقنا الحديثة" },
    { "title": "مواقف سيارات مريحة", "description": "مواقف سيارات مخصصة ويسهل الوصول إليها لجميع زوارنا" }
  ],
  "rotating_texts": [
    "50+ علامة تجارية",
    "50+ مركزًا",
    "تجربة لا تُنسى"
  ],
  "iconic_brands": "علامات تجارية مميزة في سكاي كورت",
  "brands": [
    { "name": "عمار أوتو" }, { "name": "بي-تك" }, { "name": "قرية بلبع" }, { "name": "بلبن" }, { "name": "برايت ستور" }, { "name": "دريم 2000" }, { "name": "فتح الله ماركت" }, { "name": "فطيرتي" }, { "name": "دنيا الجمبري" }, { "name": "حامد البسيوني" }, { "name": "هانس" }, { "name": "هارديز" }, { "name": "كنتاكي" }, { "name": "خطاب" }, { "name": "بيتزا هت" }, { "name": "رجب للعطور" }, { "name": "راية" }, { "name": "سمارت فرنتشر" }, { "name": "التحرير" }, { "name": "زيزو و لافيش" }
  ],
  "services": [
    { "title": "منطقة أطفال آمنة وممتعة", "description": "استمتع براحة البال مع مساحة اللعب المغلقة بالكامل والمشرف عليها لأطفالك." },
    { "title": "سوبر ماركت 24 ساعة", "description": "كل احتياجاتك في أي وقت. سوبر ماركتنا مفتوح 24/7 لراحتك." },
    { "title": "مقاهي ومطاعم", "description": "من فنجان قهوة سريع إلى غداء مريح ، اختر من بين مجموعتنا المتنوعة من المقاهي." }
  ],
  "testimonials": [
    { "name": "سارة أحمد", "rating": 5, "comment": "سكاي كورت لديها كل ما أحتاجه في مكان واحد. منطقة الأطفال رائعة وتنوع المتاجر مثير للإعجاب!", "location": "القاهرة" },
    { "name": "محمد حسن", "rating": 5, "comment": "تجربة تسوق رائعة مع خيارات طعام ممتازة. السوبر ماركت الذي يعمل على مدار 24 ساعة مناسب بشكل لا يصدق.", "location": "الجيزة" },
    { "name": "فاطمة علي", "rating": 5, "comment": "نظيف وآمن ومنظم جيدًا. مثالي لرحلات التسوق العائلية. وقوف السيارات متاح دائمًا أيضًا!", "location": "الإسكندرية" }
  ],
  "visit_us_today": "زورونا اليوم",
  "find_us_in_the_heart": "تجدنا في قلب المدينة - يمكن الوصول إليه بسهولة بالسيارة أو وسائل النقل العام",
  "address": "العنوان",
  "address_details": "سيدي عبد الرحمن - الساحل الشمالي<br />طريق الإسكندرية - الكيلو 137",
  "opening_hours": "ساعات العمل",
  "opening_hours_details": "مفتوح 24/7 من السبت إلى الجمعة",
  "email": "البريد الإلكتروني",
  "email_details": "info@skycourt.com",
  "interactive_map_coming_soon": "خريطة تفاعلية قريبًا"
}
```