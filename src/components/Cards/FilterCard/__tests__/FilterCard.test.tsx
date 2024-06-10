import React from 'react';
import { render, screen } from '@testing-library/react';
import FilterCard from '../FilterCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Tests for FilterCard Component", () => {
    test("The FilterCard component will render correctly.", () => {
        render(
            <Router>
                <FilterCard />
            </Router>
        );

        // Check for the Priority section
        expect(screen.getByText("Priority")).toBeTruthy();
        expect(screen.getByText("Urgent")).toBeTruthy();
        expect(screen.getByText("Moderate")).toBeTruthy();
        expect(screen.getByText("Low")).toBeTruthy();

        // Check for the KPIs section
        expect(screen.getByText("KPIs")).toBeTruthy();
        expect(screen.getByText("Service Level")).toBeTruthy();
        expect(screen.getByText("Abandoned calls percentage")).toBeTruthy();
        expect(screen.getByText("First Call Resolutions")).toBeTruthy();
        expect(screen.getByText("Occupancy")).toBeTruthy();
        expect(screen.getByText("Schedule Adherence")).toBeTruthy();
        expect(screen.getByText("Average Speed of Answer")).toBeTruthy();
    });

    test("Custom filter card render correctly", () => {
        const customPriorityOptions = [
            { name: 'High', color: 'bg-blue-200' },
            { name: 'Medium', color: 'bg-orange-200' },
        ];

        const customKpiOptions = [
            'Customer sentiment',
            'Total calls hanged',
        ];

        render(
            <Router>
                <FilterCard priorityOptions={customPriorityOptions} kpiOptions={customKpiOptions} />
            </Router>
        );

        // Check for the Priority section
        expect(screen.getByText("Priority")).toBeTruthy();
        expect(screen.getByText("High")).toBeTruthy();
        expect(screen.getByText("Medium")).toBeTruthy();
        expect(screen.queryByText("Urgent")).toBeNull();
        expect(screen.queryByText("Moderate")).toBeNull();
        expect(screen.queryByText("Low")).toBeNull();

        expect(screen.getByText("KPIs")).toBeTruthy();
        expect(screen.getByText("Customer sentiment")).toBeTruthy();
        expect(screen.getByText("Total calls hanged")).toBeTruthy();
        expect(screen.queryByText("Service Level")).toBeNull();
        expect(screen.queryByText("Abandoned calls percentage")).toBeNull();
        expect(screen.queryByText("First Call Resolutions")).toBeNull();
        expect(screen.queryByText("Occupancy")).toBeNull();
        expect(screen.queryByText("Schedule Adherence")).toBeNull();
        expect(screen.queryByText("Average Speed of Answer")).toBeNull();
    });
});
