import React, { ReactNode, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Mail, PhoneCallIcon, GithubIcon, LinkedinIcon } from 'lucide-react';

interface Icon {
  name: string;
  image: ReactNode;
  path: string;
}

function ContactIcons() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);

  // Met à jour l'icône sélectionnée en fonction du chemin actuel
  useEffect(() => {
    const currentPath = location.pathname;
    const matchingIcon = icons.find(icon => currentPath.includes(icon.path));
    if (matchingIcon) {
      setSelectedIcon(matchingIcon.name);
    }
  }, [location.pathname]);

  const icons = [
    {
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
      name: 'Linkedin',
      image: <LinkedinIcon />,
      path: 'contact/linkedin'
    }
  ];

  const handleIconClick = (icon: Icon) => {
    setSelectedIcon(icon.name);
    navigate(icon.path);
  };

  const getIconClasses = (iconName: string) => {
    const baseClasses = 'flex flex-row w-14 h-14 rounded-full border-2 border-black-custom pt-[0.80rem] pl-[0.80rem] transition-all cursor-pointer';
    
    if (selectedIcon === iconName) {
      return `${baseClasses} bg-pink-custom text-white shadow-none translate-y-0`;
    }
    
    return `${baseClasses} shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 hover:bg-pink-custom hover:text-white active:shadow-none active:translate-y-0`;
  };

  return (
    <div className='flex flex-row items-center justify-center gap-8 p-4 mt-4 md:p-0 md:flex md:w-2/3 md:space-x-4'>
      {icons.map((icon) => (
        <div key={icon.name} className='flex flex-row justify-between gap-4'>
          {typeof icon.image === 'string' ? (
            <img 
              src={icon.image}
              alt={icon.name}
              className='w-28 h-28 rounded-full border-2 border-black-custom p-3 shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all'
            />
          ) : (
            <button
              onClick={() => handleIconClick(icon)}
              className={getIconClasses(icon.name)}
              aria-pressed={selectedIcon === icon.name}
            >
              {icon.image}
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default ContactIcons;