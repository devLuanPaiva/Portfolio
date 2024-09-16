import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import { Projects } from "../interfaces";
import { projectsPrototypes, projects } from "../constants";

function useProject() {
    const searchParams = useSearchParams();
    const searchId = searchParams.get('id');
    const searchType = searchParams.get('type');

    const fetchProject = async (id: string | null) => {
        if (!id) return undefined;
        if(searchType === 'web'){
            return projects.find(project => project.id === id);
        }else if(searchType === 'prototype'){
            return projectsPrototypes.find(project => project.id === id);
        }
    };
    
    const { data: project, isLoading, error } = useQuery<Projects | undefined>(
        ['project', searchId],
        () => fetchProject(searchId),
        {
            enabled: !!searchId, 
        }
    );

    return { project, isLoading, error };
}

export default useProject;
