import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import defaultTheme from './styles/theme/default'
import { Router } from '../Router'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}
