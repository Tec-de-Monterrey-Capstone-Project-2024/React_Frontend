import { getQueueInsights } from '../getQueueInsights';
import httpInstance from '../../httpInstance';

jest.mock('../../httpInstance');

const mockHttpInstance = httpInstance as jest.Mocked<typeof httpInstance>;

describe('getQueueInsights', () => {
    it('fetches all queue insights', async () => {
        const insights = [{ id: 1, name: 'Insight 1' }];
        mockHttpInstance.get.mockResolvedValueOnce({ data: insights });

        const result = await getQueueInsights('all');
        expect(result.data).toEqual(insights);
        expect(mockHttpInstance.get).toHaveBeenCalledWith('api/threshold-breach-insights');
    });

    it('fetches specific queue insights', async () => {
        const insights = [{ id: 1, name: 'Insight 1' }];
        mockHttpInstance.get.mockResolvedValueOnce({ data: insights });

        const result = await getQueueInsights('queue-id');
        expect(result.data).toEqual(insights);
        expect(mockHttpInstance.get).toHaveBeenCalledWith('api/threshold-breach-insights?connectItemId=queue-id');
    });

    it('handles errors correctly', async () => {
        const errorMessage = 'Network Error';
        mockHttpInstance.get.mockRejectedValueOnce({ response: { data: errorMessage } });

        const result = await getQueueInsights('queue-id');
        expect(result.data).toEqual(errorMessage);
    });
});
