import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';


interface ContactTabProps {
        title : string;
        subtitle? : string;
        description? : string;
        horaires? : string;
        buttonColor : string;
        buttonText : string;
        postBUttonText? : string;

}


function ContactTab({title, subtitle, buttonText ,description, horaires, buttonColor, postBUttonText} : ContactTabProps) {
  return (

        <div className='flex flex-col items-center justify-center '>
            
                <div className="w-[90%] md:w-2/3 md:max-w-2/3 md:h-2/3 md:max-h-2/3">

        <Card className="mt-4 rounded-none bg-transparent border-2 border-black-custom shadow-custom md:w-2/3 p-0.5 mx-auto">

        <div className='mt-20 mb-20 flex flex-col items-center justify-center gap-4'>
                    <h2 className='font-bold text-2xl'>{title}</h2>
                   
                    
                    <p className='font-medium'>{description}:</p>

                    {horaires && <div>
                        <p className='font-medium'>{horaires}</p>
                    </div>}
                        
                    <Button className={`mt-4 ${buttonColor} border-2 border-black-custom text-black-custom hover:${buttonColor} rounded-none shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all`} >
                        {buttonText}
                    </Button>

                    {postBUttonText && <p>{postBUttonText}</p>

                    }

                    
                </div>
        </Card>

        </div>

        </div>


  )
}



export default ContactTab
