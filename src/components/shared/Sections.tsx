export default function Sections(props: any) {
    return (
        <section className={`w-[90%] ${props.class}`}>
            {props.children}
        </section>
    )
}