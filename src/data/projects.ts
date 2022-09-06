export interface Project {
  title: string;
  prefix: string;
  image: string;
  techs: string[];
  links?: {
    site?: string;
    github?: string;
    playstore?: string;
  };
}

export const projects: Project[] = [
  {
    title: "Marinete's",
    prefix: 'marinetes',
    image: '/images/projects/marinetes.png',
    techs: ['Kotlin', 'TypeScript', 'NodeJS'],
    links: {
      site: 'https://marinetes.com.br',
      playstore:
        'https://play.google.com/store/apps/details?id=com.marinetes.diarist',
    },
  },
  {
    title: 'Urbano Norte',
    prefix: 'urbanoNorte',
    image: '/images/projects/urbano-norte.png',
    techs: ['NextJS', 'Tailwind', 'Prismic'],
    links: {
      site: 'https://urbanonorte.app',
    },
  },
  {
    title: 'Animeline',
    prefix: 'animeline',
    image: '/images/projects/animeline.png',
    techs: ['Dart', 'Kotlin', 'Go', 'GraphQL'],
    links: {
      site: 'https://animeline.xyz',
      github: 'https://github.com/animeline',
    },
  },
  {
    title: 'Skye',
    prefix: 'skye',
    image: '/images/projects/skye-bot.png',
    techs: ['TypeScript', 'NodeJS', 'NextJS'],
    links: {
      site: 'https://skyebot.website',
      github: 'https://github.com/skyebot',
    },
  },
  {
    title: 'Giky',
    prefix: 'giky',
    image: '/images/projects/giky-bot.png',
    techs: ['NextJS', 'Styled Components'],
    links: {
      site: 'https://gikybot.com',
      github: 'https://github.com/gikybot',
    },
  },
  {
    title: 'Zorin',
    prefix: 'zorin',
    image: '/images/projects/zorin-bot.png',
    techs: ['Monorepo', 'NodeJS', 'MongoDB'],
    links: {
      site: 'https://zorin.com.br',
      github: 'https://github.com/zorinbot',
    },
  },
];
