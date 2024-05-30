import React, { useEffect, useState } from 'react';
import { getAlerts } from '../../../services/alerts/getAlerts';
import { PerformanceTag, PerformanceCategory } from '../../Tags/PerformanceCategoryTag';
import { ScopeTag } from '../../Tags/AlertScopeTag';
import Button from '../../Button/Button';
import { useNavigate } from 'react-router-dom';

const AlertsTable: React.FC = () => {
  const [alerts, setAlerts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate(); // Inicializa useNavigate fuera del useEffect

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const data = await getAlerts();
        setAlerts(data);
      } catch (error) {
        setError('Failed to fetch alerts.');
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="overflow-auto rounded-lg shadow">
        <table className="w-full table-fixed">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-center">ID</th>
              <th className="p-3 text-center">Affected KPI</th>
              <th className="p-3 text-center">Performance Category</th>
              <th className="p-3 text-center">Scope</th>
              <th className="p-3 text-center">Event Date</th>
              <th className="p-3 text-center">Insights</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {alerts.map((alert, index) => (
              <tr className="border-b" key={index}>
                <td className="p-3 text-center">{alert.id}</td>
                <td className="p-3 text-center">{alert.metricCode}</td>
                <td className="p-3 text-center">
                  <PerformanceTag severity={alert.insightCategory.toLowerCase() as PerformanceCategory} />
                </td>
                <td className="p-3 text-center">
                  {alert.connectItemType && <ScopeTag type={alert.connectItemType.toLowerCase()} />}
                </td>
                <td className="p-3 text-center">{new Date(alert.occurredAt).toLocaleString()}</td>
                  <td className="p-3 text-center">
                      <div className="w-full ">
                          <Button onClick={() => navigate(`/insights/${alert.id}`)} variant='dark' type={'button'}>Show more</Button>
                      </div>
                  </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default AlertsTable;

