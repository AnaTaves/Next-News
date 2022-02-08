import { ThemeProvider } from "styled-components";

import { createGlobalStyle} from "styled-components"

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  border: '#0a0a0a',
  background: '#363537',
}

export const darkTheme = {
  body: '#02193d',
  text: '#FAFAFA',
  border: '#f7fbff',
  background: '#999',
}

export const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  button {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.border};
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  main{
    display: flex;
    height: 100vh;
    flex-direction: column;

  }
`