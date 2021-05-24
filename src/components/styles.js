import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   body {
      font-family: 'Source Sans Pro';
      background-color: #030303;
      color: #D7DADC;
   }
   a {
      text-decoration: none;
      color: #4fbcff;

      &:hover {
         text-decoration: underline;
      }
   }
`;
