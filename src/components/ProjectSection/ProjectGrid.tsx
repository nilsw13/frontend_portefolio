import  { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import { useProjects } from '@/hooks/useProjects';
import {motion} from 'framer-motion'
function ProjectsGrid() {

    /**
     *  ici nrecuperer tout les projets depuis la back avec un hook custom 
     * 
     */


    const {projects, fetchProjects} = useProjects();

  

    useEffect(() => {
      fetchProjects();
      console.log("projects: ", projects);

      
      
    }, [fetchProjects]) 
      


  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1}}
      transition={{ duration: 1.2}}
    className='grid w-full grid-cols-1 gap-2 px-4 mx-auto md:scale-[0.85] md:p-0 md:grid-cols-2 md:w-2/3'>
           {projects.map((project) => (
               <ProjectCard 
                  
                key={project.id}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
               technologiesBack={project.backendStack }
               technologiesFront={project.frontendStack}
               db={project.databaseStack}
               projectLink={project.projectLink}
               image1={project.imageUrl1}
                image2={project.imageUrl2}
                projectRepoLink={project.projectRepoLink}
                           
               />
             ))}
    </motion.div>
  )
}

export default ProjectsGrid