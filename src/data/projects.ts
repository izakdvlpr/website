export interface IProject {
  title: string;
  description: string;
  image: string;
  techs: string[];
  links?: {
    site?: string;
    github?: string;
  };
}

export const projects: IProject[] = [
  {
    title: 'Skye',
    description:
      'Um bot brasileiro desenvolvido para gerenciar servidores de Discord.',
    image: '/images/projects/skye-bot.png',
    techs: ['TypeScript', 'NodeJS', 'NextJS'],
    links: {
      site: 'https://skyebot.website',
      github: 'https://github.com/skyebot',
    },
  },
  {
    title: 'Urbano Norte',
    description:
      'Busque um serviço de transporte executivo que garanta que você e sua família serão atendidos por um motorista conhecido com segurança.',
    image: '/images/projects/urbano-norte.png',
    techs: ['NextJS', 'Tailwind', 'Prismic'],
    links: {
      site: 'https://urbanonorte.com',
    },
  },
  {
    title: 'Muoosic',
    description: 'Encontre a sua melodia com muoosic.',
    image: '/images/projects/muoosic.png',
    techs: ['NodeJS', 'GraphQL', 'TDD'],
    links: {
      site: 'https://muoosic.com',
      github: 'https://github.com/muoosic',
    },
  },
  {
    title: 'Giky',
    description: 'Focado em gerir e deixar seu servidor seguro!',
    image: '/images/projects/giky-bot.png',
    techs: ['NextJS', 'Styled Components'],
    links: {
      site: 'https://gikybot.com',
      github: 'https://github.com/gikybot',
    },
  },
  {
    title: 'Zorin',
    description:
      'Transmita música com a melhor qualidade para seu servidor, online o tempo todo, todos os dias.',
    image: '/images/projects/zorin-bot.png',
    techs: ['Monorepo', 'NodeJS', 'MongoDB'],
    links: {
      site: 'https://zorin.com.br',
      github: 'https://github.com/zorinbot',
    },
  },
];
