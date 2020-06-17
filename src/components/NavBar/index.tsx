import React, { memo } from 'react';

import { Container, Logo, Nav, Item } from './styles';

const NavbarComponent = () => {
  return (
    <Container>
      <Logo>Zev.</Logo>
      <Nav>
        <Item>
          <a href="#">Home</a>
        </Item>
        <Item>
          <a href="#about">Sobre</a>
        </Item>
        <Item>
          <a href="#projects">Projetos</a>
        </Item>
        <Item>
          <a href="#skills">Habilidades</a>
        </Item>
      </Nav>
    </Container>
  );
};

export default memo(NavbarComponent);
