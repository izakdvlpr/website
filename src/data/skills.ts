import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiGraphql,
  SiApollographql,
  SiNodedotjs,
  SiNestjs,
  SiAdonisjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiJest,
  SiKotlin,
  SiGo,
  SiDart,
  SiFlutter,
  SiHtml5,
  SiCss3,
} from 'react-icons/si';

import type { Skill } from '@/interfaces/data';

export const languages: Skill[] = [
  { name: 'Kotlin', icon: SiKotlin },
  { name: 'Go', icon: SiGo },
  { name: 'Dart', icon: SiDart },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
];

export const frameworks: Skill[] = [
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'NextJS', icon: SiNextdotjs },
  { name: 'NextJS', icon: SiNextdotjs },
  { name: 'ReactJS', icon: SiReact },
  { name: 'Redux', icon: SiRedux },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Apollo', icon: SiApollographql },
  { name: 'React Native', icon: SiReact },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'NodeJS', icon: SiNodedotjs },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'AdonisJS', icon: SiAdonisjs },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redis', icon: SiRedis },
  { name: 'Jest', icon: SiJest },
];
