import styled from "styled-components";

import { lighten } from "polished";

import {  } from "react-icons/fa";

import colors from "../colors";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 150px;
  width: 150px;

  margin: 20px 0;

  border-radius: 50%;
  border: 10px solid ${colors.primary};
`;

export const Title = styled.h1`
  font-size: 40px;
  
  margin: 1rem 0;

  > span {
    color: ${lighten(0.15, colors.primary)};
  }
`;

export const About = styled.p`
  font-size: 20px;

  > b {
    color: ${lighten(0.15, colors.primary)};
  }
`;

export const Divisor = styled.hr`
  width: 45em;
  
  margin: 1.5rem;
     
  border: 1px solid ${lighten(0.50, colors.black)};
`;
