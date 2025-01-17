import React, { useEffect } from 'react'
import ProjectCard from './ProjectCard'
import img from '../../assets/react.svg'
import { useProjects } from '@/hooks/useProjects';

function ProjectsGrid() {

    /**
     *  ici nrecuperer tout les projets depuis la back avec un hook custom 
     * 
     */


    const {projects, loading, error, fetchProjects} = useProjects();

    // useeffect pour recuperer les projets en test 

    useEffect(() => {
      fetchProjects();
      console.log("projects: ", projects);

      
      
    }, [fetchProjects])  // ajout de la dépendance
      


  return (
    <div className='grid p-4 md:p-0 md:grid-cols-2 md:w-2/3  gap-6 mx-auto '>
           {projects.map((project) => (
               <ProjectCard 
                  
                key={project.id}
                title={project.projectName}
                description={project.projectDescription}
               technologiesBack={project.backendStack}
               technologiesFront={project.frontendStack}
               db={project.databaseStack}
               link={project.url}
                           
               />
             ))}
    </div>
  )
}

export default ProjectsGrid