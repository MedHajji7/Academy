
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'fade' | 'slide-up' | 'slide-left' | 'scale';
}

const variants = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-up': {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function FadeInOnScroll({ children, className = '', delay = 0, type = 'slide-up' }: FadeInOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' }); // triggers every time in view

  return (
    <motion.div
      ref={ref}
      variants={variants[type]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// (itemVariants moved to motionVariants.ts to avoid non-component exports in this file)
