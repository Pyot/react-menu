import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from '../../../App';

import NavigationBar from 'components/NavigationBar/NavigationBarContainer';
import { MenusContext } from 'context/MenusContext'


afterEach(cleanup)

test("render navigation - check list and burger buton", () => {

    let menus = { open: false };

    const tree = (
        <MenusContext.Provider value={{ menus }}>
            <NavigationBar />
        </MenusContext.Provider>

    )

    const { getByTestId } = render(tree);

    expect(getByTestId('navigation-list')).toBeTruthy();
    expect(getByTestId('menu-burger')).toBeTruthy();
})

test("open menu after click on the button menu", () => {
    const { getByTestId, queryByTestId } = render (<App/>);

    expect(queryByTestId('menu')).toBeNull();

    fireEvent.click(getByTestId('menu-burger'));
    expect(getByTestId('menu')).toBeInTheDocument();
})
