import React, { useRef } from 'react';
import { motion, useSpring } from 'framer-motion';

export function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const animatedX = useSpring(0, springConfig);
  const animatedY = useSpring(0, springConfig);

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    animatedX.set(middleX * 0.3);
    animatedY.set(middleY * 0.3);
  };

  const reset = () => {
    animatedX.set(0);
    animatedY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ x: animatedX, y: animatedY }}
      className="inline-block relative z-10"
    >
      {children}
    </motion.div>
  );
}
