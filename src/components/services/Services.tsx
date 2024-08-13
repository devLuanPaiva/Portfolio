import TitleSection from "../shared/TitleSection";

export default function Services() {
    const services = [
        {
            title: "Desenvolvimento Front-End",
            description:
                "Criação de interfaces modernas e responsivas, utilizando as melhores práticas de UX/UI. Desenvolvo websites e aplicativos web interativos, garantindo uma experiência de usuário fluida e agradável.",
        },
        {
            title: "Desenvolvimento Mobile",
            description:
                "Desenvolvimento de aplicativos móveis nativos e híbridos, focados em performance e usabilidade. Criação de soluções para iOS e Android que atendem às necessidades do seu negócio.",
        },
        {
            title: "Protótipos e Design",
            description:
                "Criação de protótipos e design de interfaces que representam fielmente a visão do seu projeto. Uso de ferramentas avançadas para criar modelos interativos que facilitam a visualização e ajustes antes do desenvolvimento.",
        }
    ];

    return (
        <section className="mt-6 w-[90%] gap-2 mx-auto">
            <TitleSection>Serviços</TitleSection>
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
                {services.map((service) => (
                    <article
                        key={service.title}
                        className="relative z-20 flex-1 p-4 overflow-hidden bg-black rounded-2xl border-4 border-transparent bg-clip-padding shadow-lg"
                        style={{
                            borderImage: ' linear-gradient(to right, #4630B8, #4863C3, #4D9DD0) 1',
                            borderRadius: '12px'
                        }}
                    >
                        <div className="absolute inset-0 -z-10 rounded-2xl opacity-30" ></div>
                        <h3 className="text-xl font-semibold">{service.title}</h3>
                        <p className="mt-2 text-justify">{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
