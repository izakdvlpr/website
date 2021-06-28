/* eslint-disable import/extensions */

import React from 'react';
import ReactMarkdown from 'react-markdown';

import Title from '@components/Title';

import { useTranslation } from '../../../i18n';
import { Container, Content, SubTitle, Description } from './styles';

const About: React.FC = () => {
  const { t } = useTranslation('about');

  return (
    <Container id="about">
      <Title style={{ marginTop: 70 }}>{t('title')}</Title>

      <Content>
        <SubTitle>{t('subTitle')}</SubTitle>

        <Description>
          <ReactMarkdown
            children={String(t('description'))}
            allowDangerousHtml
          />
        </Description>
      </Content>
    </Container>
  );
};

export default About;
