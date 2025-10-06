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