import { lighten } from 'polished';
import styled, { css } from 'styled-components';

import { Github, Linkedin, Twitter, Discord } from '@styles/icons';

export const Container = styled.footer`
  width: 100%;

  padding: 40px 80px;

  display: flex;

  align-items: center;
  text-align: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.primary};

  @media (max-width: 425px) {
    flex-direction: column;

    a {
      margin-top: 30px;
    }
  }
`;

export const Icons = styled.div``;

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})``;

const iconCSS = css`
  height: 40px;
  width: 40px;

  margin-right: 8px;

  fill: ${({ theme }) => lighten(0.3, theme.primary)};

  &:hover {
    transform: scale(1.03);

    fill: ${({ theme }) => lighten(0.25, theme.primary)};
  }
`;

export const GithubIcon = styled(Github)`
  ${iconCSS};
`;

export const LinkedinIcon = styled(Linkedin)`
  ${iconCSS};
`;

export const TwitterIcon = styled(Twitter)`
  ${iconCSS};
`;

export const DiscordIcon = styled(Discord)`
  ${iconCSS};
`;
