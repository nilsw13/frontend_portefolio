import { div } from 'framer-motion/client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

function ProjectCard( {title, description, image, link}: ProjectCardProps) {
  return (

        <div>
            <Card className='bg-transparent border-2 border-black-custom rounded-none shadow-custom'>
                <CardHeader>
                <div className='flex flex-row justify-between'>
                <CardTitle>{title}</CardTitle>
                <img src={image}  />
                </div>

                <CardDescription>{description}</CardDescription>    
                </CardHeader>
                <CardContent> 

                
                    <Button 
                    className='hover:bg-blue-custom  hover:-translate-y-0.5 transition-all hover:shadow-custom-hover rounded-none shadow-custom bg-blue-custom text-white border-2 border-black-custom'
                        onClick={() => console.log('clicked')}
                    >Voir le projet</Button>

                </CardContent>
            </Card>        
        </div>
  )
}

export default ProjectCard