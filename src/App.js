import React from 'react';
import DesktopMenu from 'components/Menus/DesktopMenu/DesktopMenuContainer';
import styled, { ThemeProvider, createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,900&display=swap');
    font-family: 'Lato', sans-serif;
  }
`
const theme = {
  bg: "rgb(253, 99, 101)",
  textColor: "white"
}

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <>
          <div>menu</div>
          <DesktopMenu/>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
