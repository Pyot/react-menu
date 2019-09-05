import React from 'react';
import { render, Simulate, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import NavigationBar from 'components/NavigationBar/NavigationBarContainer';


test("render navigation - check list and burger buton", () => {
    const { getByTestId } = render (<NavigationBar/>);

    expect(getByTestId('navigation-list')).toBeTruthy();
    expect(getByTestId('menu-burger')).toBeTruthy();
})
