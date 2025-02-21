
import { Card, CardContent,  CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

import StackBadge from "../utils/StackBadges";

import StackIconsGroup from "../StackSection/StackIconsGroup";
import { motion } from "framer-motion";

// Étendons l'interface pour inclure plus d'informations à afficher dans la modal
interface ProjectCardProps {
  projectName : string;
  projectDescription : string;
  image1?: string;
  image2?: string;


  
  // Ajoutons des props pour la modal
  longDescription?: string;
  technologiesFront?: string | undefined;
  technologiesBack?: string;
  projectRepoLink?: string | undefined;
  projectLink?: string | undefined;
    db?: string;
  date?: string;
}

function ProjectCard({
  projectName,
  projectDescription,
  technologiesFront,
  technologiesBack,
  db,
  projectRepoLink, image1, image2, projectLink
}: ProjectCardProps) {


  
  return (
    <div className="w-full p-4 overflow-x-hidden md:w-full">
    <Card className=" md:w-[full] w-full mx-auto md:h-[880px] md:p-4 flex flex-col  border-2 border-black-custom rounded-none shadow-custom-hover   transition-all">
            {/* En-tête de la carte avec une hauteur fixe */}
            <CardHeader className="h-32">
              <div className="flex flex-row justify-between mb-2">
                <CardTitle className="text-xl font-bold truncate">{projectName.slice(0, 12).concat("  ...")}</CardTitle>
                <motion.div
                
                transition={{
                  delay: 0.5,
                }}
                className="grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                  <StackIconsGroup technologiesBack={technologiesBack} technologiesFront={technologiesFront} db={db}  />
                  
                
                </motion.div>
              </div>
        
            </CardHeader>
            
            {/* Zone de contenu avec flex-grow et organisation verticale */}
            <CardContent className="flex flex-col mt-6 ">

            
                        {image1 && (
                          <img 
                            src={image1} 
                            alt={projectName} 
                            className="w-full mt-8 border-2 rounded-none object-cover shadow-custom h-48 border-black hover:-translate-y-0.5 hover:shadow-custom-hover transition-all cursor-pointer" 
                          />
                        )}
                        {image2 && (
                          <img 
                            src={image2} 
                            alt={`${projectName} - vue supplémentaire`} 
                            className="hidden md:block w-full mt-8 border-2 rounded-none object-cover shadow-custom h-48 border-black hover:-translate-y-0.5 hover:shadow-custom-hover transition-all cursor-pointer" 
                          />
                        )}
                
            <div className="relative h-48 mt-10 group">
                
                    

                      <StackBadge variant='Description' />
                      <p className="mt-4 text-xs font-medium text-black-custom md:text-base">
                        {projectDescription}
                      </p>

                      
                    </div>

                    
                      {!projectRepoLink ? (

                          <div className="grid justify-center grid-cols-1 gap-4 ">

                             <a href={projectLink} className="inline-block w-full">

                          <Button className="w-full  bg-green-300 border-2 rounded-none text-black top-4 right-4 border-black-custom shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 hover:bg-green-400/60  transition-all ">

                             See Online 

                          </Button>
                          </a>
                          </div>

                      ) : (

                        <div className="grid justify-center grid-cols-2 gap-4 ">

                          <a href={projectLink} className="inline-block w-full">
                            <Button className="group w-full bg-green-300 border-2 rounded-none text-black top-4 right-4 border-black-custom shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 hover:bg-green-400/60 transition-all">
                              See Online
                            </Button>
                          </a>

                          <a className="w-full " onClick={()=> console.log("clicked")
                            } href={projectRepoLink}>

                        <Button className="text-black w-full border-black  rounded-none bg-blue-300 border-2 shadow-custom hover:shadow-custom-hover hover:-translate-y-0.5 transition-all hover:bg-blue-300 ">

                            See Repo

                        </Button>
                        </a>

                  </div>
                      )
                    
                    }
                     
                     
                     
                     {/*}
                        */}
              
              
            </CardContent>
    </Card>
    </div>
  );
};

export default ProjectCard;