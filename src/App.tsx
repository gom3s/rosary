import CssBaseline from '@material-ui/core/CssBaseline'
import {createMuiTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import * as React from 'react'
import Layout from './containers/Layout'
import AuthProvider from './context/AuthProvider'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#880e4f',
    },
    secondary: {
      main: '#fb8c00',
    },
  },
})

const App = () => {
  return (
    <div>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Layout />
        </AuthProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
