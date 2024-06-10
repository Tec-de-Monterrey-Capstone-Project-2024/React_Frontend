import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import InputField from '../InputField';

test('applies the correct variant class when variant is provided', () => {
    const { container } = render(
      <InputField
        label="Name:"
        placeholder="Enter your name"
        value=""
        onChange={() => {}}
        variant="1"
      />
    );
  

    const inputContainer = container.querySelector('.input-field-container');
    expect(inputContainer).toHaveClass('variant1');
  });
  
  test('applies no variant class when variant is not provided', () => {
    const { container } = render(
      <InputField
        label="Name:"
        placeholder="Enter your name"
        value=""
        onChange={() => {}}
      />
    );
  

    const inputContainer = container.querySelector('.input-field-container');
    expect(inputContainer).not.toHaveClass('variant1');
    expect(inputContainer).not.toHaveClass('variant2'); 
  });
  
  test('calls the onChange function when the user types', () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <InputField
        label="Name:"
        placeholder="Enter your name"
        value=""
        onChange={handleChange}
        variant="1"
      />
    );
  
    const inputElement = getByTestId('input-field');
  

    fireEvent.change(inputElement, { target: { value: 'Hello' } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('Hello');
  });