import React from 'react';
import { render, Simulate, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import MobileMenu from 'components/Menus/MobileMenu/MobileMenuContainer';
import { MenusContext } from 'context/MenusContext';
import data from 'data-mockup/data.js';

test("render header - logo inside mobile menu", () => {
    let menus = { open: true };

    const tree = (
        <MenusContext.Provider value={{ menus }}>
            <MobileMenu data={data} />
        </MenusContext.Provider>
    );

    const { getByAltText } = render(tree);

    expect(getByAltText('logo')).toBeTruthy();
})

test("render header - close button inside mobile menu", () => {
    let menus = { open: true };

    const tree = (
        <MenusContext.Provider value={{ menus }}>
            <MobileMenu data={data} />
        </MenusContext.Provider>
    );

    const { getByTestId } = render(tree);

    expect(getByTestId('close-button')).toBeTruthy();
})

test("render body - main and user menu", () => {
    let menus = { open: true };

    const tree = (
        <MenusContext.Provider value={{ menus }}>
            <MobileMenu data={data} />
        </MenusContext.Provider>
    );

    const { getAllByTestId } = render(tree);

    expect(getAllByTestId('mobile').length).toEqual(data.mobile.length);
})

test("render body - user badge", () => {
    let menus = { open: true };

    const tree = (
        <MenusContext.Provider value={{ menus }}>
            <MobileMenu data={data} />
        </MenusContext.Provider>
    );

    const { getByAltText, getByText } = render(tree);

    expect(getByAltText('avatar')).toBeTruthy();
    expect(getByText(/dominik/i)).toBeTruthy()
    expect(getByText(/1500.00/i)).toBeTruthy()
})

test("render footer - check company details mobile menu", () => {
    let menus = { open: true };

    const tree = (
        <MenusContext.Provider value={{ menus }}>
            <MobileMenu data={data} />
        </MenusContext.Provider>
    );

    const { getByText } = render(tree);

    expect(getByText(/we're here/i)).toBeTruthy();
})

