import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import { Navigation } from 'components';

import GlobalStyles from './index.css';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <Navigation items={[]}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
