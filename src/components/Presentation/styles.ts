import { lighten, rgba } from 'polished';
import styled, { css, keyframes } from 'styled-components';

import { Github, Linkedin, Twitter, ArrowDown } from '@styles/icons';

export const Container = styled.section`
  height: 100vh;

  display: flex;

  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.primary};
`;

export const Title = styled.h1`
  font-size: 9rem;
  font-weight: 900;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Bio = styled.p`
  padding: 0 20px;

  font-size: 1.5rem;

  b {
    color: ${({ theme }) => lighten(0.3, theme.primary)};
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Divisor = styled.div`
  width: 700px;

  margin: 1.5rem;

  border-bottom: 2px solid ${({ theme }) => rgba(theme.white, 0.2)};

  @media (max-width: 768px) {
    width: 300px;
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

  margin-right: 5px;

  fill: ${({ theme }) => lighten(0.3, theme.primary)};

  &:hover {
    transform: scale(1.03);

    fill: ${({ theme }) => lighten(0.25, theme.primary)};
  }
`;

export const GithubIcon = styled(Github)`
  ${iconCSS}
`;

export const LinkedinIcon = styled(Linkedin)`
  ${iconCSS}
`;

export const TwitterIcon = styled(Twitter)`
  ${iconCSS}
`;

const soonFloating = keyframes`
  0% {      
    transform: translateY(0px);
  }
  
  50% {      
    transform: translateY(-20px);
  }
  
  100% {      
    transform: translateY(0px);
  }
`;

export const ArrowDownIcon = styled(ArrowDown)`
  height: 60px;
  width: 60px;

  margin-top: 60px;

  cursor: pointer;

  fill: ${({ theme }) => theme.white};

  transform: translatey(0px);
  animation: ${soonFloating} 6s ease-in-out infinite;
`;
