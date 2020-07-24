import { createGlobalStyle } from "styled-components";

import colors from "./colors";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    
    box-sizing: border-box;    
    
    font-family: 'Raleway', sans-serif;
  }
  
  html, body #root {
    height: 100%;   
    
    background-color: ${colors.background};
  }
`;