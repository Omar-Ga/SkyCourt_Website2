

---

## **AI Coder Prompt: Building the "Our Vision" Interactive Page**

### **Primary Directive**

Your mission is to create a new, visually stunning "About Us" page that tells the story of SkyCourt. This is not a text page. It is an interactive, animated experience that must align with our "Kinetic Architecture" design system. You will use the provided content as a "screenplay" and translate it into a series of engaging, scannable, and visually rich sections. The examples provided (numbered steps, checklists, simple diagrams) are the direct inspiration for the layout philosophy.

### **Phase 1: Setup**

1.  **Create `pages/About.tsx`**.
2.  Add a new route `/about` in `App.tsx`.
3.  Add a new navigation link in `data/navigation.ts` for the "About" page (e.g., `labelKey: 'nav_about'`).
4.  Add the corresponding translations for `nav_about` to your i18n files.

### **Phase 2: Component Breakdown & Animation Plan**

You will build the page as a series of distinct, full-width "scenes" that animate as the user scrolls.

#### **Scene 1: The Opening Statement**
*   **Content:**
    *   Page Title: "Our Vision"
    *   Main Headline: "Beyond Retail: Crafting the North Coast's Premier Destination"
*   **Execution:** This is the hero section of this page. Use oversized, elegant serif typography (`Cormorant Garamond`). The headline should animate in word-by-word with a gentle fade-and-slide-up effect as the user enters the page. Place this against a beautiful, high-resolution, full-bleed background image of the mall's architecture.

#### **Scene 2: The Timeline - "Our Journey"**
*   **Content:**
    *   Headline: "The Art of Selection"
    *   Body text from the corresponding content section.
*   **Execution (Inspired by your "Numbered Steps" example):**
    1.  Create a horizontal layout with three key milestones or "pillars" of the SkyCourt philosophy.
    2.  Each pillar will have a large, stylized icon/number, a short title, and a brief description.
    3.  As the user scrolls, a line should "draw" itself across the screen, connecting the pillars, and each pillar should animate into view as the line reaches it.

    *   **Pillar 1: "The Vision (2007)"**
        *   Icon: A compass or a star.
        *   Text: "Founded with a vision to create an architectural and experiential landmark on the North Coast."
    *   **Pillar 2: "The Curation"**
        *   Icon: A diamond or a magnifying glass.
        *   Text: "A gallery of the world's most coveted brands, selected with an unwavering standard of quality."
    *   **Pillar 3: "The Experience"**
        *   Icon: A person/concierge icon or a heart.
        *   Text: "Impeccable service, serene design, and a commitment to your complete satisfaction."

#### **Scene 3: The Commitment Checklist**
*   **Content:**
    *   Headline: "An Unwavering Commitment to You"
    *   Body text from this section.
*   **Execution (Inspired by your "Checklist" example):**
    1.  Create a two-column layout.
    2.  On the left, display the headline.
    3.  On the right, display a list of "commitments" as bullet points.
    4.  Each bullet point must have a custom-animated checkmark icon (`<Check />` from Lucide). As the user scrolls and each list item comes into view, the checkmark should "draw" itself into existence with a satisfying flourish.
    *   **Checklist Items:**
        *   `✓` **Serenity & Security:** A safe, family-friendly environment.
        *   `✓` **24/7 Convenience:** Access to what you need, anytime.
        *   `✓` **Professional Service:** A dedicated team trained to exceed expectations.
        *   `✓` **Unmatched Quality:** A curated standard of excellence in every detail.

#### **Scene 4: The "How We Do It" Diagram**
*   **Content:**
    *   Headline: "Investing in a Legacy"
    *   Body text from this section.
*   **Execution (Inspired by your "Trigger -> Process" diagram):**
    1.  Create a simple, elegant three-part diagram to visualize the company's operational philosophy.
    2.  Use clean, minimalist cards with our brand colors.
    3.  As the user scrolls, each card and the connecting arrows should animate into place.

    *   **Box 1: "Strategic Planning"**
        *   Icon: A chessboard or a blueprint icon.
        *   Subtext: A foundation of market insight and long-term vision.
    *   **(Arrow animates in)**
    *   **Box 2: "Precise Execution"**
        *   Icon: A gear or a set of tools.
        *   Subtext: A highly qualified team committed to quality standards.
    *   **(Arrow animates in)**
    *   **Box 3: "Customer Satisfaction"**
        *   Icon: A star or a smiling face icon.
        *   Subtext: The ultimate goal that drives every action.

### **Final Review Checklist**

*   [ ] Is the "About Us" content broken down into at least four distinct, visually engaging "scenes"?
*   [ ] Does the page use scroll-triggered animations for all sections?
*   [ ] Is the "Timeline" section implemented with a connecting line animation?
*   [ ] Does the "Commitment" section feature animated checkmarks for each list item?
*   [ ] Is the "How We Do It" section visualized with a simple, animated diagram?
*   [ ] Is the page fully responsive and does it maintain the premium aesthetic of the rest of the site?

This approach takes the professional (but dry) content and translates it into the exact kind of engaging, visual storytelling you were looking for. It respects the user's time and attention by making the information beautiful and effortless to consume.