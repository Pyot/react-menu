import React, { useContext } from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import { Header, Logo, Button, Close, Spacer, closeMenu } from 'components/Menus/Header/Header';
import { Body, BodyWrapper } from 'components/Menus/MobileMenu/Body/Body';
import { List, ListItem } from 'components/Menus/MobileMenu/List/List';
import UserBadge from 'components/Menus/MobileMenu/UserBadge/UserBadge';
import { Footer, Line } from 'components/Menus/Footer/Footer';
import { MenusContext } from 'context/MenusContext';

const Menu = styled.header`
    overflow-y: scroll;
    top:0;
    left:0;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.textColor};
    height: 100vh;
    width: 100vw;
    z-index: 999;
`

const MenuWrapper = styled.div`

    margin: auto;
    padding: 0px 52px;
`


const MenuContainer = ({ data }) => {

    const { menus, setMenus } = useContext(MenusContext);

    return (
        <Menu data-testid="menu">
            <MenuWrapper>
                <Header>
                    <Spacer />
                    <Logo alt={'logo'} />
                    <Button onClick={closeMenu.bind(this, menus, setMenus)} data-testid="close-button">
                        <Close />
                    </Button>
                </Header>
                <Body>
                    <BodyWrapper>
                        <UserBadge
                            name={data.user.name}
                            available={data.user.available}
                            avatar={data.user.avatar}
                        />
                        <List>
                            {data.mobile.map(item => <ListItem key={v4()} item={item} type={'mobile'} />)}
                        </List>
                    </BodyWrapper>
                </Body>
                <Footer>
                    <Line />
                    <div>We're here to help</div>
                </Footer>
            </MenuWrapper>
        </Menu>
    )
}

export default MenuContainer