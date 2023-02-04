import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';

import type { SocialMedia } from '@/interfaces/data';
import { urls } from '@/utils/urls';

export const socialMedia: SocialMedia[] = [
  { name: 'Twitter', link: urls.twitter, icon: BsTwitter },
  { name: 'Github', link: urls.github, icon: BsGithub },
  { name: 'Linkedin', link: urls.linkedin, icon: BsLinkedin },
];
