import { shade } from 'polished';
import styled from 'styled-components';

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

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  list-style: none;
`;

interface ItemProps {
  color?: string;
}

export const Item = styled.li<ItemProps>`
  width: 450px;
  height: 220px;

  margin: 30px;
  padding: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 6px;

  background-color: ${({ color }) => color};

  > h1 {
    font-size: 1.8rem;
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
    margin: 7px;
  }
`;

interface LinkProps {
  color: string;
}

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})<LinkProps>`
  font-weight: 700;

  color: ${({ theme }) => theme.white};

  position: relative;

  &::after {
    height: 0.2rem;
    width: 0;

    margin-top: -0.2rem !important;
    display: block;

    position: absolute;
    left: 0;

    content: '';

    background: ${({ color }) => shade(0.1, color)};
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after {
    width: 100%;

    left: 0;
  }
`;
