import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import { Header, Logo, Button, Close, Spacer } from 'components/Menus/Header/Header';
import { Body, BodyWrapper } from 'components/Menus/MobileMenu/Body/Body';
// import ListItem from 'components/Menus/MobileMenu/ListItem/ListItem';
import UserBadge from 'components/Menus/MobileMenu/UserBadge/UserBadge';
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
                <Body>
                    <BodyWrapper>
                        <UserBadge
                            name={data.user.name}
                            available={data.user.available}
                            avatar={data.user.avatar}
                        />
                        <ul>
                            <li>
                                test
                            </li>
                            <li>
                                test
                            </li>
                        </ul>
                    </BodyWrapper>
                </Body>
                
                <Footer>
                        <Line/>
                        <div>We're here to help</div>
                </Footer>
            </MenuWrapper>
        </Menu>
    )
}

export default MenuContainer