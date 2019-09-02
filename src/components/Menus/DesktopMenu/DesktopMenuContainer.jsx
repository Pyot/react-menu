import React from 'react';
import styled from 'styled-components';

import {Header, Logo, Button, Close} from 'components/Menus/DesktopMenu/Header/Header'

const Menu = styled.header`
    position: fixed;
    top:0;
    left:0;
    background: ${props => props.theme.masterColor};
    /* padding: 0px 52px !important; */
    height: 100vh;
    width: 100%;
    z-index: 999;
`

const MenuWrapper = styled.div`
    max-width: 1236px;
    margin: auto;
    padding: 0px 52px;

`


const DesktopMenuContainer = () => {
    return(
        <Menu>
            <MenuWrapper>
                <Header>
                    <Logo alt={'logo'} />
                    <Button data-testid="close-button">
                        <Close />
                    </Button>
                </Header> 
            </MenuWrapper>
        </Menu>
    )
}

export default DesktopMenuContainer
