import React from 'react';
import DesktopMenu from 'components/Menus/DesktopMenu/DesktopMenuContainer';
import styled, { ThemeProvider } from 'styled-components';

const theme = {
  masterColor: "rgb(253, 99, 101)"
}

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DesktopMenu/>
      </ThemeProvider>
    </div>
  );
}

export default App;
