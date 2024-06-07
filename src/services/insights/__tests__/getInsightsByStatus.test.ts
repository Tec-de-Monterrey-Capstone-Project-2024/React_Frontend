import { getInsightsByStatus } from '../getInsightStatus';
import httpInstance from '../../httpInstance';

jest.mock('../../httpInstance');

const mockHttpInstance = httpInstance as jest.Mocked<typeof httpInstance>;

describe('getInsightsByStatus', () => {
    it('fetches insights by status', async () => {
        const insights = [{ id: 1, name: 'Insight 1' }];
        mockHttpInstance.get.mockResolvedValueOnce({ data: insights });

        const result = await getInsightsByStatus('some-status');
        expect(result).toEqual(insights);
        expect(mockHttpInstance.get).toHaveBeenCalledWith('/api/threshold-breach-insights/by-status');
    });

    it('throws an error when fetch fails', async () => {
        const errorMessage = 'Network Error';
        mockHttpInstance.get.mockRejectedValueOnce(new Error(errorMessage));

        await expect(getInsightsByStatus('some-status')).rejects.toThrow(errorMessage);
        expect(mockHttpInstance.get).toHaveBeenCalledWith('/api/threshold-breach-insights/by-status');
    });
});
