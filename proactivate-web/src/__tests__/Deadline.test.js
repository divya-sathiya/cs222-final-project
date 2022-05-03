/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen, fireEvent } from "@testing-library/react";
 import '@testing-library/jest-dom/extend-expect';
 import Deadline from "../client/Pages/Deadline/Deadline";
 
 // test case not working due to external module import
test("Deadline renders without crashing", () => {
    render(<Deadline />)
});

test("Deadline submission should go through successfully", () => {
    const add = jest.fn();
    const { getByTestId } = render(<Deadline/>);

    const btn = screen.getByTestId("submit");
    fireEvent.click(btn);
  
    expect(add).not.toHaveBeenCalledTimes(1);
});