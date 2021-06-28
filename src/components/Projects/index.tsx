import React from 'react';

import { projects } from '@data';

import Title from '@components/Title';

import {
  Container,
  Content,
  Card,
  CardImage,
  CardContent,
  CardFooter,
  Button,
  GithubIcon,
} from './styles';

const Projects: React.FC = () => {
  return (
    <Container>
      <Title style={{ margin: '64px 0px 30px 0px' }}>Projetos</Title>

      <Content>
        {projects.map(project => (
          <Card key={project.name}>
            <CardImage src={project.image} alt="card image" />

            <CardContent>
              <a
                href={project.github_page}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h1>{project.name}</h1>
              </a>
              <p>{project.description}</p>
            </CardContent>

            <CardFooter>
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </CardFooter>
          </Card>
        ))}
      </Content>

      <a
        href="https://github.com/zevdvlpr"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>
          Veja mais em <GithubIcon />
        </Button>
      </a>
    </Container>
  );
};

export default Projects;
