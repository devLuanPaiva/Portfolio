import Image from "next/image";
import img from "../../../public/images/R01_0216-removebg.png"
import { WobbleCard } from "../ui/wobble-card";

export default function Apresentation(props: any) {
    return (

        <WobbleCard containerClassName="wobble-card-container" className="wobble-card-content py-0 ">
            <header className="px-3 h-[100%] w-full flex justify-between">
                <section className="flex flex-col justify-center">
                    <p className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Olá,
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wider font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        Eu sou <span className="bg-gradient-to-b from-[#FFFF99] to-[#f9dc67] bg-clip-text text-transparent">Luan Alves</span>
                    </h1>
                    <p className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                        desenvolvedor Front-end
                    </p>
                </section>
                <figure className="flex justify-center align-bottom ">
                    <Image src={img} alt="Luan Alves" width={450} height={400} />
                </figure>
            </header>
        </WobbleCard>

    )
}