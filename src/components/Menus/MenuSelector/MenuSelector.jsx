import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';


import DesktopMenu from 'components/Menus/DesktopMenu/DesktopMenuContainer';
import MobileMenu from 'components/Menus/MobileMenu/MobileMenuContainer';
import { MenusContext } from 'context/MenusContext';
import data from 'data-mockup/data.js';

// Style for CSSTransition 
const SlideUpDown = styled.div`
       &.slide-enter {
            transform: translateY(-100%);
            transition: transform .5s ease;
        }
        
        &.slide-enter-active {
            transform: translateY(0%);
        }

        &.slide-exit {
            transform: translateY(0%);
        }
        
        &.slide-exit-active {
            transform: translateY(-100%);
            transition: transform .3s;
        }

        &.slide-enter-done > header {
            position: absolute;
        }
`


const MenusSelector = () => {
    const { menus } = useContext(MenusContext)
    
    return (
        <CSSTransition
            in={menus.open}
            timeout={500}
            classNames="slide"
            unmountOnExit
        >
            <SlideUpDown>
                <DesktopMenu data={data}/>
            </SlideUpDown>
        </CSSTransition>
    )
}

export default MenusSelector