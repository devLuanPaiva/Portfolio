'use client'
import { HeroParallax } from "../ui";
import TitleSection from "../shared/TitleSection";
import Steps from "../shared/Steps";
import { useState } from "react";
import { projects, projectsPrototypes } from "@/data/constants";

export default function Projects() {
    const [allowNextStep, setAllowNextStep] = useState<boolean>(false);
    const mappedProjectsWeb = projects.map(project => ({
        title: project.title,
        link: `project/?id=${project.id}&type=web`,
        thumbnail: project.images[0]?.src || ''
    }));
    const mappedProjectPrototypes = projectsPrototypes.map(project => ({
        title: project.title,
        link: `project/?id=${project.id}&type=prototype`,
        thumbnail: project.images[0]?.src || ''
    }));

    return (
        <section className="mt-6 w-[90%] relative top-10 gap-2">
            <TitleSection>Projetos</TitleSection>
            <Steps
                allowsNextStep={allowNextStep}
                changeNextStep={setAllowNextStep}
                labels={[
                    "web",
                    "Protótipos"
                ]}
            >
                <HeroParallax
                    products={mappedProjectsWeb}
                    titleHero="Front-end"
                    subtitle="Explore meus projetos de front-end clicando em um dos cards. Eles destacam minhas habilidades com React, Next.js, Angular, TypeScript e outras tecnologias modernas."
                />

                <HeroParallax
                    products={mappedProjectPrototypes}
                    titleHero="UX/UI"
                    subtitle="Confira meus projetos de protótipos de interface clicando em um dos cards, onde demonstro minha experiência com Figma e design de interfaces."
                />


            </Steps>

        </section>
    );
}
