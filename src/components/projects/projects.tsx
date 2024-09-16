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
                <HeroParallax products={mappedProjectsWeb} />
                <HeroParallax products={mappedProjectPrototypes} />

            </Steps>

        </section>
    );
}
