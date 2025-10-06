import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { navItems, NavItem } from '../../data/navigation';
import { cn } from '../../lib/utils';
import { memo } from 'react';

interface NavigationProps {
  className?: string;
  linkClassName?: string;
  staggerDelay?: number;
  onLinkClick?: () => void;
}

const Navigation = memo(({ className, linkClassName, staggerDelay = 0, onLinkClick }: NavigationProps) => {
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
});

export default Navigation;