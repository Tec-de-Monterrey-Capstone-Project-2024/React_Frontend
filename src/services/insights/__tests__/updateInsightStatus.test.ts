import { updateInsightStatus } from '../updateInsightStatus';
import httpInstance from '../../httpInstance';

jest.mock('../../httpInstance');

const mockHttpInstance = httpInstance as jest.Mocked<typeof httpInstance>;

describe('updateInsightStatus', () => {
    it('updates insight status successfully', async () => {
        const mockResponse = { data: 'success' };
        mockHttpInstance.patch.mockResolvedValueOnce(mockResponse);

        const result = await updateInsightStatus(1, 'DONE');

        expect(result).toEqual(mockResponse);
        expect(mockHttpInstance.patch).toHaveBeenCalledWith('api/threshold-breach-insights/1/status', null, {
            params: { newStatus: 'DONE' },
        });
    });

    it('handles error while updating insight status', async () => {
        const errorMessage = 'Network Error';
        mockHttpInstance.patch.mockRejectedValueOnce({ response: { data: errorMessage } });

        const result = await updateInsightStatus(1, 'DONE');

        expect(result).toEqual({ data: errorMessage });
        expect(mockHttpInstance.patch).toHaveBeenCalledWith('api/threshold-breach-insights/1/status', null, {
            params: { newStatus: 'DONE' },
        });
    });
});
