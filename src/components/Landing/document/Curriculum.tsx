import { MinCV } from "./MinCV";
import { Experience } from "./Experience";
import { TechnologiesWorked } from "../../shared/TechnologiesWorked";
import { ITechnology } from "@/data/models/interfaces";

interface CurriculumProps {
    technologies: ITechnology[];
}

export function Curriculum({ technologies }: Readonly<CurriculumProps>) {
    return (
        <section className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
            <MinCV />
            <Experience />
            <TechnologiesWorked technologies={technologies} />
        </ section>
    )
}