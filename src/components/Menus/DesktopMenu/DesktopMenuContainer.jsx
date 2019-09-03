import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import { Header, Logo, Button, Close } from 'components/Menus/DesktopMenu/Header/Header';
import { Body, List, BodyWrapper } from 'components/Menus/DesktopMenu/Body/Body';
import ListItem from 'components/Menus/DesktopMenu/ListItem/ListItem';
import UserBadge from 'components/Menus/DesktopMenu/UserBadge/UserBadge';
import { Footer, Line } from 'components/Menus/DesktopMenu/Footer/Footer';

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
    return (
        <Menu>
            <MenuWrapper>
                <Header>
                    <Logo alt={'logo'} />
                    <Button data-testid="close-button">
                        <Close />
                    </Button>
                </Header>
                <Body>
                    <BodyWrapper>
                        <List>
                            {data.desktopMain.map(item => <ListItem key={v4()} item={item} type={'main-menu'} />)}
                        </List>
                    </BodyWrapper>
                    <BodyWrapper>
                        <UserBadge
                            name={data.user.name}
                            available={data.user.available}
                            avatar={data.user.avatar}
                        />
                        <List>
                            {data.desktopUser.map(item => <ListItem key={v4()} item={item} type={'user-menu'} />)}
                        </List>
                    </BodyWrapper>
                </Body>
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

export default DesktopMenuContainer
