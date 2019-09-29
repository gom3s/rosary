import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import * as React from 'react';
import Layout from './containers/Layout';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#880e4f',
    },
    secondary: {
      main: '#fb8c00',
    },
  },
});

const App = () => {
    // tslint:disable-next-line:no-console
    console.log('process.env', process.env);
    return (
      <div>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Layout />
        </ThemeProvider>
      </div>
    );
}

export default App;
