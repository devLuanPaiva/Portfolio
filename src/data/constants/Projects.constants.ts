import { Projects } from "../interfaces";

const projects: Projects[] = [
  {
    id: "1",
    title: "Pokédex",
    description:
      "Uma aplicação web que simula uma Pokédex, permitindo aos usuários pesquisar, visualizar e filtrar informações sobre os Pokémon, utilizando a PokeAPI. A aplicação também oferece a funcionalidade de salvar Pokémons como favoritos.",
    responsibility:
      "Fui responsável por integrar a PokeAPI para listar os Pokémons, exibir os detalhes de cada um ao serem clicados, e permitir o salvamento de Pokémons como favoritos no local storage. Além disso, realizei testes unitários, de integração e testes e2e para garantir a qualidade de cada funcionalidade implementada.",
    tools: "Vue 3, Vite, TypeScript, Bootstrap, Vitest, Cypress, Git, Gitflow",
    results:
      "Entreguei um software bem versionado, com documentação detalhada, testado e aprovado em mais de 10 cenários de teste. Aperfeiçoei minhas habilidades com Vue e realizei o deploy da aplicação na Vercel.",
    images: [
      {
        id: "1",
        src: "https://i.ibb.co/YLQsPXN/Captura-de-tela-2024-10-06-145214.png",
        description: "Página inicial da Pokédex.",
        title: "Página Inicial",
      },
      {
        id: "2",
        src: "https://i.ibb.co/rM6jZGv/Captura-de-tela-2024-10-06-145303.png",
        description: "Listagem dos Pokémons filtrados por tipo selecionado.",
        title: "Filtrar por Tipo",
      },
      {
        id: "3",
        src: "https://i.ibb.co/VJjps1g/Captura-de-tela-2024-10-06-145333.png",
        description:
          "Filtragem de Pokémons pelo nome à medida que o usuário digita as iniciais.",
        title: "Filtrar por Nome",
      },
      {
        id: "4",
        src: "https://i.ibb.co/3pyPQs6/Captura-de-tela-2024-10-03-085334.png",
        description: "Tela de listagem dos Pokémons favoritos salvos.",
        title: "Pokémons Favoritos",
      },
    ],
  },

  {
    id: "2",
    title: "Barba Brutal",
    description:
      "Barba Brutal é um sistema completo para uma barbearia com uma temática de rock clássico, onde os clientes podem realizar seus agendamentos de cortes de cabelo e barba. O projeto utiliza uma abordagem monorepo para integrar o frontend, backend e mobile, centralizando as regras de negócio em um core global utilizando a biblioteca TurboRepo.",
    responsibility:
      "Durante o desenvolvimento, aprendi diversos conceitos de arquitetura limpa, super classes, TypeScript e boas práticas de programação, o que proporcionou uma experiência única como desenvolvedor.",
    tools:
      "Utilização do Turbo Repo para gerenciar o mono-repo e garantir uma integração eficiente entre as diferentes partes do sistema. No frontend utilizei Next.js, Tailwind CSS, @radix-ui, @tabler/icons-react, lucide-react, TypeScript. No mobile utilizei React Native, Expo, @expo/vector-icons, @react-native-async-storage/async-storage,@react-navigation. Já o backend foi desenvolvido em Nest.js e o banco em Prisma.",
    results:
      "Os resultados foram o aprendizado em utilizar essas tecnologias, aprimorando habilidades com arquitetura limpa; Implementação de um sistema robusto e eficiente,que atende às necessidades específicas de uma barbearia com uma identidade única.",
    images: [
      {
        id: "1",
        src: "https://i.ibb.co/9wnM4y1/barbearia01.png",
        description:
          "Nessa tela é apredentado quais são os serviços disponíveis, os barbeiros e os relatos dos clientes.",
        title: "Landing",
      },
      {
        id: "2",
        src: "https://i.ibb.co/pd0VPxS/barbearia05.png",
        description:
          "O usuário deve selecionar um barbeiro para cortar seu cabelo.",
        title: "Escolher Barbeiro",
      },
      {
        id: "3",
        src: "https://i.ibb.co/cQtWpBT/barbearia06.png",
        description:
          "O usuário deve selecionar os serviços. A cada serviço selecionado, o valor no sumário ao lado é alterado.",
        title: "Escolher Serviços",
      },
      {
        id: "4",
        src: "https://i.ibb.co/rQy5LqH/barbearia07.png",
        description:
          "Com base no tempo de duração dos serviços, o usuário deve selecionar uma quantidade X de horários, sendo que cada um leva 15 minutos. Além disso, os horários já reservados ficam indisponíveis.",
        title: "Escolher Horário",
      },
      {
        id: "5",
        src: "https://i.ibb.co/FHD0sgZ/barbearia08.png",
        description:
          "Após finalizar o agendamento, o usuário vem para essa tela de sucesso.",
        title: "Sucesso",
      },
      {
        id: "6",
        src: "https://i.ibb.co/x8jhRsg/barbearia09.png",
        description:
          "Somente no perfil do barbeiro, fica disponibilizado essa tela. A mesma mostra quais agendamentos para o barbeiro logado estão marcados para o dia selecionado.",
        title: "Agenda de Horários",
      },
    ],
  },
  {
    id: "3",
    title: "E-Commerce",
    description:
      "O objetivo do projeto é listar produtos eletrônicos na página inicial, permitir que os usuários adicionem produtos ao carrinho e gerenciem suas quantidades diretamente na página de carrinho",
    responsibility:
      "Aprendi a criar um contexto em que era possível listar produtos que estavam em constans e seguiam a interface products, adicionar esses produtos ao carrinho e persistir os dados no SessionStorage.",
    tools:
      "Utilizando Next.js como principal framework, Tailwind CSS para estilização, Tabler Icons React para ícones e GitFlow para organização de commits e branchs.",
    results:
      "Consegui reforçõu meu aprendizado utilizando Next.js, TypeScript, GitFlow e Tailwind CSS, já que conheci novas funcionalidades utilizando essas ferramentas. Com esses novos conhecimentos, posso aprimorar cada vez mais meus projetos fututos.",
    images: [
      {
        id: "1",
        src: "https://i.ibb.co/DCTpn0J/ECommerce01.png",
        description:
          "Cada card possui a imagem, o título, o valor e a descição do produto e permite que o usuário o adicione no carrinho.",
        title: "Listagem de Produtos",
      },
      {
        id: "2",
        src: "https://i.ibb.co/dJk5SJb/ECommerce02.png",
        description:
          "Se o carrinho estiver vazio, é exibido essa mensagem junto com a opção de ir para listar produtos.",
        title: "Carrinho Vazio",
      },
      {
        id: "3",
        src: "https://i.ibb.co/yQPXJQs/ECommerce03.png",
        description:
          "Com o carrinho preenchido, é exibido a listar produtos. No rodapé, é exibido o valor total somando a quantidade de cada produto multiplicado pelos seus valores.",
        title: "Carrinho Preenchido",
      },
    ],
  },
  {
    id: "4",
    title: "Sistema de Agendamentos - AgendAR",
    description:
      "O AgendAR é um sistema que permite agendamentos em diversos tipos de estabelecimentos, oferecendo funcionalidades como gerenciamento de serviços, localização via Google Maps e visualização de dados estatísticos.",
    responsibility:
      "Fui responsável por desenvolver os protótipos de interfaces tanto do estabelecimento quanto do cliente. Também desenvolvi toda a API Rest e o sistema front-end consumindo dados dessa API. Por fim, subi a aplicação para a nuvem.",
    tools:
      "Utilizei Figma para a prototipação, Django para a API Rest e, para o front-end, utilizei bibliotecas como Axios, JWT-decode, React Icons, React Router DOM, React Query, Sass e Gulp. Segui boas práticas de programação, com foco na organização, semântica de HTML e componentização.",
    results:
      "Consegui entregar um sistema de agendamentos capaz de otimizar como são feitos os agendamentos dos comércios, como barbearias, clínicas, manicures e afins.",
    images: [
      {
        id: "1",
        src: "https://i.ibb.co/qjDPm45/agendar01.png",
        description: "",
        title: "Autenticação",
      },
      {
        id: "2",
        src: "https://i.ibb.co/NnDG1H8/agendar02.png",
        description:
          "Essa tela exibe a quantidade de agendamentos mensais, semanais e diários. Também é exibido a localização do estabelecimento.",
        title: "Dashboard",
      },
      {
        id: "3",
        src: "https://i.ibb.co/5BVwwcj/agendar03.png",
        description:
          "Aqui é exibido todos os agendamentos diários ou semanais e disponibiliza a opção de realizar novo agendamento.",
        title: "Agendamentos",
      },
      {
        id: "4",
        src: "https://i.ibb.co/qNNHf9B/agendar04.png",
        description:
          "Em forma de cards, os horários de funcionamento do estabelecimento são exibidos.",
        title: "Horários",
      },
    ],
  },
  {
    id: "5",
    title: "Gerenciador de Horários",
    description:
      "Esta aplicação visa facilitar o processo de gerenciamento de horários acadêmicos, trazendo uma interface simples e funcionalidades que auxiliam no combate a conflitos de horários.",
    responsibility:
      "Responsável por desenvolver os protótipos e toda a interface front-end, deixar responsivo, documentar e testar a aplicação através de testes unitários.",
    tools:
      "Utilizei ferramentas como Figma, Astah UML, Selenium IDE, React.js, CSS, AWS Amplify. O projeto foi feito em equipe seguindo a metodologia Scrum e tendo contato direto com o cliente.",
    results:
      "Consegui entregar um software capaz de auxiliar a coordenação de um curso a gerenciar melhor os horários acadêmicos, evitando conflitos de horários que podem existir entre as turmas.",
    images: [
      {
        id: "1",
        src: "https://i.ibb.co/sVqCg8Y/gerenciador01.png",
        description: "",
        title: "Landing",
      },
      {
        id: "2",
        src: "https://i.ibb.co/s1cSQR8/gerenciador02.png",
        description: "",
        title: "Autenticação",
      },
      {
        id: "3",
        src: "https://i.ibb.co/fvQNm0P/gerenciador03.png",
        description:
          "Aqui é feito uma listagem de todos os professores cadastrados, junto com suas respectivas horas semanais. Também é possivel buscar, editar e exluir um professor.",
        title: "Listar Professores",
      },
      {
        id: "4",
        src: "https://i.ibb.co/LdRvyP7/gerenciador04.png",
        description:
          "Possibilita que o usuário cadastre um ou muitos professores de uma só vez através de arquivo csv. Em cada cabeçalho das seções, é exibido uma regra de negócio para que não aja erros de cadastro.",
        title: "Cadastrar Professores",
      },
      {
        id: "5",
        src: "https://i.ibb.co/vjP34s8/gerenciador05.png",
        description:
          "O formulário exige que seja informado o código do componente, número da turma e de vagas disponíveis, e o(s) professor(es). Ao clicar em Selecionar Horários, é exibido uma tabela de checkbox com os horários disponiveis seguindo as informações passadas.",
        title: "Cadastrar Turma",
      },
      {
        id: "6",
        src: "https://i.ibb.co/NxMH1QH/gerenciador07.png",
        description:
          "Após o usuário informar qual semestre ele deseja visualizar as turmas, é exibido essa tabela cujo cada coluna representa um dia e cada linha um horário com slot de 55 minutos. Com isso, é exibido o código do componente e o número da turma.",
        title: "Turmas do Semestre",
      },
    ],
  },
];

export default projects;
