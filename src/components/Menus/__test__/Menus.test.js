import React from 'react';
import { render, Simulate, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DesktopMenu from 'components/Menus/DesktopMenu/DesktopMenuContainer';
import API from 'mockup-api/API.js'


test("render header - logo inside desktop menu", () => {
    const { getByAltText } = render (<DesktopMenu/>);
    expect(getByAltText('logo')).toBeTruthy();
})

test("render header - close button inside desktop menu", () => {
    const { getByTestId } = render (<DesktopMenu/>);
    expect(getByTestId('close-button')).toBeTruthy();
})

test("render body - main and user menu", () => {
    const { getAllByTestId } = render (<DesktopMenu api={API}/>);

    expect(getAllByTestId('main-menu').length).toEqual(API.desktopMain.length);
    expect(getAllByTestId('user-menu').length).toEqual(API.desktopMain.length);    
})