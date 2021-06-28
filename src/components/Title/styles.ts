import styled from 'styled-components';

export const Container = styled.h1`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 40px;
  font-weight: 500;

  &::after {
    height: 2px;
    width: 50%;

    content: '';

    position: absolute;

    bottom: 0;
    left: 50%;

    transform: translate(-50%, 8px);

    border-radius: 1px;

    background-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
