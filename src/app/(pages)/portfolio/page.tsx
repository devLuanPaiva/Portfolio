import AboutMe from "@/components/apresentation/AboutMe";
import Apresentation from "@/components/apresentation/Apresentation";
import Experiencie from "@/components/experience/Experience";
import Projects from "@/components/projects/projects";
import Services from "@/components/services/Services";

export default function Portfolio(props: any) {
    return (
        <div className="relative min-h-screen w-full flex flex-col gap-3 items-center p-3">
            <Apresentation />
            <AboutMe />
            <Projects />
            <Services/>
            <Experiencie/>
        </div>
    )
}