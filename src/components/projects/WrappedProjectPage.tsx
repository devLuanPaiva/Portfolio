import useProject from "@/data/hooks/useProject";
import TitleSection from "../shared/TitleSection";
import Sections from "../shared/Sections";
import { HoverEffect, TracingBeam } from "../ui";
import Footer from "../footer/Footer";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import Header from "../shared/header";
import LoadingComponent from "../shared/LoadingComponent";

export default function WrappedProjectPage() {
    const { project, isLoading, error } = useProject();

    const mapImagesToCards = () => {
        const cards =
            project?.images.map((image) => (
                <TracingBeam key={image.id} className="px-6">
                    <article className="mb-10">
                        <h2 className={twMerge("text-xl mb-4 text-white")}>{image.title}</h2>
                        <figure className="text-sm prose prose-sm dark:prose-invert">
                            <Image
                                src={image.src}
                                alt={image.title!}
                                width={1000}
                                height={1000}
                                className="rounded-lg mb-10 object-cover"
                            />
                        </figure>
                        <p className="font-normal text-base my-4  text-neutral-200 text-justify">
                            {image.description}
                        </p>
                    </article>
                </TracingBeam>
            )) || [];
        return cards;
    };

    if (isLoading) return <LoadingComponent/>;
    if (error) return <div>Erro ao carregar projeto</div>;

    return (
        <div>
            {project ? (
                <div className="flex min-h-screen flex-col justify-between items-center w-full">
                    <Header title={project.title} />
                    <TitleSection>Ficha Técnica</TitleSection>
                    <Sections >
                        <HoverEffect
                            items={[
                                {
                                    title: "Descrição",
                                    description: project.description
                                },
                                {
                                    title: 'Responsabilidades',
                                    description: project.responsibility
                                },
                                {
                                    title: 'Tecnologias Utilizadas',
                                    description: project.tools
                                },
                                {
                                    title: 'Resultados',
                                    description: project.results
                                }
                            ]}
                        />
                    </Sections>
                    <TitleSection>Galeria</TitleSection>
                    <Sections class="flex flex-col p-0 mb-6">
                        {mapImagesToCards()}
                    </Sections>
                    <Footer />
                </div>
            ) : (
                <section className="flex min-h-screen flex-col justify-center items-center w-full">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-wide">Projeto não encontrado.</h2>
                </section>
            )}
        </div>
    )
}