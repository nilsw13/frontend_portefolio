import React, { ReactNode } from 'react'
import whatsapp from '../../assets/whatsapp.svg'
import { GithubIcon, Linkedin, LinkedinIcon, Mail, MailCheck, PhoneCallIcon } from 'lucide-react'


interface Icon {
    name: string;
    image:  ReactNode;
}


function ContactIcons() {


    const icons = [{
        name: 'Mail',
        image: <Mail />
    },
    {
        name: 'Whatsapp',
        image: <PhoneCallIcon />
    },

    {
        name: 'Github',
        image: <GithubIcon />
    },

    {
        name: 'Linekdin',
        image: <LinkedinIcon />
    },



    
    ]



  return (
      <div className='flex flex-row p-4 md:p-0 md:flex justify-center items-center md:w-2/3 mt-4  gap-8 md:space-x-4'>
            {icons.map((icon) => (
                
                    <div className='flex flex-row justify-between  gap-4'>
                        {typeof icon.image === 'string' ? (
                            <img src={icon.image}
                                className='w-28 h-28 rounded-full  border-2 border-black-custom p-3 shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all'
                            />
                        ) : (
                            <div className='flex flex-row w-14 h-14  rounded-full border-2 border-black-custom pt-[0.80rem] pl-[0.80rem] shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all cursor-pointer active:shadow-none active:translate-y-0'>
                                {icon.image}
                            </div>
                        )}
                    </div>
                
            ))}

    </div>
  )

}

export default ContactIcons