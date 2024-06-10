import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "../../../../context/AuthContext";
import { useDataContext } from "../../../../context/DataContext";
import { useError } from "../../../../context/ErrorContext";
import SignupForm from "../SignupForm";

// Mock the dependencies
jest.mock("../../../../context/AuthContext");
jest.mock("../../../../context/DataContext");
jest.mock("../../../../context/ErrorContext");

describe("SignupForm", () => {
  test("renders signup form correctly", async () => {
    // Mock the hooks return values
    (useAuth as jest.Mock).mockReturnValue({
      register: jest.fn(),
      signOut: jest.fn(),
    });
    (useDataContext as jest.Mock).mockReturnValue({
      setUser: jest.fn(),
    });
    (useError as jest.Mock).mockReturnValue({
      signupError: null,
      setSignupError: jest.fn(),
    });

    // Render the SignupForm
    render(
      <Router>
        <SignupForm />
      </Router>
    );

    // Wait for instances to be fetched
    await waitFor(() => {
      expect(screen.getByLabelText("Instance")).toBeInTheDocument();
    });

    // Input values
    const emailInput = screen.getByLabelText("Email");
    const passwordInput = screen.getByLabelText("Password");
    const instanceSelect = screen.getByLabelText("Instance");

    // Fill the form
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.change(instanceSelect, { target: { value: "connectmate" } });

    // Submit the form
    fireEvent.submit(screen.getByRole("form"));

    // Assertions
    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password123");
    expect(instanceSelect).toHaveValue("connectmate");
    expect(screen.getByText("Register")).toBeInTheDocument();

    // Wait for async actions to complete
    await waitFor(() => {
      expect(useAuth().register).toHaveBeenCalled();
    });
  });

  test("renders signup error message", async () => {
    // Mock the hooks return values
    (useAuth as jest.Mock).mockReturnValue({
      register: jest.fn().mockRejectedValue(new Error("Signup failed")),
      signOut: jest.fn(),
    });
    (useDataContext as jest.Mock).mockReturnValue({
      setUser: jest.fn(),
    });
    (useError as jest.Mock).mockReturnValue({
      signupError: "Sign Up failed, try again with correct Amazon Connect credentials.",
      setSignupError: jest.fn(),
    });

    // Render the SignupForm
    render(
      <Router>
        <SignupForm />
      </Router>
    );

    // Assertions
    expect(screen.getByText("Sign Up failed, try again with correct Amazon Connect credentials.")).toBeInTheDocument();
  });
});
