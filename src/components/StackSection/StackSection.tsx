import StackSpeech from './StackSpeech'
import StackIcons from './StackIcons'
import {motion} from 'framer-motion'

function StackSection() {
  return (


    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2}}
    
    className='flex flex-col items-center justify-center'>
        <StackSpeech />
        <StackIcons />
         <p className='mt-20 font-medium '>But of course I rather Java after all ...</p>
    </motion.div>
  )
}

export default StackSection