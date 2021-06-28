import Head from 'next/head';
import React from 'react';

import About from '@components/About';
import Contact from '@components/Contact';
import Footer from '@components/Footer';
import Navigation from '@components/Navigation';
import Presentation from '@components/Presentation';
import Projects from '@components/Projects';
import Skills from '@components/Skills';
import { Container } from '@styles/pages/index';

const HomePage = () => (
  <>
    <Head>
      <title>Zev | Portfólio</title>
    </Head>

    <Container>
      <Navigation />

      <Presentation />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  </>
);

export default HomePage;
