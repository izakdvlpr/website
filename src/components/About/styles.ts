import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  padding: 60px 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${({ theme }) => theme.secondary};

  @media (max-width: 768px) {
    height: 100%;

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

export const Title = styled.h1`
  margin: 25px 0;

  font-size: 3rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;

  line-height: 30px;

  @media (max-width: 768px) {
    font-size: 1rem;

    line-height: 25px;
  }
`;

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer',
})`
  font-weight: 700;

  color: ${({ theme }) => theme.primary};

  position: relative;

  &::after {
    height: 0.2rem;
    width: 0;

    margin-top: -0.2rem !important;
    display: block;

    position: absolute;
    left: 0;

    content: '';

    background: ${({ theme }) => theme.primary};
    transition: width 0.3s ease, left 0.3s ease;
  }

  &:hover::after {
    width: 100%;

    left: 0;
  }
`;
