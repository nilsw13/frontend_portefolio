import { ReactNode } from 'react';
import react from '../../assets/react.svg';
import node from '../../assets/nodejs.svg';
import java from '../../assets/java.svg';
import spring from '../../assets/springboot-custom.svg';
import postgresql from '../../assets/postgresql.svg';

interface StackIconProps {
  variant: string;
}

// Composant pour une seule icône avec style consistant
const IconWrapper = ({ src, alt }: { src: string; alt: string }) => (
  <img 
    src={src} 
    alt={alt}
    className="w-10 h-10 rounded-full p-1 border-2 border-black-custom shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all"
  />
);

function StackIcon({ variant }: StackIconProps) {
  // Configuration des icônes avec leurs sources et noms alternatifs
  const iconsConfig = {
    'ReactJs - Vite': { src: react, alt: 'React Logo' },
    'Node': { src: node, alt: 'Node.js Logo' },
    'Java': { src: java, alt: 'Java Logo' },
    'Java - Spring Boot': { src: spring, alt: 'Spring Boot Logo' },
    'PostgreSQL': { src: postgresql, alt: 'PostgreSQL Logo' },
  };

  // Vérifier si la variante existe dans notre configuration
  if (!variant || !(variant in iconsConfig)) {
    return null; // Ou retourner une icône par défaut si nécessaire
  }

  const { src, alt } = iconsConfig[variant];

  return (
    <div className="flex flex-row justify-end">
      <IconWrapper src={src} alt={alt} />
    </div>
  );
}


export default StackIcon