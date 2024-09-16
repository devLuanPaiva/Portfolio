import { Projects } from "../interfaces";

const projectsPrototypes: Projects[] = [
  {
    id: "1",
    title: "Coffe Recipes",
    description:
      "Protótipo para um sistema de receitas de café com controle de cafeína, desenvolvido para a disciplina de Análise de Sistemas de Projetos Orientados a Objetos. Foram entregues 6 protótipos de interface desktop e 6 mobile, seguindo uma paleta de cores voltada ao tema café, com o inglês como idioma principal.",
    responsibility:
      "Desenvolvi os protótipos utilizando o Figma, cuidando da criação da interface de usuário (UI) para ambas as versões, desktop e mobile. Além disso, implementei um sistema de controle de cafeína nas receitas, conforme solicitado pela disciplina.",
    tools:
      "Figma, Design de Interfaces, Protótipos UI, Análise de Sistemas, Inglês como idioma principal.",
    results:
      "O protótipo foi muito elogiado pelo professor José Ferdinandy, que solicitou a implementação do sistema completo com base no protótipo. O design claro e a usabilidade eficiente foram destacados, resultando em uma interface intuitiva para o usuário final.",
    images: [
      {
        id: "1",
        src: "https://i.ibb.co/wJjHtPS/prototipo-Recipes01.png",
        description:
          "Tela de login, onde o usuário pode se autenticar para acessar as receitas e funcionalidades do sistema.",
        title: "Login",
      },
      {
        id: "2",
        src: "https://i.ibb.co/HXQ70x6/prototipo-Recipes02.png",
        description:
          "Tela para cadastrar uma nova receita de café, com campos para título, descrição, ingredientes, instruções e nível de cafeína.",
        title: "Cadastrar Receita",
      },
      {
        id: "3",
        src: "https://i.ibb.co/kB9d6HY/prototipo-Recipes03.png",
        description:
          "Tela de busca, onde os usuários podem procurar por receitas de café através do nome.",
        title: "Buscar Receitas",
      },
      {
        id: "4",
        src: "https://i.ibb.co/nsksLys/prototipo-Recipes04.png",
        description:
          "Feed de receitas onde os usuários podem visualizar e navegar pelas diversas receitas de café compartilhadas.",
        title: "Feed de Receitas",
      },
      {
        id: "5",
        src: "https://i.ibb.co/R2fZ17b/prototipo-Recipes05.png",
        description:
          "Detalhes de uma receita, incluindo uma visão completa dos ingredientes, método de preparo e informações sobre o nível de cafeína.",
        title: "Detalhes de uma Receita",
      },
      {
        id: "6",
        src: "https://i.ibb.co/zXh5tJX/prototipo-Recipes06.png",
        description:
          "Tela para registrar um novo usuário, permitindo que novos usuários se cadastrem e acessem o sistema.",
        title: "Registrar Usuário",
      },
    ],
  },
  {
    id: "2",
    title: "AgendAR",
    description:
      "AgendAR é um sistema desenvolvido como freelancer para uma clínica odontológica, com o objetivo de facilitar o gerenciamento de agendamentos tanto para o estabelecimento quanto para os clientes. O sistema conta com versões para ambos, permitindo visualizar serviços e horários disponíveis, além de agendar consultas e procedimentos.",
    responsibility:
      "Fui responsável pelo desenvolvimento completo do sistema, que inclui tanto a interface do cliente quanto do estabelecimento, garantindo funcionalidades específicas como o gerenciamento de horários e serviços pelo estabelecimento, bem como a visualização e cadastro de agendamentos por parte dos clientes.",
    tools:
      "React.js, Node.js, PostgreSQL, Django Rest Framework, Google Maps API, Axios, Figma para prototipação.",
    results:
      "O projeto foi concluído com sucesso e implementado na clínica odontológica. A solução foi elogiada pela equipe, que destacou a praticidade no gerenciamento dos agendamentos e a fácil interação dos clientes com o sistema. A clínica conseguiu melhorar a organização dos atendimentos, resultando em uma experiência mais eficiente tanto para a administração quanto para os pacientes.",
    images: [
      {
        id: "1",
        src: "https://i.ibb.co/b6FDMp0/prototipo-Agendar01.png",
        description:
          "Tela para registrar um novo usuário, permitindo o cadastro de clientes no sistema, seja pelo estabelecimento ou pelo próprio cliente.",
        title: "Registrar Usuário",
      },
      {
        id: "2",
        src: "https://i.ibb.co/sjhPjBt/Cadastrar-Comerciante.jpg",
        description:
          "Tela para registrar um novo estabelecimento, aqui é necessário informar endereço, nome, informações de contato e usuário.",
        title: "Registrar Estabelecimento",
      },
      {
        id: "3",
        src: "https://i.ibb.co/yQdGdGh/Dashboard-Comerciante.png",
        description:
          "Dashboard do sistema, com uma visão geral do crescimento dos agendamentos diários, semanais e mensáis, localização do estabelecimento. Além de uma barra de navegação lateral onde os usuários podem navegar pelas funcionalidades do sistema.",
        title: "Dashboard Estabelecimento",
      },
      {
        id: "4",
        src: "https://i.ibb.co/VCMkXsK/prototipo-Agendar02.png",
        description:
          "Tela para cadastrar serviços, disponível apenas para o estabelecimento, permitindo a criação de novos serviços oferecidos na clínica.",
        title: "Cadastrar Serviços",
      },
      {
        id: "5",
        src: "https://i.ibb.co/Z269sF5/prototipo-Agendar03.png",
        description:
          "Tela onde o estabelecimento visualiza os serviços disponíveis na clínica, com a opção de gerenciá-los e atualizá-los conforme necessário.",
        title: "Serviços do Estabelecimento",
      },
      {
        id: "6",
        src: "https://i.ibb.co/7zfV2Vz/prototipo-Agendar04.png",
        description:
          "Tela para realizar um agendamento, onde os usuários podem escolher serviços e horários disponíveis para marcar consultas ou procedimentos.",
        title: "Realizar Agendamento",
      },
      {
        id: "7",
        src: "https://i.ibb.co/JCRLpyY/prototipo-Agendar06.png",
        description:
          "Visão dos agendamentos do estabelecimento, onde a equipe pode verificar todos os atendimentos agendados pelos clientes ao longo da semana ou do dia.",
        title: "Agendamentos do Estabelecimento",
      },
      {
        id: "8",
        src: "https://i.ibb.co/kBwZMSZ/prototipo-Agendar05.png",
        description:
          "Horários de funcionamento cadastrados pelo estabelecimento, que determinam a disponibilidade para agendamentos pelos clientes.",
        title: "Horários de Funcionamento",
      },
      {
        id: "9",
        src: "https://i.ibb.co/Ltnt7gQ/Localiza-o-atual-Comerciante.png",
        description: "Com base no endereço fornecido no cadastro, a idéia é ter essa tela para que a localização seja disponibilizada para os cliente, afim de que eles possam encontrar o estabelecimento.",
        title: "Localização do Estabelecimento",
      },
      {
        id: "10",
        src: "https://i.ibb.co/gTnwrJ0/Localiza-o-editar-Comerciante.png",
        description: "Caso queira, o usuário pode alterar a localização do estabelecimento fornecendo outro endereço.",
        title: "Editar Localização do Estabelecimento",
      }
    ],
  },
];
export default projectsPrototypes;
