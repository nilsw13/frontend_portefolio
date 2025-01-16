import React from 'react'
import ProjectCard from './ProjectCard'
import img from '../../assets/react.svg'

function ProjectsGrid() {

    /**
     *  ici nrecuperer tout les projets depuis la back avec un hook custom 
     * 
     */



  return (
    <div className='grid p-4 md:p-0 md:grid-cols-2 md:w-2/3  gap-6 mx-auto '>
        <ProjectCard
            title='Studio Headshot Pro'
            technologiesFront={'React'}
            technologiesBack={'Spring Boot'}
            description="Studio AI est une plateforme SaaS innovante qui permet aux utilisateurs de générer des images personnelles à l'aide de l'intelligence artificielle"
            image={img}
            link='/'

         />
         <ProjectCard
            title='Projet 1'
            technologiesFront={'Java'}
            technologiesBack={'Spring Boot'}
            db='PostgreSQL'
            description="Studio AI est une plateforme SaaS innovante qui permet aux utilisateurs de générer des images personnelles à l'aide de l'intelligence artificielle"
            image={img}
            link='/'

         />

<ProjectCard
            technologiesFront={'Java'}
            technologiesBack={'Spring Boot'}
            title='Projet 1'
            description="Studio AI est une plateforme SaaS innovante qui permet aux utilisateurs de générer des images personnelles à l'aide de l'intelligence artificielle"
            image={img}
            link='/'

         />

<ProjectCard
            technologiesFront={'Java'}
            technologiesBack={'Spring Boot'}
            title='Projet 1'
            description="Studio AI est une plateforme SaaS innovante qui permet aux utilisateurs de générer des images personnelles à l'aide de l'intelligence artificielle"
            image={img}
            link='/'

         />
    </div>
  )
}

export default ProjectsGrid