import Select from '../Select';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

describe('Select', () => {
    test('green select renders correctly', () => {
        render(
            <BrowserRouter>
                <Select color="green" />
            </BrowserRouter>
        )
    })
});
