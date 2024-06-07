import { getInsightByID } from '../getInsightByID';
import httpInstance from '../../httpInstance';

jest.mock('../../httpInstance');

const mockHttpInstance = httpInstance as jest.Mocked<typeof httpInstance>;

describe('getInsightByID', () => {
    it('fetches insight by ID', async () => {
        const insight = { id: 1, name: 'Insight 1' };
        mockHttpInstance.get.mockResolvedValueOnce({ data: insight });

        const result = await getInsightByID(1);
        expect(result).toEqual(insight);
        expect(mockHttpInstance.get).toHaveBeenCalledWith('/api/threshold-breach-insights/1');
    });

    it('throws an error when fetch fails', async () => {
        const errorMessage = 'Network Error';
        mockHttpInstance.get.mockRejectedValueOnce(new Error(errorMessage));

        await expect(getInsightByID(1)).rejects.toThrow(errorMessage);
        expect(mockHttpInstance.get).toHaveBeenCalledWith('/api/threshold-breach-insights/1');
    });
});
