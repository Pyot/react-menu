import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: ${props => props.theme.bg};
`

const ListItem = styled.li`
  float: right;
`

const Button = styled.button`
    display: block;
    text-align: center;
    padding: 14px 16px;
    background-color: ${props => props.theme.bg};
    border: none;
    &:hover {
      background-color: ${props => props.theme.bg};
      color: white;
      opacity: 0.5;
  }
`

const NavigationBarContainer = (props) => {
  return (
    <nav>
      <List data-testid="navigation-list">
        <ListItem>
          <Button data-testid="menu-burger">
            <img src="burgerIcon.svg" alt="burger-menu" />
          </Button>
        </ListItem>
      </List>
    </nav>
  )
}

export default NavigationBarContainer