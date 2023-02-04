import type { IconType } from 'react-icons';

export interface Navigation {
  name: string;
  href: string;
}

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

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SocialMedia {
  name: string;
  link: string;
  externalLink?: boolean;
  icon: IconType;
}

export interface Achievement {
  title: string;
  description?: string;
}

export interface TimelineList {
  year: string;
  achievements: Achievement[];
}
