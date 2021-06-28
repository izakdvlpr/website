const projects = [
  {
    name: 'Drocsid',
    description: 'Drocsid é um chat virtual, para conversar com amigos.',
    image: '/static/images/drocsid-screenshot.jpg',
    github_page: 'https://github.com/zevdvlpr/drocsid',
    tags: ['ReactJS', 'NodeJS', 'ExpressJS', 'TypeScript', 'API'],
  },
  {
    name: 'Animeline',
    description:
      'Um site para assistir animes sem propaganda, totalmente gratuito.',
    image: '/static/images/animeline-screenshot.jpg',
    github_page: 'https://github.com/zevdvlpr/animesline',
    tags: ['ReactJS', 'TypeScript', 'Monorepo'],
  },
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
    tags: ['ReactJS', 'NextJS', 'TypeScript', 'Styled Components'],
  },
];

const skills = {
  focus: [
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'React',
    'NodeJs',
    'Postgres',
    'MongoDB',
    'Git',
  ],
  outhers: ['Python', 'Ruby', 'Go', 'Elixir'],
};

const socialNetworks = [
  {
    name: 'Github',
    link: 'https://github.com/zevdvlpr',
    description: 'My github profile',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/zevdvlpr/',
    description: 'My linkedin profile',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/zevdvlpr',
    description: 'My twitter profile',
  },
  {
    name: 'Discord',
    link: 'https://discord.com/users/461273822360895491',
    description: 'My discord profile',
  },
];

export { projects, skills, socialNetworks };
