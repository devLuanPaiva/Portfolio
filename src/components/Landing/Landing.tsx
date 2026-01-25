
import { ITechnology } from "@/data/models/interfaces";
import { Technologies } from "../shared/Technologies"

interface LandingProps {
	technologies: ITechnology[];
}

export function Landing({ technologies }: Readonly<LandingProps>) {
	return (
		<section className="bg-[url(/bg.jpg)] w-full bg-cover bg-center h-150 -mt-25 pt-25 z-0 flex flex-col  items-center justify-center gap-5 ">
			<div className="flex flex-col items-center gap-1">
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">
					Luan Alves de Paiva
				</h1>
				<h2 className="text-zinc-500  sm:text-xl md:text-2xl text-center">
					Desenvolvedor Full Stack
				</h2>
			</div>
			<Technologies technologies={technologies} />
		</section>
	)
}
