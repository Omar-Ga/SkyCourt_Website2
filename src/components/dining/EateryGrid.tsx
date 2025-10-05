import { motion } from 'framer-motion';
import { Eatery } from '../../data/eateries';
import { useIsMobile } from '../../hooks/use-mobile';

interface EateryLogoGridProps {
  eateries: Eatery[];
  onEateryClick: (eatery: Eatery) => void;
}

export const EateryLogoGrid = ({ eateries, onEateryClick }: EateryLogoGridProps) => {
  const isMobile = useIsMobile();
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {eateries.map((eatery) => (
        <motion.div
          key={eatery.id}
          layoutId={`eatery-container-${eatery.id}`}
          whileHover={!isMobile ? { scale: 1.08, y: -5 } : {}}
          whileTap={{ scale: 0.95 }}
          onClick={() => onEateryClick(eatery)}
          className="cursor-pointer aspect-square rounded-2xl bg-white p-6 shadow-lg transition-shadow hover:shadow-2xl"
        >
          <div className="flex h-full w-full items-center justify-center">
            <img src={eatery.logoUrl} alt={eatery.name} className="h-full w-full object-contain" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};