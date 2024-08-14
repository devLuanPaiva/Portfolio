import useProject from "@/data/hooks/useProject";
import TitleSection from "../shared/TitleSection";
import Sections from "../shared/Sections";
import { HoverEffect, LayoutGrid } from "../ui";
import Footer from "../footer/Footer";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";

export default function WrappedProjectPage() {
    const { project, isLoading, error } = useProject();
    const mapImagesToCards = () => {
        const cards = project?.images.map((image) => ({
            id: image.id,
            content: (
                <article>
                    <p className="font-bold text-4xl text-white">{image.title}</p>
                    <p className="font-normal text-base text-white"></p>
                    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                        {image.description}
                    </p>
                </article>
            ),
            className: 'col-span-1',
            thumbnail: image.src
        })) || [];
        return cards;
    };
    if (isLoading) return <div>Carregando...</div>;
    if (error) return <div>Erro ao carregar projeto</div>;

    return (
        <div>
            {project ? (
                <div className="flex min-h-screen flex-col justify-between items-center w-full">
                    <header className="w-full h-28 bg-indigo-900 flex items-center justify-center mb-3"
                        style={{
                            backgroundImage: "radial-gradient(88% 100% at top, rgba(34, 34, 34, 0.5), rgba(0, 0, 0, 0))",
                            boxShadow: "0 10px 32px rgba(0, 0, 0, 0.5), 0 1px 1px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.4), 0 24px 108px rgba(0, 0, 0, 0.6)",
                        }}>
                        <Link href={'portfolio'}><IconChevronLeft size={50} /></Link>
                        <h1 className="w-full text-center mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{project.title}</h1>
                    </header>
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
                    <Sections class="flex min-h-[450px] p-0 mb-6 ">
                        <LayoutGrid cards={mapImagesToCards()} />
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