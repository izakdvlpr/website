import { shade } from 'polished';
import styled, { css } from 'styled-components';

import {
  JavaScript,
  HTML,
  React,
  Database,
  Git,
  Firebase,
} from '@styles/icons';

export const Container = styled.div`
  padding: 40px 80px;

  background-color: ${({ theme }) => shade(0.3, theme.secondary)};

  @media (max-width: 768px) {
    padding: 40px 50px;
  }
`;

export const Category = styled.h4`
  font-size: 1.2rem;
  font-weight: 500;

  color: ${({ theme }) => theme.primary};

  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

interface ItemProps {
  color?: string;
}

export const Item = styled.li<ItemProps>`
  width: 450px;
  height: 240px;

  margin: 30px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border: 3px solid ${({ color }) => color};
  border-radius: 6px;

  > h1 {
    margin-bottom: 10px;

    display: flex;
    align-items: center;

    font-size: 1.8rem;

    color: ${({ color }) => color};

    svg {
      margin-right: 10px;
    }
  }

  > p {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;

    margin: 15px;
    margin: 25px 30px;

    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 320px) {
    margin: 8px;
  }
`;

const iconsCSS = css`
  width: 35px;
  height: 35px;
`;

export const JavaScriptIcon = styled(JavaScript)<ItemProps>`
  ${iconsCSS}
  
  fill: ${({ color }) => color};
`;

export const HTMLIcon = styled(HTML)<ItemProps>`
  ${iconsCSS}
  
  fill: ${({ color }) => color};
`;

export const ReactIcon = styled(React)<ItemProps>`
  ${iconsCSS}
  
  fill: ${({ color }) => color};
`;

export const DatabaseIcon = styled(Database)<ItemProps>`
  ${iconsCSS}
  
  fill: ${({ color }) => color};
`;

export const GitIcon = styled(Git)<ItemProps>`
  ${iconsCSS}
  
  fill: ${({ color }) => color};
`;

export const FirebaseIcon = styled(Firebase)<ItemProps>`
  ${iconsCSS}
  
  fill: ${({ color }) => color};
`;

interface LinkProps {
  color: string;
}

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})<LinkProps>`
  font-weight: 700;

  color: ${({ color }) => color};

  position: relative;

  &::after {
    height: 0.2rem;
    width: 0;

    margin-top: -0.2rem !important;
    display: block;

    position: absolute;
    left: 0;

    content: '';

    background: ${({ color }) => color};
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after {
    width: 100%;

    left: 0;
  }
`;
