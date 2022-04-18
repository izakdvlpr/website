import type { IconType } from 'react-icons';
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
} from 'react-icons/si';

export interface Skill {
  name: string;
  icon: IconType;
}

export const languages: Skill[] = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
];

export const frameworks: Skill[] = [
  { name: 'NextJS', icon: SiNextdotjs },
  { name: 'ReactJS', icon: SiReact },
  { name: 'Redux', icon: SiRedux },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'Apollo', icon: SiApollographql },
  { name: 'NodeJS', icon: SiNodedotjs },
  { name: 'NestJS', icon: SiNestjs },
  { name: 'AdonisJS', icon: SiAdonisjs },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Redis', icon: SiRedis },
  { name: 'Jest', icon: SiJest },
];
