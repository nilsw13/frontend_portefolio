import icon from '../../assets/image2vector.svg'
import { motion, AnimatePresence } from 'framer-motion'

function PreLoader() {
  return (
    <AnimatePresence>
      <motion.div
        
        className="relative grid w-screen h-screen overflow-hidden place-items-center"
      >
        {/* Triangle supérieur */}
        <motion.div 
        
        initial={{translateY: 0}}
        animate={{translateY: -1300}}
        exit={{translateY: -1000}} 
        transition={{ duration: 2, ease: 'easeInOut'}}
          className="absolute inset-0 bg-black"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 0 100%)',
            
          }}
        />
        
        {/* Triangle inférieur */}
        <motion.div
        transition={{ duration: 2 , ease: 'easeInOut'}}
         initial={{translateY: 0}}
         animate={{translateY: 1300}}
         exit={{translateY: 1000}} 
         
          className="absolute inset-0 bg-black"
          style={{
            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
           
          }}
        />

        {/* Logo centré */}
        <motion.img
          initial={{ opacity: 0, scale: 0.2 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 1 }}
          
          src={icon} 
          alt="loading icon" 
          className="relative z-10 w-20 h-20"
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default PreLoader