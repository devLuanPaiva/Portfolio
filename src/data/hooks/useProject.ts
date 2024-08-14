import { useSearchParams } from "next/navigation";
import { useQuery } from "react-query";
import { Projects } from "../interfaces";
import projects from "../constants/Projects.constants";

function useProject() {
    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    const fetchProject = async (id: string | null) => {
        if (!id) return undefined;
        return projects.find(project => project.id === id);
    };

    const { data: project, isLoading, error } = useQuery<Projects | undefined>(
        ['project', search],
        () => fetchProject(search),
        {
            enabled: !!search, 
        }
    );

    return { project, isLoading, error };
}

export default useProject;
