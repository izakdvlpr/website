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
    border: none;  
    outline: none;  
    
    font-family: 'Fira Code', monospace;
    
    color: ${({ theme }) => theme.white};    
    
    background: none;
  }
  
  a {
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  html {
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-thumb {     
      border-radius: 8px;     
      background-color: ${({ theme }) => lighten(0.1, theme.secondary)};
    }
    
    ::-webkit-scrollbar-track {      
      background-color: ${({ theme }) => lighten(0.1, theme.primary)};
    }      
    
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    scroll-behavior: smooth;
    
    background-color: ${({ theme }) => theme.secondary};
  }  
`;
