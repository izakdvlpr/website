import type { IconType } from 'react-icons';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

export interface SocialMedia {
  name: string;
  link: string;
  icon: IconType;
}

export const socialMedia: SocialMedia[] = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/izakdvlpr',
    icon: BsTwitter,
  },
  { name: 'Github', link: 'https://github.com/izakdvlpr', icon: BsGithub },
  {
    name: 'Twitter',
    link: 'https://www.linkedin.com/in/izakdvlpr',
    icon: BsLinkedin,
  },
];
