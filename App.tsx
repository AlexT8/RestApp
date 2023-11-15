import HomeScreen from './screens/Home'
import {ThemeProvider} from "styled-components";
import { darkTheme, lightTheme } from './styles/themes';

export default function App() {
  return (
    <ThemeProvider theme={false ? lightTheme : darkTheme}>
      <HomeScreen />
    </ThemeProvider>
  )
}
