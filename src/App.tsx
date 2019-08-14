import * as React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

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
    return (
      <div>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Header />
          <Hero />
          <Footer />
        </ThemeProvider>
      </div>
    );
}

export default App;
