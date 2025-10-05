

## **AI Coder Prompt: Brand Palette Integration & Refinement**

### **Primary Directive**

Your task is to update the website's color palette to integrate the official SkyCourt brand colors, following the "90/10 Rule" of luxury design. The goal is to harmonize the site with the logo's vibrant colors (purple, magenta, green) while preserving the current, sophisticated, and minimalist "Digital Atelier" aesthetic. The majority of the site (90%) must remain neutral, with brand colors used as strategic accents (10%).

### **Phase 1: Color System Definition**

**1. Update `src/index.css`:**
Define the new HSL color variables in your global CSS file under the `:root` selector. The existing neutral palette (`--background`, `--foreground`, etc.) should remain untouched.

```css
/* In src/index.css inside @layer base :root */
:root {
  /* ... keep existing neutral variables ... */

  /* NEW: SkyCourt Brand Palette */
  --scm-purple: 279 65% 32%;      /* Primary Action Color */
  --scm-magenta: 292 71% 49%;     /* Hover & Interactive Accent */
  --scm-green: 81 70% 37%;        /* Highlight & Special Accent */

  /* ALIAS: Map to theme variables */
  --primary: var(--scm-purple);
  --primary-foreground: 210 40% 98%; /* A clean white for text on purple */
  --accent: var(--scm-magenta);
}
```

**2. Update `tailwind.config.js`:**
Ensure the Tailwind configuration is set up to recognize and use these new variables. This makes them available as utility classes (`bg-primary`, `text-accent`, etc.).

```javascript
// In tailwind.config.js
theme: {
  extend: {
    colors: {
      // ... keep existing neutral color definitions ...
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground, 210 40% 98%))',
      },
      'scm-green': 'hsl(var(--scm-green))', // Special highlight color
    },
  },
},
```

### **Phase 2: Component-Level Color Application**

Go through the specified components and apply the new color roles. **Do not change the main page background or default text color.**

*   **`Header.tsx`:**
    *   On navigation links, the underline hover effect (`group-hover:w-full`) should use `bg-primary` (purple).

*   **`CustomCursor.tsx`:**
    *   When the cursor is in its "pointer" state (hovering over a link), the outer ring or scaling effect should be tinted with `accent` (magenta).

*   **`Features.tsx`:**
    *   The icon background for the *active* feature (`isActive ? 'bg-black' ...`) should now be `bg-primary` (purple). The icon color itself should be `text-primary-foreground` (white).

*   **`BrandMarquee.tsx`:**
    *   On hover, the `shadow-2xl` could be subtly tinted with the `primary` color. Example: `hover:shadow-[0_25px_50px_-12px_hsl(var(--primary)/0.25)]`.

*   **`Stories.tsx`:**
    *   **Navigation Buttons:** The `ChevronLeft` and `ChevronRight` buttons should have a `hover:bg-primary/20` effect.
    *   **Pagination Dots:** The active pagination dot (`bg-white`) should now be `bg-scm-green` (green). This is a perfect use for our highlight color.
    *   **Testimonial Quote Icon:** The `<Quote>` icon can be tinted with `text-primary/20`.

*   **`Location.tsx`:**
    *   **Icons:** The `MapPin`, `Clock`, and `Mail` icons should be `text-primary`.
    *   **LightRays Effect:** The `LightRays` component should be subtly tinted. If possible, make the core of the light effect `primary` (purple), fading out to a soft `accent` (magenta) at the edges.

*   **`Footer.tsx`:**
    *   **Social Icons:** The hover state (`hover:bg-white hover:text-black`) should be changed to `hover:bg-primary hover:text-primary-foreground`.
    *   **Links:** The footer links' hover state should change to `hover:text-primary`.

### **Final Review Checklist**

1.  Is the overall feel of the site still clean, spacious, and predominantly neutral?
2.  Is the Deep Purple (`--primary`) the main color for actions and key elements?
3.  Is the Vibrant Magenta (`--accent`) primarily used for hover states and moments of focused interaction?
4.  Is the Electric Green (`--scm-green`) used sparingly for small, impactful details?
5.  Does the site now feel undeniably connected to the SkyCourt logo's brand identity?

Execute this plan to finalize the site's visual language.