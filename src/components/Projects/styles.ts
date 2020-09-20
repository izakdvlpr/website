import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
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
