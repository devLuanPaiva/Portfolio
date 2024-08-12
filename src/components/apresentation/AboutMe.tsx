import { TextGenerateEffect } from "../ui";

export default function AboutMe() {
    return (
        <section className="mt-6 max-w-[60%] z-10 relative top-10">
            <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl tracking-wider font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                Sobre
            </h2>
            <TextGenerateEffect
                words="Adoro desenvolver sistemas web e mobile com interfaces que garantem uma boa usabilidade. No desenvolvimento web, tenho 4 anos de experiência com React.js, 1 ano com Next.js e Angular. Já no mobile, estou iniciando minha experiência com React Native. Busco uma oportunidade como desenvolvedor Frontend ou web Developer em uma empresa que trabalhe com tecnologia e ofereça um ótimo ambiente de desenvolvimento, com uma equipe produtiva e unida, ajudando todos os devs em seus problemas para juntos chegarem ao sucesso."
                className="text-1xl sm:text-1xl md:text-2xl lg:text-3xl tracking-wider font-bold text-white indent-8"
                duration={0.5}
            />
        </section>
    );
}
