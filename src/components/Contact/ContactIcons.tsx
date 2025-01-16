import React, { ReactNode } from 'react'
import whatsapp from '../../assets/whatsapp.svg'
import { GithubIcon, Linkedin, LinkedinIcon, Mail, MailCheck, PhoneCallIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom';


interface Icon {
    name: string;
    image:  ReactNode;
}


function ContactIcons() {
    const navigate = useNavigate();


    const icons = [{
        name: 'Mail',
        image: <Mail />,
        path: 'contact/mail'
    },
    {
        name: 'Whatsapp',
        image: <PhoneCallIcon />,
        path: 'contact/phone'
    },

    {
        name: 'Github',
        image: <GithubIcon />,
        path: 'contact/github'
    },

    {
        name: 'Linekdin',
        image: <LinkedinIcon />,
        path: 'contact/linkedin'
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
                            <button 
                            onClick={() => {
                                    navigate(icon.path);
                                    
                                    
                            }}
                            className='flex flex-row w-14 h-14  rounded-full border-2 border-black-custom pt-[0.80rem] pl-[0.80rem] shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 hover:bg-pink-custom hover:text-white transition-all cursor-pointer active:shadow-none active:translate-y-0'>
                                {icon.image}
                            </button>
                        )}
                    </div>
                
            ))}

    </div>
  )

}

export default ContactIcons