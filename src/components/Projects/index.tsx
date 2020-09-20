import React from 'react';

import { projects } from '@data';

import {
  Container,
  Category,
  Column,
  Card,
  CardImage,
  CardContent,
  CardFooter,
} from './styles';

const Projects: React.FC = () => {
  return (
    <Container id="projects">
      <Category>
        {'<'}Projetos{' />'}
      </Category>

      <Column>
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
      </Column>
    </Container>
  );
};

export default Projects;
