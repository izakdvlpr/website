import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;

  background-color: ${({ theme }) => shade(0.4, theme.secondary)};
`;
