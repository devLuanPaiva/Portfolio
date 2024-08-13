export default function TitleSection(props: any){
    return(
        <h2 className="mb-2 text-1xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{props.children}</h2>
    )
}