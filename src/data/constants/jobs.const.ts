import { IJob } from "../models/interfaces/IJob.interface";

export const jobs: IJob[] = [

    {
        id: 0,
        title: "Desenvolvedor FullStack",
        company: "JUSRN",
        companyCategory: "PORTAL DE NOTÍCIAS JURÍDICAS DO RN",
        duration: "DEZ/2025 – FEV/2026",
        description: `
        Atuei no desenvolvimento completo do portal JUSRN, iniciando pelo levantamento detalhado de requisitos junto ao cliente para entender suas necessidades e a estrutura do blog. Com base nisso, construí toda a solução, incluindo um sistema automatizado de coleta de conteúdos utilizando Apache Airflow com Python e armazenamento em PostgreSQL.\n\nA aplicação foi containerizada com Docker Compose e implantada na AWS, utilizando EC2, S3 para imagens, CDN para distribuição e Route 53 com Elastic IP para gerenciamento do domínio. Também implementei o uso do EventBridge Scheduler para otimizar custos, controlando os períodos de execução da instância.\n\nNo frontend, desenvolvi a interface com Next.js, incluindo um painel administrativo para gestão de matérias. Integrei ainda a API do Instagram ao Airflow para exibir postagens automaticamente no portal. O projeto teve excelente aceitação, gerando muitos elogios e um volume significativo de acessos.


        `,
        href: {
            label: "Acesse o site do JUSRN",
            url: "https://jusrn.com.br/"
        }
    },
    {
        id: 1,
        title: "Desenvolvedor Front-end",
        company: "Nosso Atacarejo",
        companyCategory: "COMÉRCIO DE GÊNEROS ALIMENTÍCIOS LTDA",
        duration: "DEZ/2024 – ATUAL",
        description: `
        Desenvolvo sites e aplicativos mobile voltados tanto para clientes quanto para colaboradores, criando soluções que conectam a loja ao público e também otimizam a operação interna. Atuo em sistemas de campanhas, exibição de ofertas e encartes no ambiente digital, garantindo uma experiência moderna, responsiva e eficiente.\n\nTambém participo do desenvolvimento de ferramentas internas, como gestão de cadastro de produtos integrada ao ERP Consinco, conferência de preços diretamente nas gôndolas, gerenciamento de sorteios realizados nos caixas e administração de ofertas exibidas no site oficial. Essas soluções contribuem diretamente para a organização e produtividade das equipes.\n\nNo dia a dia, utilizo tecnologias como Next.js, React, React Native e Angular, além de aplicar testes automatizados com Jest e Cypress para garantir a qualidade das entregas. Busco sempre seguir boas práticas de desenvolvimento, com foco em performance, escalabilidade e melhoria contínua.
`,
        href: {
            label: "Acesse o site do Nosso Atacarejo",
            url: "https://nossoatacarejo.com.br/"
        }
    }

]