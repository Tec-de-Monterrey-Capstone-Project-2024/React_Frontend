import { getAgentInsights } from '../getAgentInsights';
import httpInstance from '../../httpInstance';

jest.mock('../../httpInstance');

const mockHttpInstance = httpInstance as jest.Mocked<typeof httpInstance>;

describe('getAgentInsights', () => {
    it('fetches agent insights', async () => {
        const insights = [{ id: 1, name: 'Insight 1' }];
        mockHttpInstance.get.mockResolvedValueOnce({ data: insights });

        const result = await getAgentInsights('agent-id');
        expect(result.data).toEqual(insights);
        expect(mockHttpInstance.get).toHaveBeenCalledWith('/api/threshold-breach-insights?connectItemId=agent-id');
    });

    it('handles errors correctly', async () => {
        const errorMessage = 'Network Error';
        mockHttpInstance.get.mockRejectedValueOnce({ response: { data: errorMessage } });

        const result = await getAgentInsights('agent-id');
        expect(result.data).toEqual(errorMessage);
    });
});
