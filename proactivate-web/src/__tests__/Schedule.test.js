/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen, fireEvent } from "@testing-library/react";
 import { mount } from 'enzyme'
 import '@testing-library/jest-dom/extend-expect';
 import Form from "../client/Pages/Schedule/Form";
 
test("Form renders without crashing", () => {
    render(<Form />)
});
  
test("Form submission should not call add todos if text and day fields are empty", () => {
    const add = jest.fn();
    const { getByTestId } = render(<Form setTodos={add} />);
    const btn = screen.getByTestId("submit");
    fireEvent.click(btn);
  
    expect(add).not.toHaveBeenCalledTimes(1);
});

// test case not compiling
test("Form submission should go through successfully", () => {
    const add = jest.fn();
    const { getByTestId } = render(<Form setTodos={add} />);
    const task = screen.getByTestId("todo-input");
    const day = screen.getByTestId("select");
    const btn = screen.getByTestId("submit");
  
    fireEvent.change(task, { target: { value: "Final Exam Prep" } });
    const wrapper = mount(<Form value="monday" onChange={jest.fn()}/>)

    expect(wrapper.find('select').props().value).toBe('Monday')
  
    fireEvent.click(btn);
  
    expect(add).toHaveBeenCalledTimes(0);
    expect(add).toHaveBeenCalledWith({
      text: "Final Exam Prep",
      day: "Monday",
      completed: false,
      id: "3452"
    });
  
    expect(task).toHaveValue("");
    expect(day).toHaveValue("");
});