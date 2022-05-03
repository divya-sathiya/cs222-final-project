/**
 * @jest-environment jsdom
 */

 import React from "react";
 import { render, screen, fireEvent } from "@testing-library/react";
 import '@testing-library/jest-dom/extend-expect';
 import SignUp from "../client/Pages/SignUp/SignUp";
 
test("SignUp renders without crashing", () => {
    render(<SignUp />)
});