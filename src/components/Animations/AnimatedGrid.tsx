'use client';
import React from 'react';
import { motion } from 'framer-motion';

type AnimatedGridProps = {
  children: React.ReactNode;
  delay?: number; // задержка между элементами
  duration?: number; // длительность анимации
  staggerDelay?: number; // интервал между элементами
  className?: string;
};

const AnimatedGrid: React.FC<AnimatedGridProps> = ({
  children,
  duration = 0.6,
  staggerDelay = 0.2,
  className
}) => {
  const childrenArray = React.Children.toArray(children); // Преобразуем детей в массив

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: (i: number) => ({
              opacity: 1,
              x: 0,
              transition: {
                delay: i * staggerDelay,
                duration,
                ease: 'easeOut'
              }
            })
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedGrid;
