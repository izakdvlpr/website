/* eslint-disable import/extensions */

import React from 'react';

import { socialNetworks } from '@data';

import { useTranslation } from '../../../i18n';
import {
  Container,
  Title,
  Bio,
  Divisor,
  Icons,
  ExternalLink,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DiscordIcon,
  ArrowDownIcon,
} from './styles';

const Presentation: React.FC = () => {
  const { t } = useTranslation('presentation');

  const handleNextSection = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault();

    return document.getElementById('about')?.scrollIntoView();
  };

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
      <Title>{t('title')}</Title>

      <Bio>{t('bio')}</Bio>

      <Divisor />

      <Icons>
        {socialNetworks.map(social => (
          <ExternalLink key={social.name} href={social.link}>
            {getIcon(social.name)}
          </ExternalLink>
        ))}
      </Icons>

      <a href="#about" aria-label="next section" onClick={handleNextSection}>
        <ArrowDownIcon />
      </a>
    </Container>
  );
};

export default Presentation;
