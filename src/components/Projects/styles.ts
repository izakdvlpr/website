import { shade } from 'polished';
import styled from 'styled-components';

import { Github } from '@styles/icons';

export const Container = styled.section`
  padding-bottom: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => shade(0.2, theme.secondary)};
`;

export const Content = styled.div`
  padding: 40px 80px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  width: 45%;
  height: 45%;

  margin: 15px;

  border-radius: 6px;

  background-color: ${({ theme }) => shade(0.6, theme.secondary)};

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;

  flex-shrink: 0;

  border-radius: 3px 3px 0 0;
`;

export const CardContent = styled.div`
  padding: 15px 30px;

  display: grid;

  grid-template-columns: 1fr;
  grid-auto-rows: minmax(min-content, max-content);

  text-align: center !important;

  > a h1 {
    font-size: 1.8rem;

    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => shade(0.4, theme.primary)};
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  > p {
    font-size: 0.9rem;

    @media (max-width: 768px) {
      font-size: 0.7rem;
    }
  }
`;

export const CardFooter = styled.div`
  padding: 15px 30px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  > span {
    margin: 2px;
    padding: 5px;

    border-radius: 4px;

    background-color: ${({ theme }) => shade(0.4, theme.secondary)};

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

export const Button = styled.button`
  padding: 10px 20px;

  display: flex;
  align-items: center;

  border: 3px solid ${({ theme }) => theme.primary};
  border-radius: 30px;

  font-size: 16px;

  color: ${({ theme }) => theme.primary};

  background: ${({ theme }) => shade(0.4, theme.secondary)};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.white};

    transition: 0.2s;

    background: ${({ theme }) => theme.primary};

    svg {
      fill: ${({ theme }) => theme.white};
    }
  }
`;

export const GithubIcon = styled(Github)`
  width: 30px;
  height: 30px;

  margin-left: 15px;

  fill: ${({ theme }) => theme.primary};
`;
