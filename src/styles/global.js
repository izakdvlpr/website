import { createGlobalStyle } from "styled-components";

import Constants from "../util/Constants";

export default createGlobalStyle`
  @import url(${Constants.fonts.MONTSERRAT});
  
  * {
    padding: 0;
    margin: 0; 
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
  }
  
  body {    
    font: 400 16px Montserrat, sans-serif;
    background: ${Constants.colors.FULL_WHITE};  
  }
`;