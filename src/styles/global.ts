import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`   
  * {
    padding: 0;
    margin: 0;
    
    box-sizing: border-box;              
  }
  
  html, body #root {
    max-height: 100vh;           
    max-width: 100vw;
    
    height: 100%;           
    width: 100%;
  }  
  
  *, button, input {
    border: 0;    
    
    font-family: 'Fira Code', monospace;
    
    color: ${({ theme }) => theme.white};    
    
    background: none;
  }
  
  html {
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => lighten(0.1, theme.primary)};
    }
    
    ::-webkit-scrollbar-thumb {          
      background-color: ${({ theme }) => lighten(0.1, theme.secondary)};
    }
    
    scroll-behavior: smooth;
    
    background-color: ${({ theme }) => theme.secondary};
  }
  
  a {
    text-decoration: none;
  }
`;
