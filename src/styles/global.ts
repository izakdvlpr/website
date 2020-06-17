import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`  
  * {
    padding: 0;
    margin: 0; 
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;    
  }
  
  :root {
    --js-primary: #FBD214;
    --js-secondary: #FCDF5A;
    --ts: #007ACC;
  }
  
  body {    
    font: 500 16px Poppins, sans-serif;
    background: #FFFFFF;  
  }  
`;