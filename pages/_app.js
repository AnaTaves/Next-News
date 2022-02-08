import { useState } from 'react';
import { ThemeProvider } from "styled-components";
import { Toolbar } from '../components/toolbar';
import { lightTheme, darkTheme, GlobalStyles } from "../ThemeProvider"

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
    }

  return(
  <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
    <GlobalStyles/>
    <Toolbar toggleTheme={toggleTheme}/>
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
