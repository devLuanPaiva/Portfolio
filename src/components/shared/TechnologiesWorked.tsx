import { ITechnology } from "@/data/models/interfaces";

interface ITechnologiesWorkedProps {
	technologies: ITechnology[];
}
export function TechnologiesWorked({ technologies }: Readonly<ITechnologiesWorkedProps>) {
	if (!technologies) return null

	return (
		<article className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border-zinc-500 shadow border-2 rounded-2xl ">
			<ul className="flex justify-center flex-wrap gap-4">
				{technologies.map((tech) => (
					<li key={tech.id}>
						<p className="text-[10px] sm:text-xs md:text-sm">
							<span className="text-red-500 font-bold">#</span> {tech.name}
						</p>
					</li>
				))}
			</ul>
		</article>
	)
}
