import { getAlerts } from './getAlerts';
import httpInstance from '../httpInstance';
import { IAlert } from './types';

jest.mock('../httpInstance');

const mockedHttpInstance = httpInstance as jest.Mocked<typeof httpInstance>;

describe('getAlerts service', () => {
  it('should fetch alerts successfully', async () => {
    const mockAlerts: IAlert[] = [
      {
        id: 1,
        metricCode: 'service_level',
        insightCategory: 'below_expectations',
        connectItemType: 'instance',
        ocurredAt: '2023-06-01T12:00:00Z',
      },
      {
        id: 2,
        metricCode: 'occupancy',
        insightCategory: 'exceeds_expectations',
        connectItemType: 'queue',
        ocurredAt: '2023-06-02T12:00:00Z',
      },
      {
        id: 3,
        metricCode: 'abandonment_rate',
        insightCategory: 'outstanding',
        connectItemType: 'agent',
        ocurredAt: '2023-06-03T12:00:00Z',
      },
    ];

    mockedHttpInstance.get.mockResolvedValue({ data: mockAlerts });

    const result = await getAlerts();

    expect(result).toEqual(mockAlerts);
    expect(mockedHttpInstance.get).toHaveBeenCalledWith('/api/threshold-breach-insights/alerts');
  });

  it('should throw an error if fetching alerts fails', async () => {
    const mockError = new Error('Network error');
    mockedHttpInstance.get.mockRejectedValue(mockError);

    await expect(getAlerts()).rejects.toThrow('Network error');
    expect(mockedHttpInstance.get).toHaveBeenCalledWith('/api/threshold-breach-insights/alerts');
  });
});
