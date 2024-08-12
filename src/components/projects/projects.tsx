import Link from "next/link";
import { HeroParallax } from "../ui";
import projects from "@/data/constants/Projects.constants";

export default function Projects() {
    const mappedProjects = projects.map(project => ({
        title: project.title,
        link: '/', 
        thumbnail: project.images[0]?.src || '' 
    }));

    return (
        <section className="mt-6 w-[90%] relative top-10">
            <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">Projetos</h2>

            <nav className="w-full flex justify-center gap-2 mb-4">
                <Link href={'/'} className="py-1 px-2 rounded-full font-bold hover:bg-indigo-700 text-white ">Web</Link>
                <Link href={'/'} className="py-1 px-2 rounded-full font-bold hover:bg-indigo-700 text-white ">Protótipos</Link>
                <Link href={'/'} className="py-1 px-2 rounded-full font-bold hover:bg-indigo-700 text-white ">Mobile</Link>
            </nav>

            <HeroParallax products={mappedProjects} />
        </section>
    );
}
