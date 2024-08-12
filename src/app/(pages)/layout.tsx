export default function LayoutPages(props: any) {
    return (
        <main className="flex items-center w-full min-h-screen bg-black/80 md:bg-transparent md:bg-gradient-to-r from-black/30 via-black/90 to-black/30">
            {props.children}
        </main>
    )
}