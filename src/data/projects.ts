import type { Project } from '@/interfaces/data';

export const projects: Project[] = [
  {
    title: 'Rebimboka',
    prefix: 'rebimboka',
    image: '/images/projects/rebimboka.png',
    techs: ['Kotlin', 'Go', 'TypeScript'],
    links: {
      site: 'https://rebimboka.com.br',
      github: 'https://github.com/rebimboka',
    },
  },
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
    title: 'Muoosic',
    prefix: 'muoosic',
    image: '/images/projects/muoosic.png',
    techs: ['Kotlin', 'Go', 'WS'],
    links: {
      site: 'https://muoosic.com',
      github: 'https://github.com/muoosic',
    },
  },
  {
    title: 'Skye',
    prefix: 'skye',
    image: '/images/projects/skye-bot.png',
    techs: ['TypeScript', 'NodeJS', 'NextJS'],
    links: {
      site: 'https://skyebot.website',
      github: 'https://github.com/skyebotofc',
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
