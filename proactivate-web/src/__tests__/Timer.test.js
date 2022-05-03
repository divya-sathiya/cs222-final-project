/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen, fireEvent } from "@testing-library/react";
 import '@testing-library/jest-dom/extend-expect';
 import Timer from "../client/Pages/Timer/Timer";
 
test("Timer renders without crashing", () => {
    render(<Timer />)
});

test("Check if timer has two buttons and displays minutes and seconds", () => {
    const { getAllByRole, getByTestId } = render(<Timer />);
    const button = screen.getAllByRole("button");
    const min = screen.getByTestId("min");
    const sec = screen.getByTestId("sec");
    expect(min).toHaveTextContent("00");
    expect(sec).toHaveTextContent("00");
    expect(button.length).toBe(2);
});

test("Check if button changes from start to stop", () => {
    const { getAllByRole } = render(<Timer />);
    const button = screen.getAllByRole("button")[0];
    expect(button).toHaveTextContent("Start");
    fireEvent.click(button);
    expect(button).toHaveTextContent("Pause");
});