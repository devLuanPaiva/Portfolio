
import { Project } from "@/components/projects/Project"
import { Loading } from "@/components/shared"
import { Suspense } from "react"

export default async function PageProject(
	props: Readonly<{ params: Promise<{ slug: string }> }>
) {
	const { slug } = await props.params
	return (
		<Suspense fallback={<Loading message="Carregando projeto..." />}>
			<Project slug={slug} />
		</Suspense>
	)
}
