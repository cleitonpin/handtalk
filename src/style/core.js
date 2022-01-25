import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  button, input {
    outline: 0;
    border: 0;
  }

  button {
    cursor: pointer;
  }
`;