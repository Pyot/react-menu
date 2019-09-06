import React from 'react';
import styled from 'styled-components';

export const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: auto;
    padding: 32px 0;
    margin-bottom: 21px;
    border-bottom: 3px solid #fff;
`

export const Logo = styled.img.attrs({
    src: 'awaymoFullWhite.svg'
})`
    height: 35px;
`
export const Button = styled.div``

export const Close = styled.img.attrs({
    src: 'whiteClose.svg'
})``

export const Spacer = styled.div``

// const { menus, setMenus } = useContext(MenusContext);
export  const closeMenu = ( menus, setMenus ) => {
    console.log("TCL: closeMenu -> setMenus", setMenus)
    let menusClone = {...menus}
    menusClone.open = false;
    setMenus(menusClone)
  }