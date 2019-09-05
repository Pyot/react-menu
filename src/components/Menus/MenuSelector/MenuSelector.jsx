import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import DesktopMenu from 'components/Menus/DesktopMenu/DesktopMenuContainer';
import MobileMenu from 'components/Menus/MobileMenu/MobileMenuContainer';
import { useWindowWidth } from 'hooks/UseWindowWidth';
import { MenusContext } from 'context/MenusContext';
import data from 'data-mockup/data.js';

// Style for CSSTransition.
// To create dieffrent transition please create another wrapper base on SlideUpDown.
// To keep elemen on top of the rest of the site remember add .your-class-enter-done as is below. 
const SlideUpDown = styled.div`
       &.slide-up-down-enter {
            transform: translateY(-100%);
            transition: transform .5s ease;
        }
        
        &.slide-up-down-enter-active {
            transform: translateY(0%);
        }

        &.slide-up-down-exit {
            transform: translateY(0%);
        }
        
        &.slide-up-down-exit-active {
            transform: translateY(-100%);
            transition: transform .3s;
        }

        &.slide-up-down-enter-done > header {
            position: absolute;
        }
`

const SlideLeftRight = styled.div`

        &.slide-left-right-enter {
            transform: translateX(200%);
            transition: transform .5s ease;
        }

        &.slide-left-right-enter-active {
            transform: translateX(0%);
        }

        &.slide-left-right-exit {
            transform: translateX(0%);
        }

        &.slide-left-right-exit-active {
            transform: translateX(100%);
            transition: transform .3s;  
        }

        &.slide-left-right-enter-done > header {
            position: absolute;
        }
`

//It manage which menu should be open on ceratin window width.
//Break point for switching is provide by switchOn props.
//Menu auto switch when user change winows size without closing.
const MenusSelector = ({ switchOn }) => {

    const { menus } = useContext(MenusContext);
    let width = useWindowWidth();

    return width > switchOn ?
        <CSSTransition
            in={menus.open}
            timeout={500}
            classNames="slide-up-down"
            unmountOnExit
        >
            <SlideUpDown>
                <DesktopMenu data={data} />
            </SlideUpDown>
        </CSSTransition>
        :
        <CSSTransition
            in={menus.open}
            timeout={500}
            classNames="slide-left-right"
            unmountOnExit
        >
            <SlideLeftRight>
                <MobileMenu data={data} />
            </SlideLeftRight>
        </CSSTransition>
}

export default MenusSelector