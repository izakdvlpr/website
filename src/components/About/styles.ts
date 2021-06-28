import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  margin-bottom: 120px;
  padding: 60px 100px;

  background-color: ${({ theme }) => theme.secondary};

  @media (max-width: 768px) {
    padding: 40px 50px;
  }
`;

export const SubTitle = styled.h2`
  margin: 25px 0;

  font-size: 30px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Description = styled.div`
  font-size: 22px;

  line-height: 30px;

  a {
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
  }

  @media (max-width: 768px) {
    font-size: 15px;

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
