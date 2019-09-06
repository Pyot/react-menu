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

test("open/close menu after click on the button menu", () => {
    const { getByTestId, queryByTestId } = render (<App/>);
    //Provide time equal to CSSTransition or longer otherwize JEST check element to quick and result are not real.
    const cssTransitionTime = 1000;

    expect(queryByTestId('menu')).toBeNull();

    fireEvent.click(getByTestId('menu-burger'));
    expect(getByTestId('menu')).toBeInTheDocument();
    fireEvent.click(getByTestId('close-button'));
    setTimeout(() => {
        expect(queryByTestId('menu')).toBeNull();
    }, cssTransitionTime);
})
