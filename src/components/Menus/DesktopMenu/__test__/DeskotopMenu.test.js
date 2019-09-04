import React from 'react';
import { render, Simulate, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import DesktopMenu from 'components/Menus/DesktopMenu/DesktopMenuContainer';
import data from 'data-mockup/data.js';


test("render header - logo inside desktop menu", () => {
    const { getByAltText } = render (<DesktopMenu data={data}/>);
    
    expect(getByAltText('logo')).toBeTruthy();
})

test("render header - close button inside desktop menu", () => {
    const { getByTestId } = render (<DesktopMenu data={data}/>);
    
    expect(getByTestId('close-button')).toBeTruthy();
})

test("render body - main and user menu", () => {
    const { getAllByTestId } = render (<DesktopMenu data={data}/>);

    expect(getAllByTestId('main-menu').length).toEqual(data.desktopMain.length);
    expect(getAllByTestId('user-menu').length).toEqual(data.desktopMain.length);    
})

test("render body - user badge", () => {
    const { getByAltText, getByText } = render (<DesktopMenu data={data}/>);

    expect(getByAltText('avatar')).toBeTruthy();
    expect(getByText(/dominik/i)).toBeTruthy()
    expect(getByText(/1500.00/i)).toBeTruthy()
})

test("render footer - check company details", () => {
    const { getByText } = render (<DesktopMenu data={data}/>);

    expect(getByText(/we're here/i)).toBeTruthy();
    expect(getByText(/20 8050/i)).toBeTruthy()
    expect(getByText(/support@awaymo/i)).toBeTruthy()
})