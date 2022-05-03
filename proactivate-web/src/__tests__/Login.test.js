/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen, fireEvent } from "@testing-library/react";
 import '@testing-library/jest-dom/extend-expect';
 import Login from "../client/Pages/Login/Login";
 
 // test cases not compiling due to external module import
test("Login renders without crashing", () => {
    render(<Login />)
});

test("Login should submit email and password", () => {
    const onSubmitMock = jest.fn();
    const password = 'test';
    const email = 'test@gmail.com';

    const {getByLabelText, getByText} = render(<Login onSubmit={onSubmitMock}/>);

    fireEvent.change(screen.getByLabelText(/Email/i), {target: {value: email}});
    fireEvent.change(screen.getByLabelText(/Password/i), {target: {value: password}});
    fireEvent.click(screen.getByText('Login'));

    expect(onSubmitMock).toHaveBeenCalledWith(
      {email, password},
      expect.any(Function),
      expect.any(Object),
    );
});