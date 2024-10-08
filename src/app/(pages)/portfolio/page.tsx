import AboutMe from "@/components/apresentation/AboutMe";
import Apresentation from "@/components/apresentation/Apresentation";
import Experiencie from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import Projects from "@/components/projects/projects";
import Services from "@/components/services/Services";

export default function Portfolio(props: any) {
    return (
        <div className="relative min-h-screen max-w-full flex flex-col justify-between gap-3 items-center py-3">
            <Apresentation />
            <AboutMe />
            <Projects />
            <Services/>
            <Experiencie/>
            <Footer/>
        </div>
    )
}