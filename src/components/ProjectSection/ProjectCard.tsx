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

// Étendons l'interface pour inclure plus d'informations à afficher dans la modal
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  // Ajoutons des props pour la modal
  longDescription?: string;
  technologiesFront?: string;
  technologiesBack?: string;
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
  date
}: ProjectCardProps) {
  return (
    <div>
      <Card className='bg-transparent border-2 border-black-custom rounded-none shadow-custom hover:scale-[1.05] hover:shadow-custom-hover transition-all'>
        <CardHeader>
          <div className='flex flex-row justify-between mb-4 '>
            <CardTitle>{title}</CardTitle>
            <div className="flex flex-wrap justify-end md:flex-col lg:flex-row gap-2">
            <StackBadge variant={technologiesFront || "defaultFront"}  />
            <StackBadge variant={technologiesBack || "defaultBack"}  />
            <StackBadge variant={db || "defaultDate"}   />
            </div>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Remplaçons le Button par un Dialog */}
          <Dialog>
            <DialogTrigger>
              <Button
                className='hover:bg-blue-custom hover:-translate-y-0.5 transition-all hover:shadow-custom-hover rounded-none shadow-custom bg-blue-custom text-white border-2 border-black-custom'
          >    
                Voir le projet
              </Button>
            </DialogTrigger>
            <DialogContent className="gap-10 w-[90%] md:w-full bg-beige-custom border-none rounded-none max-h-[90vh] overflow-y-auto">
              
              
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
                <div className=" h-fit-content">

                    
                        
                            <img src={screenshot} alt={title} className="w-full mt-8 border-2 rounded-none object-cover shadow-custom h-48 border-black hover:-translate-y-0.5 hover:shadow-custom-hover transition-all cursor-pointer" />
                            <img src={screenshot2} alt={title} className="w-full mt-8 border-2 rounded-none object-cover shadow-custom h-48 border-black hover:-translate-y-0.5 hover:shadow-custom-hover transition-all cursor-pointer" />
                        
                    
                  
                </div>
              </DialogHeader>
              


              <div className="mt-4 space-y-4">
                {/* Description détaillée */}
                <div>
                  <h4 className="font-semibold mb-2 bg-yellow-200 border border-black-custom w-fit text-black-custom shadow-custom py-1 px-2">Description</h4>
                  <p className="text-gray-700">{longDescription || description}</p>
                </div>



                
              
                
                {/* Date du projet */}
                {date && (
                  <div>
                    <h4 className="font-semibold mb-2">Date de réalisation</h4>
                    <p className="text-gray-700">{date}</p>
                  </div>
                )}
                
                {/* Lien vers le projet */}
                <div className="mt-6">
                  
                  <a
                    href={"https://photocv-frontend.vercel.app/"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-blue-custom text-white border-2 border-black-custom rounded-none shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all"
                  >
                    Voir le projet en ligne
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProjectCard;