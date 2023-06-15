import { Project } from "@/typings";

export const fetchProjects = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);

    const data = await res.json()
    const projects: Project[] = data.projects;

    projects.sort((a, b) => (
        new Date(b.dateEnded).getTime() - new Date(a.dateEnded).getTime()
    ))

    // console.log("fetching", projects);

    return projects;
}