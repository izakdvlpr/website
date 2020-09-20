import Link from 'next/link';
import React from 'react';

import {
  Container,
  Title,
  Bio,
  Divisor,
  Icons,
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  ArrowDownIcon,
} from './styles';

const Presentation: React.FC = () => {
  return (
    <Container>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Title>I'm Zev.</Title>

      <Bio>
        Programador Full Stack <b>&</b> Apaixonado por Javascript, Tecnologia e
        Pizza.
      </Bio>

      <Divisor />

      <Icons>
        <a
          href="https://github.com/zevdvlpr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
        </a>

        <a
          href="https://www.linkedin.com/in/zevdvlpr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon />
        </a>

        <a
          href="https://twitter.com/zevdvlpr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TwitterIcon />
        </a>
      </Icons>

      <Link href="#about">
        <ArrowDownIcon />
      </Link>
    </Container>
  );
};

export default Presentation;
