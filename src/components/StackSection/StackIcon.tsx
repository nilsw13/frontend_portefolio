import react from '../../assets/react.svg';
import node from '../../assets/nodejs.svg';
import java from '../../assets/java.svg';
import spring from '../../assets/springboot-custom.svg';
import postgresql from '../../assets/postgresql.svg';
import sqlite from '../../assets/sqlite-icon.svg';

interface StackIconProps {
  variant: string;
}


const IconWrapper = ({ src, alt }: { src: string; alt: string }) => (
  <img 
    src={src} 
    alt={alt}
    className="w-10 h-10 rounded-full p-1 bg-beige-custom border-2 border-black-custom shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all"
  />
);

function StackIcon({ variant }: StackIconProps) {
  // Configuration des icônes avec leurs sources et noms alternatifs
  const iconsConfig: { [key: string]: { src: string; alt: string } } = {
    'ReactJs - Vite': { src: react, alt: 'React Logo' },
    'Node': { src: node, alt: 'Node.js Logo' },
    'Java': { src: java, alt: 'Java Logo' },
    'Java - Spring Boot': { src: spring, alt: 'Spring Boot Logo' },
    'PostgreSQL': { src: postgresql, alt: 'PostgreSQL Logo' },
    'SQLite': { src: sqlite, alt: 'SQlite Logo' },
  };

  // Vérifier si la variante existe dans  configuration
  if (!variant || !(variant in iconsConfig)) {
    return null; 
  }

  const { src, alt } = iconsConfig[variant as keyof typeof iconsConfig];

  return (
    <div className="flex flex-row justify-end">
      <IconWrapper src={src} alt={alt} />
    </div>
  );
}


export default StackIcon