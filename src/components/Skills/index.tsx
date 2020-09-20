import React from 'react';

import { Container, Category, List, Item, ExternalLink } from './styles';

const Skills: React.FC = () => {
  return (
    <Container>
      <Category>
        {'<'}Habilidades{' />'}
      </Category>

      <List>
        <Item color="#EFD81D">
          <h1>JavaScript</h1>
          <p>
            Aprendi javascript como minha primeira linguagem de programação com
            a{' '}
            <ExternalLink href="https://youtube.com/rocketseat" color="#EFD81D">
              Rocketseat
            </ExternalLink>
            . Gosto muito de trabalhar com Javascript no Front-end e no
            Back-end, especificamente no Node.JS. JS é tão legal que você pode
            criar app para web até apps mobile com apenas uma linguagem.
          </p>
        </Item>
        <Item color="#DD4B25">
          <h1>HTML/CSS</h1>
          <p>
            HTML e CSS são essenciais para o front-end. De que outra forma você
            espera criar um site? Enquanto todos nós odiamos CSS, ainda é o
            padrão e com boas razões. Ah, e HTML não é uma linguagem :c
          </p>
        </Item>
        <Item color="#37D1F7">
          <h1>React</h1>
          <p>
            React JS e React Native são absolutamente incríveis. É a única coisa
            boa que o Facebook trouxe para este mundo. Se eu for criar um site,
            provavelmente o construirei com o React JS, porque o HTML simples
            para a web é doloroso demais.
          </p>
        </Item>
        <Item color="#61AE51">
          <h1>MongoDB</h1>
          <p>
            O MongoDB é ótimo. Sem bancos de dados baseados em documentos, eu
            ficaria preso no MySQL. O MongoDB é muito fácil recomendo bastante
            para quem está iniciando na sua carreira como desenvolvedor(a).
          </p>
        </Item>
        <Item color="#00718B">
          <h1>MySQL</h1>
          <p>
            As tabelas... são legais até, só que eu prefiro usar bancos de dados
            NoSQL (depende do projeto) baseados em documentos. Não me
            interpretem mal, os bancos de dados relacionais ainda são úteis, e
            eu estou perfeitamente bem em trabalhar com eles.
          </p>
        </Item>
        <Item color="#F7C52D">
          <h1>Firebase</h1>
          <p>
            {' '}
            O google pensou muito bem em criar um banco de dados NoSQL desse
            tipo, gosto bastante de implementar Firebase nos meus projetos
            principalmente no Front-end que ajuda bastante.
          </p>
        </Item>
        <Item color="#E94E31">
          <h1>Git</h1>
          <p>
            Que tipo de desenvolvedor não usa o Git? É essencial para
            praticamente qualquer projeto. O Git é ótimo no que faz, pois é um
            sistema muito maduro. Ooh! Quase esqueci de{' '}
            <ExternalLink href="https://github.com/zevdvlpr" color="#E94E31">
              Meu github
            </ExternalLink>
            ! Confira :)
          </p>
        </Item>
      </List>
    </Container>
  );
};

export default Skills;
