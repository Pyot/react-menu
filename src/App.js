import React from 'react';
import { ThemeProvider, createGlobalStyle} from 'styled-components';

import NavigationBar from 'components/NavigationBar/NavigationBarContainer'
import DesktopMenu from 'components/Menus/DesktopMenu/DesktopMenuContainer';
import MobileMenu from 'components/Menus/MobileMenu/MobileMenuContainer';
import { Body, List, BodyWrapper } from 'components/Menus/DesktopMenu/Body/Body';

import data from './data-mockup/data.js';


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
          <NavigationBar/>
          {/* <DesktopMenu data={data}/> */}
          {/* <MobileMenu data={data}/> */}
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
