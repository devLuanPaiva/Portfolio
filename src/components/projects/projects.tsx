import Link from "next/link";
import { HeroParallax } from "../ui";
import projects from "@/data/constants/Projects.constants";
import TitleSection from "../shared/TitleSection";

export default function Projects() {
    const mappedProjects = projects.map(project => ({
        title: project.title,
        link: '/', 
        thumbnail: project.images[0]?.src || '' 
    }));

    return (
        <section className="mt-6 w-[90%] relative top-10 gap-2">
            <TitleSection>Projetos</TitleSection>

            <nav className="w-full flex justify-center gap-2 mb-4">
                <Link href={'/'} className="py-1 px-2 rounded-full font-bold hover:bg-indigo-700 text-white ">Web</Link>
                <Link href={'/'} className="py-1 px-2 rounded-full font-bold hover:bg-indigo-700 text-white ">Protótipos</Link>
                <Link href={'/'} className="py-1 px-2 rounded-full font-bold hover:bg-indigo-700 text-white ">Mobile</Link>
            </nav>

            <HeroParallax products={mappedProjects} />
        </section>
    );
}
