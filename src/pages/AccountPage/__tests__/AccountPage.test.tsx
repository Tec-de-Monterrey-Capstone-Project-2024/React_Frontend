import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { cleanup, render, screen, waitFor, fireEvent } from "@testing-library/react";

import { useDataContext } from "../../../context/DataContext";
import { mockUserResults } from "../../../services/__mocks__/userResults";

import AccountPage from "../AccountPage";

jest.mock("../../../context/DataContext");

afterEach(() => {
    cleanup();
    jest.resetAllMocks();
});

describe("Account Page", () => {
    test("The account page renders the user's data correctly.", async () => {

        const setUser = jest.fn();
        const setArn = jest.fn();
        const setSelectedQueueId = jest.fn();

        (useDataContext as jest.Mock).mockReturnValue({
            user: mockUserResults,
            setUser,
            setArn,
            setSelectedQueueId
        });

        render(
            <Router>
                <AccountPage />;
            </Router>
        );

        await waitFor(() => {
            expect(useDataContext).toHaveBeenCalled();
        });
        
        expect(screen.queryByTestId("profPic")).toBeInTheDocument();
        expect(screen.queryByTestId("name")).toHaveTextContent(`${mockUserResults.firstName} ${mockUserResults.lastName}`);
        expect(screen.queryByTestId("username")).toHaveTextContent(mockUserResults.username);
        expect(screen.queryByTestId("email")).toHaveValue(mockUserResults.email);
        expect(screen.queryByTestId("sec-email")).toHaveValue(mockUserResults.secondaryEmail);
        expect(screen.queryByTestId("mobile")).toHaveValue(mockUserResults.mobile);

        fireEvent.click(screen.getByTestId("logout-btn"));
    });
});
