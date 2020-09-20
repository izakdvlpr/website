import React from 'react';

import {
  Container,
  Category,
  Title,
  Description,
  ExternalLink,
} from './styles';

const About: React.FC = () => {
  return (
    <Container id="about">
      <Category>
        {'<'}Quem sou{' />'}
      </Category>

      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <Title>Fala Dev! 🚀</Title>

      <Description>
        Prazer Izak, 17, mais pode me chamar de{' '}
        <ExternalLink href="https://github.com/zevdvlpr">Zev</ExternalLink>. Me
        interessei pela área de <i>Desenvolvimento de Software</i> aos 15 anos
        com a linguagem Javascript. Comecei programando <b>bots para Discord</b>
        , mais eu sempre admirei projetos na Web e principalmente no Mobile.
        <br />
        <br />
        Com o passar do tempo eu conheci a{' '}
        <ExternalLink href="https://youtube.com/rocketseat">
          Rocketseat
        </ExternalLink>
        , foi quando eu me apaixonei por JavaScript e conheci as melhores
        tecnologias, Node Js, React Js e React Native e todo o ecossistema por
        volta dessas tecnologias às quais eu trabalho hoje.
      </Description>
    </Container>
  );
};

export default About;
