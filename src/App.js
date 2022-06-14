
import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import { Navigation } from 'components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navigation />
      </div>
    </ThemeProvider>
  );
}

export default App;
