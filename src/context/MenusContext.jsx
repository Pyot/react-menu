import React, { createContext, useState } from 'react';

export const MenusContext = createContext();

const MenusContextProvider = (props) => {
    const [ menus, setMenus ] = useState({ open: false })

    return (
        <MenusContext.Provider value={{ menus, setMenus }}>
            { props.children }
        </MenusContext.Provider>
    )
}

export default MenusContextProvider