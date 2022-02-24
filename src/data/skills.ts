import { IconType } from 'react-icons';
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

export interface ISkill {
  name: string;
  icon: IconType;
}

export const languages: Array<ISkill> = [
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'JavaScript', icon: SiJavascript },
];

export const frameworks: Array<ISkill> = [
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
