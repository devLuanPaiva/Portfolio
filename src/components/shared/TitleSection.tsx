export default function TitleSection(props: any){
    return(
        <h2 className="w-full text-center mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-4xl tracking-wider font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">{props.children}</h2>
    )
}