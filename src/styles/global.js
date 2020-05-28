import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,900,900i");
  
  * {
    padding: 0;
    margin: 0; 
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;    
  } 
  
  body {    
    font: 400 16px Montserrat, sans-serif;
    background: #FFFFFF;      
  }
`;