import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';


interface ContactTabProps {
        title : string;
        subtitle? : string;
        description? : string;
        horaires? : string;
        buttonColor : string;
        buttonText : string;
        postBUttonText? : string;
        redirectUrl? : string;

}


function ContactTab({title, subtitle, buttonText ,description, horaires, buttonColor, postBUttonText, redirectUrl} : ContactTabProps) {
  return (

        
        <div className='flex flex-col items-center justify-center '>

<AnimatePresence
        initial={false}
        
        >
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
                
                className="w-[90%] md:w-2/3 md:max-w-2/3 md:h-2/3 md:max-h-2/3">

        <Card className="mt-4 rounded-none bg-transparent border-2 border-black-custom shadow-custom md:w-2/3 p-0.5 mx-auto">

        <div className='flex flex-col items-center justify-center gap-4 mt-20 mb-20'>
                    <h2 className='text-2xl font-bold'>{title}</h2>
                   
                    
                    <p className='font-medium'>{description}:</p>

                    {horaires && <div>
                        <p className='font-medium'>{horaires}</p>
                    </div>}
                        
                    <Button className={`mt-4 ${buttonColor} border-2 border-black-custom text-black-custom hover:${buttonColor} rounded-none shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all`} >

                        <a href={redirectUrl}>{buttonText}</a>
                        
                    </Button>

                    {postBUttonText && <p className='inset-0 mx-auto'>{postBUttonText}</p>

                    }

                    
                </div>
        </Card>

        </motion.div>
        </AnimatePresence>

        </div>
        

  )
}



export default ContactTab
