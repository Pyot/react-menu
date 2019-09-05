import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import NavigationBar from 'components/NavigationBar/NavigationBarContainer'
import MenusSelector from 'components/Menus/MenuSelector/MenuSelector';
import MenusContextProvider from 'context/MenusContext.jsx';

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
      <MenusContextProvider>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <>
            <MenusSelector switchOn={800} />
            <NavigationBar />
          </>
        </ThemeProvider>
      </MenusContextProvider>
    </div>
  );
}

export default App;
