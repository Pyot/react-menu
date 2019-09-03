import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import { Header, Logo, Button, Close } from 'components/Menus/DesktopMenu/Header/Header';
import { Body, List, Wrapper } from 'components/Menus/DesktopMenu/Body/Body';
import ListItem from 'components/Menus/DesktopMenu/ListItem/ListItem';


const Menu = styled.header`
    position: fixed;
    top:0;
    left:0;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.textColor};
    height: 100vh;
    width: 100vw;
    z-index: 999;
`

const MenuWrapper = styled.div`
    max-width: 1236px;
    margin: auto;
    padding: 0px 52px;

`


const DesktopMenuContainer = ({ data }) => {
    return(
        <Menu>
            <MenuWrapper>
                <Header>
                    <Logo alt={'logo'} />
                    <Button data-testid="close-button">
                        <Close />
                    </Button>
                </Header>
                <Body>
                <Wrapper>
                    <List>
                        {data.desktopMain.map(item => <ListItem key={v4()} item={item} type={'main-menu'} />)}
                    </List>
                </Wrapper>
                <Wrapper>
                    <List>
                        {data.desktopUser.map(item => <ListItem key={v4()} item={item} type={'user-menu'} />)}
                    </List>
                </Wrapper>
                </Body>
            </MenuWrapper>
        </Menu>
    )
}

export default DesktopMenuContainer
