import { ThemeProvider } from 'styled-components';
import theme from 'utils/theme';
import { Navigation } from 'components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import GlobalStyles from './index.css';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navigation items={[
          {
            content: 'Homepage',
            to: '/'
          },
          {
            content: 'Budget',
            to: '/budget'
          },
        ]}/>
        <Routes>
          <Route path="/" element={'Homepage'}/>
          <Route path="/budget" element={'Budget page'}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
