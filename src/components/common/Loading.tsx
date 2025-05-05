import React, { memo } from 'react';
import { motion } from 'framer-motion';

interface LoadingProps {
  fullScreen?: boolean;
  message?: string;
}

const circleAnimation = {
  hidden: { pathLength: 0 },
  visible: { 
    pathLength: 1,
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    }
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3 }
  }
};

const Loading: React.FC<LoadingProps> = ({ 
  fullScreen = true, 
  message = 'Ładowanie...' 
}) => {
  return (
    <div 
      className={`${fullScreen ? 'fixed inset-0 bg-white' : 'relative'} z-50 flex items-center justify-center`}
      role="alert"
      aria-live="assertive"
      aria-busy="true"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="flex flex-col items-center p-6"
      >
        <svg 
          className="w-16 h-16" 
          viewBox="0 0 50 50" 
          aria-hidden="true"
        >
          <motion.circle
            cx="25"
            cy="25"
            r="20"
            stroke="url(#loading-gradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            variants={circleAnimation}
          />
          <defs>
            <linearGradient id="loading-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9556C8" />
              <stop offset="100%" stopColor="#652F90" />
            </linearGradient>
          </defs>
        </svg>
        <div className="mt-4 text-flowbit-600 font-medium">
          {message}
        </div>
        <div className="sr-only">
          Strona się ładuje. Proszę czekać.
        </div>
      </motion.div>
    </div>
  );
};

export default memo(Loading); 