import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, expect, test } from '@jest/globals';
import { Login } from '../components/Login/LoginComponent';

describe('Login', () => {
  test('calls handleClick when button is clicked', () => {
    const { getByText } = render(<Login />);
    const buttonElement = getByText('Entrar');

    const handleClickMock = jest.fn();
    jest.spyOn(window, 'alert').mockImplementation(handleClickMock);

    fireEvent.click(buttonElement);

    expect(handleClickMock).toHaveBeenCalled();
  });
});
