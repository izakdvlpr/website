import { shade, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 80px;

  background-color: ${({ theme }) => shade(0.2, theme.secondary)};

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

export const Column = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.li`
  width: 45%;
  height: 45%;

  margin: 15px;

  border-radius: 6px;

  border: 3px solid ${({ theme }) => shade(0.4, theme.primary)};

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
