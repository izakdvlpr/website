import React from "react";
import Layout from "@layout";

import { Container, Logo, Title, About, Divisor } from "@styles/index";

const IndexPage = () => {
  return (
    <Layout title="Meu portifolio :)">
      <Container>
        <Logo
          src="https://avatars2.githubusercontent.com/u/44278486?v=4"
          alt="zevdvlpr"
        />
        <Title>
          zev<span>dvlpr</span>
        </Title>
        <About>
          Programador Full Stack <b>&</b> Apaixonado por Javascript, Tecnologia
          e Pizza
        </About>
        <Divisor />
      </Container>
    </Layout>
  );
};

export default IndexPage;
