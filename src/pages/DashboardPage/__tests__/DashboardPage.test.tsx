import { render, screen, cleanup } from '@testing-library/react';
import DashboardPage from '../DashboardPage';
import { BrowserRouter as Router } from 'react-router-dom';
import { getQueueCounts } from '../../../services/queues/getQueueCounts';
import { describeQueue } from '../../../services/queues/describeQueue';
import { DataProvider } from "../../../context/DataContext";

jest.mock('../../../services/queues/getQueueCounts');
afterEach(() => {
    cleanup();
});

describe("Tests for Dashboard Page", () => {
    test("The DashboardPage works correctly", async () => {

        const instanceId = "7c78bd60-4a9f-40e5-b461-b7a0dfaad848";
        const queueId = "f0813607-af92-4a36-91e6-630ababb643c";

        const queueCountsResult = await getQueueCounts(instanceId, queueId);
        expect(getQueueCounts).toHaveBeenCalledWith(instanceId, queueId);

        const queueDescriptionResult = await describeQueue(instanceId, queueId);
        expect(queueDescriptionResult.data[0].id).toEqual(queueId);
        
        render(
            <Router>
                <DataProvider>
                    <DashboardPage />
                </DataProvider>
            </Router>
        );

        expect(screen.queryByTestId("dashboard-page-queue-card")).not.toBeInTheDocument();

        jest.restoreAllMocks();
    });
});