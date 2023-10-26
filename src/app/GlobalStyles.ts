import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0;
    
    outline: 0;

    box-sizing: border-box;
  }

  body {
    background: #080519;

     
  }
`;
 
export default GlobalStyle;