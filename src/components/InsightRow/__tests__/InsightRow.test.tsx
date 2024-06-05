import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import InsightRow from '../InsightRow';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
    cleanup();
});

describe("Tests for InsightRow Component", () => {
    test("The InsightRow component renders correctly", () => {
        render(
            <Router>
                <InsightRow
                id={0}
                title={"Low Service Level"}
                color={'white'}
                />
            </Router>
        );

        expect(screen.getByTestId("wrapper-insight-row")).toBeTruthy();
        expect(screen.getByTestId("insight-row-title")).toBeTruthy();
        expect(screen.getByTestId("insight-row-button")).toBeTruthy();

        expect(screen.getByTestId("insight-row-title")).toHaveTextContent('Low Service Level');
        expect(screen.getByTestId("insight-row-button")).toHaveTextContent('Show more');

        fireEvent.click(screen.getByTestId("insight-row-button"));
    });
});
