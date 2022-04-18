export interface Project {
  title: string;
  description: string;
  image: string;
  techs: string[];
  links?: {
    site?: string;
    github?: string;
  };
}

export const projects: Project[] = [
  {
    title: 'Urbano Norte',
    description:
      'Viaje com um serviço de transporte executivo e com um motorista de segurança.',
    image: '/images/projects/urbano-norte.png',
    techs: ['NextJS', 'Tailwind', 'Prismic'],
    links: {
      site: 'https://urbanonorte.com',
    },
  },
  {
    title: 'Animeline',
    description:
      'Aplicativo para assistir animes sem propaganda, totalmente gratuito.',
    image: '/images/projects/animeline.png',
    techs: ['React Native', 'GraphQL'],
    links: {
      site: 'https://animeline.com',
      github: 'https://github.com/animeline',
    },
  },
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
