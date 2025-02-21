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


function ContactTab({title ,description, horaires, buttonColor, postBUttonText, buttonText, redirectUrl} : ContactTabProps) {

    const message = 
        "Bonjour, je vous contacte depuis votre portfolio.\n\n" +
        "💼 Je m'appelle : [Votre nom]\n\n" +
        "🎯 Type de contact :[Type de projet]\n\n" +
    
        "💭 Mon message : [Votre message]\n\n" +
        "Merci d'avance pour votre retour !";

        const encodedText = encodeURIComponent(message);

  return (

    <AnimatePresence>
        <div className='flex flex-col items-center justify-center '>


       
        
        
                <motion.div 
                
                
                className="md:w-2/3 max-w-2/3 h-2/3 max-h-2/3">

        <Card className="mt-4 w-[350px] h-[400px] rounded-none bg-white border-2 border-black-custom shadow-custom md:w-2/3 p-0.5 mx-auto">

        <motion.div 
                
                initial={{ opacity: 0,  }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration:1.2 }} className='flex flex-col items-center justify-center gap-4 mt-20 mb-20'>

<div className='p-2 pl-2 pr-2 mb-8 transform bg-yellow-200/40 -rotate-3'>
  <h2 className='p-1 text-2xl font-bold transform opacity-100 rotate-3'>{title}</h2>
</div>
                    
                    <p className='font-medium whitespace-nowrap'>{description}</p>

                    {horaires && <div>
                        <p className='font-medium'>{horaires}</p>
                    </div>}
                        
                    <Button className={`mt-4 ${buttonColor} border-2 border-black-custom text-black-custom hover:${buttonColor} rounded-none shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all`} >

                    
                    
                    
                                { title === "Phone Contact" && ( <a aria-label="Chat on WhatsApp" href={`https://wa.me/33677309346?text=${encodedText}`}> Chat on WhatsApp </a>)}
                    
                                    
                                   {title != "Phone Contact" && (<a aria-label={buttonText} href={redirectUrl} > {buttonText} </a>) } 
                        
                    </Button>



                    {postBUttonText && <p className='inset-0 mx-auto'>{postBUttonText}</p>



                    }

                    
                </motion.div>
        </Card>

        </motion.div>
        

        </div>
        </AnimatePresence>

  )
}



export default ContactTab
