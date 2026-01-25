
import Loading from "@/app/loading"
import { Project } from "@/components/projects/Project"
import { Suspense } from "react"

export default async function PageProject(
	props: Readonly<{ params: Promise<{ slug: string }> }>
) {
	const { slug } = await props.params
	return (
		<Suspense fallback={<Loading />}>
			<Project slug={slug} />
		</Suspense>
	)
}
