import React from 'react';

import { Container } from './styles';

interface Props {
  style?: React.StyleHTMLAttributes;
}

const Title: React.FC<Props> = ({ children, style }) => {
  return <Container style={style}>{children}</Container>;
};

export default Title;
