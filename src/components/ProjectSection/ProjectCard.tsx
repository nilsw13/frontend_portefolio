import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import screenshot from "../../assets/photocv.png"
import screenshot2 from "../../assets/photocv2.png"
import StackBadge from "../utils/StackBadges";
import StackIcon from "../StackSection/StackIcon";
import StackIconsGroup from "../StackSection/StackIconsGroup";
import { motion } from "framer-motion";

// Étendons l'interface pour inclure plus d'informations à afficher dans la modal
interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  
  // Ajoutons des props pour la modal
  longDescription?: string;
  technologiesFront?: string | undefined;
  technologiesBack?: string;
  projectLink?: string | undefined;
    db?: string;
  date?: string;
}

function ProjectCard({
  title,
  description,
  longDescription,
  technologiesFront,
  technologiesBack,
  db,
  date, projectLink
}: ProjectCardProps) {


  
  return (
    <div className="p-4 overflow-x-hidden md:w-full">
      <Card className="md:w-full w-full mx-auto md:h-[400px]  flex flex-col bg-transparent border-2 border-black-custom rounded-none shadow-custom  hover:-translate-y-0.5 hover:shadow-custom-hover transition-all">
        {/* En-tête de la carte avec une hauteur fixe */}
        <CardHeader className="h-32">
          <div className="flex flex-row justify-between mb-2">
            <CardTitle className="text-xl font-bold truncate">{title.slice(0, 12).concat("  ...")}</CardTitle>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, }}            
             whileInView={{ opacity: 1 , scale: 1.1, transition: { duration: 0.5 }, transformOrigin: 'center' }}
             transition={{
              delay: 0.5,
             }}
             className="grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
              <StackIconsGroup technologiesBack={technologiesBack} technologiesFront={technologiesFront} db={db}  />
              
            
            </motion.div>
          </div>
     
        </CardHeader>
        
        {/* Zone de contenu avec flex-grow et organisation verticale */}
        <CardContent className="flex flex-col flex-1">

        <div className="relative h-48 mt-10 group">
            
                {/* Overlay qui apparaît au survol */}

                  <StackBadge variant='Description' />
                  <p className="mt-4 text-xs font-medium text-black-custom md:text-base">
                    {description}
                  </p>

                  
                </div>
            
          
          
          {/* Zone de bouton alignée en bas */}
          <div className="mt-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full hover:bg-blue-custom hover:-translate-y-0.5 transition-all hover:shadow-custom-hover rounded-none shadow-custom bg-blue-custom text-white border-2 border-black-custom">
                  Voir le projet
                </Button>
              </DialogTrigger>
              
              <DialogContent className="gap-10 w-[90%] md:w-full bg-beige-custom border-none rounded-none max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">{title} </DialogTitle>
                  <div className="space-y-4">
                    {screenshot && (
                      <img 
                        src={screenshot} 
                        alt={title} 
                        className="w-full mt-8 border-2 rounded-none object-cover shadow-custom h-48 border-black hover:-translate-y-0.5 hover:shadow-custom-hover transition-all cursor-pointer" 
                      />
                    )}
                    {screenshot2 && (
                      <img 
                        src={screenshot2} 
                        alt={`${title} - vue supplémentaire`} 
                        className="w-full mt-8 border-2 rounded-none object-cover shadow-custom h-48 border-black hover:-translate-y-0.5 hover:shadow-custom-hover transition-all cursor-pointer" 
                      />
                    )}
                  </div>
                </DialogHeader>
                
                <div className="mt-2 space-y-4">
                  <div>

                    <div className="">
                    
                    {projectLink && (
                    <div className="flex flex-col items-center mb-4 space-y-6">
                      <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-blue-custom text-white border-2 border-black-custom rounded-none shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all"
                      >
                        Voir le projet en ligne
                      </a>

                      <h4 className="px-2 py-1 mb-6 font-semibold bg-yellow-200 border border-black-custom w-fit text-black-custom shadow-custom">
                      Description
                    </h4>
                    </div>
                  )}

                    </div>
                    <p className="text-gray-700">
                      {longDescription || description}
                    </p>
                  </div>
                  
                  {date && (
                    <div>
                      <h4 className="mb-2 font-semibold">Date de réalisation</h4>
                      <p className="text-gray-700">{date}</p>
                    </div>
                  )}
                  
                  
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;