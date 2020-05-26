import React from "react";

import Link from "next/link";

import {
  Header,
  Navigation
} from "./styles";

const NavbarComponent = () => {
  return (
    <Header>
      <Navigation>
        <Link href="/"><a>Home</a></Link>        
      </Navigation>
    </Header>
  )
}

export default React.memo(NavbarComponent);
