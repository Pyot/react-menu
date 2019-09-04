import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import { Header, Logo, Button, Close, Spacer } from 'components/Menus/Header/Header';
import { Body, List, BodyWrapper } from 'components/Menus/DesktopMenu/Body/Body';
import ListItem from 'components/Menus/DesktopMenu/ListItem/ListItem';
import UserBadge from 'components/Menus/DesktopMenu/UserBadge/UserBadge';
import { Footer, Line } from 'components/Menus/Footer/Footer';


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


const MenuContainer = ({data}) => {
    return (
        <Menu>
            <MenuWrapper>
                <Header>
                    <Spacer/>
                    <Logo alt={'logo'} />
                    <Button data-testid="close-button">
                        <Close />
                    </Button>
                </Header>
                
                <Footer>
                        <Line/>
                        <div>We're here to help</div>
                        <div>+44 (0) 20 8050 3459</div>
                        <div>support@awaymo.com</div>
                </Footer>
            </MenuWrapper>
        </Menu>
    )
}

export default MenuContainer