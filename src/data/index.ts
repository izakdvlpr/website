const projects = [
  {
    name: 'Orangutan',
    description:
      'Orangutan é um bot feito para o aplicativo de bate-papo Discord. Sua função é gerenciar e proteger sua comunidade do Discord deixando à mais alegre de pessoas espaçosas.',
    image: '/static/images/orangutan-screenshot.jpg',
    github_page: 'https://github.com/zevdvlpr/orangutan',
    tags: ['NodeJS', 'ExpressJS', 'TypeScript', 'API', 'DiscordJS', 'MongoDB'],
  },
  {
    name: 'zevdvlpr',
    description:
      'Meu site (sim, este) é onde eu mostro minhas habilidades, trabalho e qualquer outra coisa que eu decida colocar aqui.',
    image: '/static/images/zevdvlpr-screenshot.jpg',
    github_page: 'https://github.com/zevdvlpr/zevdvlpr.ml',
    tags: [
      'ReactJS',
      'NextJS',
      'TypeScript',
      'Styled Components',
      'PostgresSQL',
    ],
  },
  {
    name: 'Drocsid',
    description: 'Drocsid é um chat virtual, para conversar com amigos.',
    image: '/static/images/drocsid-screenshot.jpg',
    github_page: 'https://github.com/zevdvlpr/drocsid',
    tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'TypeScript', 'API'],
  },
];

const skills = [
  {
    color: '#EFD81D',
    icon: 'JavaScript',
    title: 'JavaScript',
    description:
      'Aprendi JavaScript como minha primeira linguagem de programação com a Rocketseat. Gosto muito de trabalhar com JavaScript no Front-End e no Back-End, especificamente no Node.JS. JS é tão legal que você pode criar um site e até mesmo apps mobile com apenas uma linguagem.',
    links: [
      {
        label: 'Rocketseat',
        redirect: 'https://youtube.com/rocketseat',
      },
    ],
  },
  {
    color: '#DD4B25',
    icon: 'HTML',
    title: 'HTML/CSS',
    description:
      'HTML e CSS são essenciais para o Front-End. De que outra forma você espera criar um site? Enquanto todos nós odiamos CSS, ainda é o padrão e com boas razões. Ah, e HTML não é uma linguagem de programção :c',
    links: [],
  },
  {
    color: '#37D1F7',
    icon: 'React',
    title: 'React',
    description:
      'React JS e React Native são absolutamente incríveis. É a única coisa boa que o Facebook trouxe para este mundo. Se eu for criar um site, provavelmente o construirei com o React JS, porque o HTML simples para a web é doloroso demais.',
    links: [],
  },
  {
    color: '#61AE51',
    icon: 'Database',
    title: 'MongoDB',
    description:
      'O MongoDB é ótimo. Sem bancos de dados baseados em documentos, eu ficaria preso no MySQL. O MongoDB é muito fácil recomendo bastante para quem está iniciando na sua carreira como desenvolvedor(a).',
    links: [],
  },
  {
    color: '#00718B',
    icon: 'Database',
    title: 'MySQL',
    description:
      'As tabelas... são legais até, só que eu prefiro usar bancos de dados NoSQL (depende do projeto) baseados em documentos. Não me interpretem mal, os bancos de dados relacionais ainda são úteis, e eu estou perfeitamente bem em trabalhar com eles.',
    links: [],
  },
  {
    color: '#F7C52D',
    icon: 'Firebase',
    title: 'Firebase',
    description:
      'O Google pensou muito bem em criar um banco de dados NoSQL desse tipo, gosto bastante de implementar Firebase nos meus projetos principalmente no Front-End que ajuda bastante.',
    links: [],
  },
  {
    color: '#E94E31',
    icon: 'Git',
    title: 'Git',
    description:
      'Que tipo de desenvolvedor não usa o Git? É essencial para praticamente qualquer projeto. O Git é ótimo no que faz, pois é um sistema muito maduro. Ooh! Quase esqueci de Meu Github! Confira :)',
    links: [
      {
        label: 'Meu Github',
        redirect: 'https://github.com/zevdvlpr',
      },
    ],
  },
];

export { projects, skills };
