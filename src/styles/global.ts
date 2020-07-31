import { createGlobalStyle } from 'styled-components';

import { shade } from 'polished';

export default createGlobalStyle`   
  * {
    padding: 0;
    margin: 0;
    
    box-sizing: border-box;          
    
    color: ${props => props.theme.colors.white};
  }
  
  html, body #root {
    max-height: 100vh;           
    max-width: 100vw;
    
    height: 100%;           
    width: 100%;
  }  
  
  *, button, input {
    border: 0;
    background: none;
    font-family: 'Raleway', sans-serif;
  }
  
  html {
    background-color: ${props => shade(0.25, props.theme.colors.background)};
  }
`;
