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
    <div className='grid gap-6 p-4 mx-auto md:p-0 md:grid-cols-2 md:w-2/3 '>
           {projects.map((project) => (
               <ProjectCard 
                  
                key={project.id}
                title={project.projectName}
                description={project.projectDescription}
               technologiesBack={project.backendStack }
               technologiesFront={project.frontendStack}
               db={project.databaseStack}
               projectLink={project.projectLink}
                           
               />
             ))}
    </div>
  )
}

export default ProjectsGrid