import Link from "next/link";
import Image from "next/image";
import { IProject } from "@/data/models/interfaces";

interface ProjectProps {
    project: IProject
}

export function ProjectItem({ project }: Readonly<ProjectProps>) {
    return (
        <Link href={`/projeto/${project.slug}`} >
            <article className="relative rounded-2xl overflow-hidden border border-zinc-800 min-w-64 min-h-64">
                <Image
                    src={project.images[0]}
                    alt={project.name}
                    fill
                    style={{ objectFit: "cover" }}
                />
            </article>
        </Link>
    )
}