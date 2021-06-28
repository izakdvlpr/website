import { shade } from 'polished';
import styled, { css } from 'styled-components';

import {
  TypeScript,
  JavaScript,
  CSS,
  HTML,
  React,
  NodeJs,
  Python,
  Postgres,
  Mongodb,
  Git,
  Ruby,
  Go,
  Elixir,
} from '@styles/icons';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => shade(0.3, theme.secondary)};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 760px;

  margin-bottom: 168px;
  padding: 0px 24px;
`;

export const SubTitle = styled.h2`
  margin: 40px 0;

  position: relative;

  font-size: 24px;
  font-weight: 400;

  &::before,
  &::after {
    width: 32px;
    height: 1px;

    margin: 0px 16px;

    position: absolute;
    top: 50%;

    content: '';

    transform: translateY(-50%);

    background-color: ${({ theme }) => theme.primary};

    border-radius: 1px;
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;

    &::before,
    &::after {
      content: none;
    }
  }

  &:first-child {
    text-align: left;

    &::before {
      content: none;
    }
  }

  &:nth-child(3) {
    text-align: right;

    &::after {
      right: 240px;
    }

    &::before {
      content: none;
    }
  }
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const SkiilItem = styled.div`
  margin: 25px;

  svg {
    filter: grayscale(100%) opacity(80%);

    transition: filter 0.3s ease-out;
  }

  &:hover {
    svg {
      filter: none;
    }
  }
`;

const iconsCSS = css`
  width: 90px;
  height: 90px;

  fill: ${({ theme }) => theme.primary};
`;

export const TypeScriptIcon = styled(TypeScript)`
  ${iconsCSS};
`;

export const JavaScriptIcon = styled(JavaScript)`
  ${iconsCSS};
`;

export const HTMLIcon = styled(HTML)`
  ${iconsCSS};
`;

export const CSSIcon = styled(CSS)`
  ${iconsCSS};
`;

export const ReactIcon = styled(React)`
  ${iconsCSS};
`;

export const NodeJsIcon = styled(NodeJs)`
  ${iconsCSS};
`;

export const PythonIcon = styled(Python)`
  ${iconsCSS};
`;

export const PostgresIcon = styled(Postgres)`
  ${iconsCSS};
`;

export const MongodbIcon = styled(Mongodb)`
  ${iconsCSS};
`;

export const GitIcon = styled(Git)`
  ${iconsCSS};
`;

export const RubyIcon = styled(Ruby)`
  ${iconsCSS};
`;

export const GoIcon = styled(Go)`
  ${iconsCSS};
`;

export const ElixirIcon = styled(Elixir)`
  ${iconsCSS};
`;
