export function ProjectFrame({ frame }: Readonly<{ frame: React.ReactNode }>) {
	return (
		<section className="my-10 w-full flex items-center justify-center">
			{frame}
		</section>
	)
}
