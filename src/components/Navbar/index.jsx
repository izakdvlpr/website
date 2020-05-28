import React, { memo } from "react";

import {
  Header,
  Navigation,
  NavTitle,
  NavLink,
} from "./styles";

const Navbar = () => {
  return (
    <Header>
      <Navigation>
        <NavTitle>Zev</NavTitle>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">Sobre</NavLink>
        <NavLink href="/">Projetos</NavLink>
        <NavLink href="/">Habilidades</NavLink>                
      </Navigation>
    </Header>
  )
}

export default memo(Navbar);
