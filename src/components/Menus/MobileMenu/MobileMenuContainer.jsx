import React from 'react';
import styled from 'styled-components';
import { v4 } from 'uuid';

import { Header, Logo, Button, Close, Spacer } from 'components/Menus/Header/Header';


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
        <div>MenuMobile</div>
    )
}

export default MenuContainer