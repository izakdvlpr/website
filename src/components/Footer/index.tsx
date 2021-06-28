import React from 'react';

import { socialNetworks } from '@data';

import {
  Container,
  Icons,
  ExternalLink,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DiscordIcon,
} from './styles';

const Footer: React.FC = () => {
  const getIcon = (name: string) => {
    const icons = [
      {
        name: 'Github',
        icon: <GithubIcon />,
      },
      {
        name: 'Linkedin',
        icon: <LinkedinIcon />,
      },
      {
        name: 'Twitter',
        icon: <TwitterIcon />,
      },
      {
        name: 'Discord',
        icon: <DiscordIcon />,
      },
    ];

    return icons.find(icon => icon.name === name)?.icon;
  };

  return (
    <Container>
      <Icons>
        {socialNetworks.map(social => (
          <ExternalLink key={social.name} href={social.link}>
            {getIcon(social.name)}
          </ExternalLink>
        ))}
      </Icons>

      <a
        href="mailto:hello@zevdvlpr.ml"
        target="_blank"
        rel="noopener noreferrer"
      >
        hello@zevdvlpr.ml
      </a>
    </Container>
  );
};

export default Footer;
