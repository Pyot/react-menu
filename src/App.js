import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

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

//It helps shows better how menu slides over the page content.
const Faker = styled.div`
  width:100vw;
  height: 100vh;
  background: #abbaab; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #abbaab, #ffffff); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #abbaab, #ffffff);
`

function App() {
  return (
    <div className="App">
      <MenusContextProvider>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <>
            <NavigationBar />
            <MenusSelector switchOn={800} />
            <Faker/>
          </>
        </ThemeProvider>
      </MenusContextProvider>
    </div>
  );
}

export default App;
