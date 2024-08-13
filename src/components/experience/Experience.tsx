import svg from "@/data/constants/Svg.constants";
import TitleSection from "../shared/TitleSection";
import Image from "next/image";

export default function Experiencie() {
    return (
        <section className="mt-6 w-[90%] gap-2">
            <TitleSection>Experiências</TitleSection>
            <div className="w-full flex justify-around gap-2 flex-wrap items-center">
                {svg.map((svg) => (
                    <figure key={svg.id} className="flex flex-1 flex-col items-center gap-1 flex-shrink-0 m-4">
                        <Image src={svg.path} alt={svg.name} width={40} height={40}/>
                        <figcaption className="text-sm font-medium text-gray-500">{svg.name}</figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}