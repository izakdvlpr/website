import styled from "styled-components";

import { lighten, shade } from "polished";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
    color: ${colors.primary};
  }
`;

export const About = styled.p`
  padding: 0 20px;

  font-size: 20px;

  > b {
    color: ${colors.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Divisor = styled.hr`
  width: 45em;
  
  margin: 1.5rem;
     
  border: 1px solid ${lighten(0.50, colors.black)};
  
  @media (max-width: 768px) {
    width: 20em;
  }
  
  @media (max-width: 320px) {
    width: 17em;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GithubIcon = styled(FaGithub)`
  height: 40px;
  width: 40px;
  
  margin: 0 5px;
  
  color: ${colors.primary};
`;

export const LinkedinIcon = styled(FaLinkedin)`
  height: 40px;
  width: 40px;
  
  margin: 0 5px;
  
  color: ${colors.primary};
`;

export const TwitterIcon = styled(FaTwitter)`
  height: 40px;
  width: 40px;
  
  margin: 0 5px;
  
  color: ${colors.primary};
`;

export const EmailIcon = styled(MdEmail)`
  height: 40px;
  width: 40px;
  
  margin: 0 5px;
  
  color: ${colors.primary};
`;