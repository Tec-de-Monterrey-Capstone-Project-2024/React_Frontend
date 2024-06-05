import { render, screen, cleanup } from '@testing-library/react';
import InsightCard from '../InsightCard';
import { BrowserRouter as Router } from 'react-router-dom';

afterEach(() => {
    cleanup();
});

describe("Tests for InsightCard Component", () => {
    test("The InsightCard component renders correctly", () => {
        render(
            <Router>
                <InsightCard
                    title="Low Service Level"
                    description1="Service level is below 80%"
                    description2="Move to the top of the queue to improve service level"
                    color="white"
                    borderColor="red"
                    showBoxBorder={true}
                    btn={true} 
                    func={function (): void {
                        throw new Error('Function not implemented.');
                    } }                
                />
            </Router>
        );

        expect(screen.getByTestId("wrapper-insight-card")).toBeTruthy();
        expect(screen.getByTestId("insight-card-title")).toBeTruthy();
        expect(screen.getByTestId("insight-card-description1")).toBeTruthy();
        expect(screen.getByTestId("insight-card-description2")).toBeTruthy();
        expect(screen.getByTestId("insight-card-button")).toBeTruthy(); 

        expect(screen.getByTestId("insight-card-title")).toHaveTextContent('Low Service Level');
        expect(screen.getByTestId("insight-card-description1")).toHaveTextContent('Service level is below 80%');
        expect(screen.getByTestId("insight-card-description2")).toHaveTextContent('Move to the top of the queue to improve service level');
        expect(screen.getByTestId("insight-card-button")).toHaveTextContent('View more');
    });
});
