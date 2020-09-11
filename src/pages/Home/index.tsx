import React from 'react';

import Layout from '@layout';

import {
  Container,
  Section,
  Logo,
  Title,
  About,
  Divisor,
  Icons,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon
} from '@styles/pages/index';

const IndexPage = () => (
  <Layout>
    <Container>
      <Section>
        <Logo src="/static/images/logo.gif" alt="zevdvlpr" />
        <Title>
          zev<span>dvlpr</span>
        </Title>
        <About>
          Programador Full Stack <b>&</b> Apaixonado por Javascript, Tecnologia
          e Pizza.
        </About>
        <Divisor />
        <Icons>
          <a href="https://github.com/zevdvlpr">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/zevdvlpr/">
            <LinkedinIcon />
          </a>
          <a href="https://twitter.com/zevdvlpr">
            <TwitterIcon />
          </a>
        </Icons>
      </Section>
    </Container>
  </Layout>
);

export default IndexPage;
