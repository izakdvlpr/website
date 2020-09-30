import Link from 'next/link';
import React from 'react';

import { skills } from '@data';

import {
  Container,
  Category,
  List,
  Item,
  JavaScriptIcon,
  HTMLIcon,
  ReactIcon,
  DatabaseIcon,
  GitIcon,
  FirebaseIcon,
  ExternalLink,
} from './styles';

const getIcon = (name: string, color: string) => {
  switch (name) {
    case 'JavaScript':
      return <JavaScriptIcon color={color} />;
    case 'HTML':
      return <HTMLIcon color={color} />;
    case 'React':
      return <ReactIcon color={color} />;
    case 'Database':
      return <DatabaseIcon color={color} />;
    case 'Git':
      return <GitIcon color={color} />;
    case 'Firebase':
      return <FirebaseIcon color={color} />;
    default:
      return null;
  }
};

const formatDescription = (
  description: string,
  color: string,
  link: {
    label: string;
    redirect: string;
  },
) => {
  if (!description) {
    return description;
  }

  return (
    <p>
      {description
        .split(link.label)
        .reduce((prev: any, current: any, i: any) => {
          if (!i) {
            return [current];
          }

          return prev.concat(
            <ExternalLink
              key={link.label + current}
              href={link.redirect}
              color={color}
            >
              {link.label}
            </ExternalLink>,
            current,
          );
        }, [])}
    </p>
  );
};

const Skills: React.FC = () => {
  return (
    <Container id="skills">
      <Link href="#skills">
        <Category>
          {'<'}Skills{' />'}
        </Category>
      </Link>

      <List>
        {skills.map(item => (
          <Item key={item.title} color={item.color}>
            <h1>
              {getIcon(item.icon, item.color)} {item.title}
            </h1>
            <p>
              {item.links.length === 0
                ? item.description
                : formatDescription(
                    item.description,
                    item.color,
                    item.links[0],
                  )}
            </p>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default Skills;
