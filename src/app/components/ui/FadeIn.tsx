"use client";

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}
const FadeIn = ({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}: FadeInProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const directionVariants = {
    up: {
      y: 40
    },
    down: {
      y: -40
    },
    left: {
      x: 40
    },
    right: {
      x: -40
    }
  };
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0
      });
    }
  }, [controls, inView]);
  return <motion.div ref={ref} initial={{
    opacity: 0,
    ...directionVariants[direction]
  }} animate={controls} transition={{
    duration: 0.7,
    delay,
    ease: 'easeOut'
  }} className={className}>
      {children}
    </motion.div>;
};
export default FadeIn;