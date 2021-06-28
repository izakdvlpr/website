/* eslint-disable import/extensions */

import React from 'react';

import { skills } from '@data';

import Title from '@components/Title';

import { useTranslation } from '../../../i18n';
import {
  Container,
  Content,
  SubTitle,
  SkillsContainer,
  SkiilItem,
  TypeScriptIcon,
  JavaScriptIcon,
  HTMLIcon,
  CSSIcon,
  ReactIcon,
  NodeJsIcon,
  PythonIcon,
  PostgresIcon,
  MongodbIcon,
  GitIcon,
  RubyIcon,
  GoIcon,
  ElixirIcon,
} from './styles';

const Skills: React.FC = () => {
  const { t } = useTranslation('skills');

  const getIcon = (name: string) => {
    const icons = [
      {
        name: 'TypeScript',
        icon: <TypeScriptIcon />,
      },
      {
        name: 'JavaScript',
        icon: <JavaScriptIcon />,
      },
      {
        name: 'HTML',
        icon: <HTMLIcon />,
      },
      {
        name: 'CSS',
        icon: <CSSIcon />,
      },
      {
        name: 'React',
        icon: <ReactIcon />,
      },
      {
        name: 'NodeJs',
        icon: <NodeJsIcon />,
      },
      {
        name: 'Postgres',
        icon: <PostgresIcon />,
      },
      {
        name: 'MongoDB',
        icon: <MongodbIcon />,
      },
      {
        name: 'Git',
        icon: <GitIcon />,
      },
      {
        name: 'Python',
        icon: <PythonIcon />,
      },
      {
        name: 'Ruby',
        icon: <RubyIcon />,
      },
      {
        name: 'Go',
        icon: <GoIcon />,
      },
      {
        name: 'Elixir',
        icon: <ElixirIcon />,
      },
    ];

    return icons.find(icon => icon.name === name)?.icon;
  };

  return (
    <Container>
      <Title style={{ margin: '64px 0px 30px 0px' }}>{t('title')}</Title>

      <Content>
        <SubTitle>{t('subTitles.skills')}</SubTitle>

        <SkillsContainer>
          {skills.focus.map(item => (
            <SkiilItem key={item}>{getIcon(item)}</SkiilItem>
          ))}
        </SkillsContainer>

        <SubTitle>{t('subTitles.outhers')}</SubTitle>

        <SkillsContainer>
          {skills.outhers.map(item => (
            <SkiilItem key={item}>{getIcon(item)}</SkiilItem>
          ))}
        </SkillsContainer>
      </Content>
    </Container>
  );
};

export default Skills;
