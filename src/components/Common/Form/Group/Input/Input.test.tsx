import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

describe('<Input />', () => {
  test('it should mount', () => {
    render(<Input type="text" name='name' placeholder='placeholder' />);
    
    const input = screen.getByTestId('Input');

    expect(input).toBeInTheDocument();
  });
});