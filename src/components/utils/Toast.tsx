
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

// Toast Component
interface ToastProps {
  message: string;
  isVisible: boolean;
  onHide: () => void;
}

const Toast = ({ message, isVisible, onHide }: ToastProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onHide]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              type: "spring",
              duration: 0.5,
              bounce: 0.3
            }
          }}
          exit={{ 
            opacity: 0,
            y: -20,
            transition: {
              duration: 0.2
            }
          }}
          className="fixed z-50 flex items-center gap-2 p-4 bg-green-100 border-2 rounded-none top-4 right-4 border-black-custom shadow-custom"
        >
          <CheckCircle className="w-5 h-5 text-green-600" />
          <p className="font-medium text-green-700">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;