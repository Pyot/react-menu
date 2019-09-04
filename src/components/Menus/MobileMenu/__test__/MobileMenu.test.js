import React from 'react';
import { render, Simulate, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


import MobileMenu from 'components/Menus/MobileMenu/MobileMenuContainer';
import data from 'data-mockup/data.js';

test("render header - logo inside mobile menu", () => {
    const { getByAltText } = render (<MobileMenu data={data}/>);
    expect(getByAltText('logo')).toBeTruthy();
})

test("render header - close button inside mobile menu", () => {
    const { getByTestId } = render (<MobileMenu data={data}/>);
    expect(getByTestId('close-button')).toBeTruthy();
})

test("render footer - check company details", () => {
    const { getByText } = render (<MobileMenu data={data}/>);
    expect(getByText(/we're here/i)).toBeTruthy();
})

test("render body - user badge", () => {
    const { getByAltText, getByText } = render (<MobileMenu data={data}/>);

    expect(getByAltText('avatar')).toBeTruthy();
    expect(getByText(/dominik/i)).toBeTruthy()
    expect(getByText(/1500.00/i)).toBeTruthy()
})