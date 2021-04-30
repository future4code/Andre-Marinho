import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import theme from './constants/theme';
import  Router  from './routes/Router';
import GlobalState from './global/GlobalState';

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalState>
          <Router/>
        </GlobalState>
      </ThemeProvider>
    </div>
  );
}

export default App;
