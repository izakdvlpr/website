import styled, { css } from 'styled-components';

import { Github, Linkedin, Twitter, Email } from '@styles/icons';
import { lighten, shade } from 'polished';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 150px;
  width: 150px;

  margin: 20px 0;

  border-radius: 50%;
  border: 10px solid ${props => props.theme.colors.primary};
  
  &:hover {    
    border: 10px solid ${props => shade(0.10, props.theme.colors.primary)};    
  }
`;

export const Title = styled.h1`
  font-size: 40px;

  margin: 1rem 0;
  
  > span {
    color: ${props => props.theme.colors.primary};
  }
`;

export const About = styled.p`
  padding: 0 20px;
  font-size: 20px;

  > b {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Divisor = styled.div`
  width: 45em;

  margin: 1.5rem;

  border: 1px solid ${props => lighten(0.5, props.theme.colors.black)};

  @media (max-width: 768px) {
    width: 20em;
  }

  @media (max-width: 320px) {
    width: 17em;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const iconCSS = css`
  height: 40px;
  width: 40px;

  margin: 0 5px;  
  
  fill: ${props => props.theme.colors.primary};

  &:hover {
    transform: scale(1.03);
    fill: ${props => shade(0.10, props.theme.colors.primary)};
  }
`;

export const GithubIcon = styled(Github)`
  ${iconCSS}
`;

export const LinkedinIcon = styled(Linkedin)`
  color: red;
  ${iconCSS}
`;

export const TwitterIcon = styled(Twitter)`
  ${iconCSS}
`;

export const EmailIcon = styled(Email)`
  ${iconCSS}
`;
