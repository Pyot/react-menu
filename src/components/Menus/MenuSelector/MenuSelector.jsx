import React, { useContext } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

import DesktopMenu from 'components/Menus/DesktopMenu/DesktopMenuContainer';
import MobileMenu from 'components/Menus/MobileMenu/MobileMenuContainer';
import { useWindowWidth } from 'hooks/UseWindowWidth';
import { MenusContext } from 'context/MenusContext';
import data from 'data-mockup/data.js';

//Styles for CSSTransition.
//To create a different transition. Please create another wrapper based on SlideUpDown.
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

`

//It allows a sliding menu above the page content without moving it left, right or up and down.
 const Positioner = styled.div`
  position: absolute;
  z-index: 999;
`

//It manages which menu should be open on certain window width.
//Breakpoint for switching is provided by switch On props.
//Menu auto switch when the user changes windows size without closing it.
const MenusSelector = ({ switchOn }) => {

    const { menus } = useContext(MenusContext);
    let width = useWindowWidth();

    return (
        <Positioner>
            {width > switchOn ?
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
                </CSSTransition>}
        </Positioner>
    )
}

export default MenusSelector