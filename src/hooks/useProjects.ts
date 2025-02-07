import api from "@/utils/axios";
import { useCallback, useState } from "react";


interface Project {
    id: number;
    projectName: string;
    projectDescription: string;
    backendStack?: string;
    frontendStack?: string;
    databaseStack?: string;
    backendDeploymentStack?: string;
    frontendDeploymentStack?: string;
    imageUrl1?: string;
    imageUrl2?: string;
    projectLink?: string;
    projectRepoLink?: string;

    
}

 
export function useProjects() {
        

    const [projects, setProjects] = useState<Project[]>([]);

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);



    const fetchProjects = useCallback(async() => {
        setLoading(true);
        setError(null);
        try{
            const response = await api.get('/projects/list');
            const projectsData = response.data;
            console.log("projectsData: ",projectsData);
            setProjects(projectsData);
            return projectsData;
            
        } catch (error) {
            setError((error as any).message);
        }


    }, [])
        
    return {
        projects,
        loading,
        error,
        fetchProjects
    }




}