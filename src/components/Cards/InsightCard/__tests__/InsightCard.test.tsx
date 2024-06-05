// __tests__/InsightCard.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InsightCard from '../InsightCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Tests for InsightCard Component", () => {
    const props = {
        title: "Test Title",
        description1: "Test Description 1",
        description2: "Test Description 2",
        color: "white",
        borderColor: "green",
        showBoxBorder: true,
        func: jest.fn(),
        btn: true
    };

    test("The InsightCard component renders correctly with given props", () => {
        render(
            <Router>
                <InsightCard {...props} />
            </Router>
        );

        expect(screen.getByText("Test Title")).toBeTruthy();
        expect(screen.getByText("Test Description 1")).toBeTruthy();
        expect(screen.getByText("Test Description 2")).toBeTruthy();

        expect(screen.getByText("View more")).toBeTruthy();

        const cardElement = screen.getByText("Test Title").closest('.box-container');
        expect(cardElement).toHaveClass('white-box');
        expect(cardElement).toHaveClass('box-border');
        expect(cardElement).toHaveClass('green-border');
    });

    test("The InsightCard component does not render button when btn prop is false", () => {
        render(
            <Router>
                <InsightCard {...props} btn={false} />
            </Router>
        );

        expect(screen.queryByText("View more")).toBeNull();
    });

    test("The InsightCard component triggers the function when button is clicked", () => {
        render(
            <Router>
                <InsightCard {...props} />
            </Router>
        );

        fireEvent.click(screen.getByText("View more"));

        expect(props.func).toHaveBeenCalledTimes(1);
    });
});
