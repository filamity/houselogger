import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import theme from './theme'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)