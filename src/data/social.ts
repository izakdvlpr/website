import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';

import type { SocialMedia } from '@/interfaces/data';
import { urls } from '@/utils/urls';

export const socialMedia: SocialMedia[] = [
  { name: 'Twitter', link: urls.twitter, externalLink: true, icon: BsTwitter },
  { name: 'Github', link: urls.github, externalLink: true, icon: BsGithub },
  {
    name: 'Linkedin',
    link: urls.linkedin,
    externalLink: true,
    icon: BsLinkedin,
  },
  { name: 'Email', link: urls.email, externalLink: false, icon: SiGmail },
];
