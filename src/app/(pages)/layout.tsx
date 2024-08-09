export default function LayoutPages(props: any) {
    return (
        <main className="flex flex-col p-4 items-center w-full h-screen bg-black/80 md:bg-transparent md:bg-gradient-to-r from-black/30 via-black/90 to-black/30">
            {props.children}
        </main>
    )
}