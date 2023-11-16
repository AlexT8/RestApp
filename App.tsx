import React from 'react'
import HomeScreen from './screens/Home'
import {ThemeProvider} from "styled-components";
import { darkTheme, lightTheme } from './styles/themes';

export default function App() {

  const [theme, setTheme] = React.useState('light')

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <HomeScreen setTheme={setTheme} theme={theme}/>
    </ThemeProvider>
  )
}
