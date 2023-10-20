import React, { Suspense } from 'react';
import { lightTheme } from '@Styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '@Styles/globalStyle';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <Suspense>
        <Outlet />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
