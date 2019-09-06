import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DesktopMenu from 'components/Menus/DesktopMenu/DesktopMenuContainer';
import { MenusContext } from 'context/MenusContext';
import data from 'data-mockup/data.js';


test("render header - logo inside desktop menu", () => {
    let menus = { open: true };

    const tree = (
        <MenusContext.Provider value={{ menus }}>
            <DesktopMenu data={data} />
        </MenusContext.Provider>
    );

    const { getByAltText } = render(tree);

    expect(getByAltText('logo')).toBeTruthy();
})

test("render header - close button inside desktop menu", () => {
    let menus = { open: true };

    const tree = (
        <MenusContext.Provider value={{ menus }}>
            <DesktopMenu data={data} />
        </MenusContext.Provider>
    );

    const { getByTestId } = render(tree);

    expect(getByTestId('close-button')).toBeTruthy();
})

test("render body - main and user menu", () => {

    let menus = { open: true };

    const tree = (
        <MenusContext.Provider value={{ menus }}>
            <DesktopMenu data={data}/>
        </MenusContext.Provider>
    );

    const { getAllByTestId } = render (tree);

    expect(getAllByTestId('main-menu').length).toEqual(data.desktopMain.length);
    expect(getAllByTestId('user-menu').length).toEqual(data.desktopMain.length);    
})

test("render body - user badge", () => {
    let menus = { open: false };

    const tree = (
        <MenusContext.Provider value={{ menus }}>
            <DesktopMenu data={data}/>
        </MenusContext.Provider>
    );

    const { getByAltText, getByText } = render (tree);

    expect(getByAltText('avatar')).toBeTruthy();
    expect(getByText(/dominik/i)).toBeTruthy()
    expect(getByText(/1500.00/i)).toBeTruthy()
})

test("render footer - check company details", () => {
    let menus = { open: true };

    const tree = (
        <MenusContext.Provider value={{ menus }}>
            <DesktopMenu data={data}/>
        </MenusContext.Provider>
    );

    const { getByText } = render(tree);

    expect(getByText(/we're here/i)).toBeTruthy();
    expect(getByText(/20 8050/i)).toBeTruthy()
    expect(getByText(/support@awaymo/i)).toBeTruthy()
})