import React from 'react';
import { motion } from 'framer-motion';
interface AnimatedContainerProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
const AnimatedContainer = ({
  children,
  className = '',
  delay = 0
}: AnimatedContainerProps) => {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay,
    ease: 'easeOut'
  }} className={className}>
      {children}
    </motion.div>;
};
export default AnimatedContainer;