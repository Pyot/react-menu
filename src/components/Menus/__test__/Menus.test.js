import React from 'react';
import { render, Simulate, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import DesktopMenu from 'components/Menus/DesktopMenu/DesktopMenuContainer';


test("render logo inside desktop menu header", () => {
    const { getByAltText } = render (<DesktopMenu/>);
    expect(getByAltText('logo')).toBeTruthy();
})

test("render close button inside desktop menu header", () => {
    const { getByTestId } = render (<DesktopMenu/>);
    expect(getByTestId('close-button')).toBeTruthy();
})