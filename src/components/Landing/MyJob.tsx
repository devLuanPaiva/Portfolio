import { jobs } from "@/data/constants/jobs.const"
import Link from "next/link"

export function MyJob() {
	return (
		<section className="px-6 py-10 bg-black text-white w-full  shadow-lg rounded-2xl flex flex-col items-center">
			<h2 className="text-3xl font-extrabold text-center bg-linear-to-r from-red-600 via-white to-red-600 text-transparent bg-clip-text mb-10">
				Experiências
			</h2>

			<div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-start">
				{jobs.map((job) => (
					<article
						className="bg-zinc-900 p-6 rounded-2xl border border-red-600 hover:shadow-red-700/40 hover:shadow-xl transition-shadow duration-300 w-full sm:max-w-125 mx-auto h-full"
						key={job.id}
					>
						<h3 className="text-red-500 text-2xl font-semibold mb-2">
							{job.title} - {job.company}
						</h3>
						<p className="text-gray-400 text-sm mb-4">
							{job.companyCategory} • {job.duration}
						</p>
						<div className="space-y-4 text-gray-200 text-base leading-relaxed">
							{job.description.split("\n\n").map((paragraph, index) => (
								<p key={index + 1}>{paragraph}</p>
							))}

							{job.href && (
								<Link
									href={job.href.url}
									target="_blank"
									className="inline-block mt-2 text-red-400 hover:text-white underline underline-offset-4 transition-colors"
								>
									{job.href.label}
								</Link>
							)}
						</div>
					</article>
				))}
			</div>
		</section>
	)
}
