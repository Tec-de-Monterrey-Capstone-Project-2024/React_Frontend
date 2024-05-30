import React from 'react';
import alertData from './alert-example.json'; // Ensure the path to your JSON file is correct
import { PerformanceTag, PerformanceCategory } from '../../Tags/PerformanceCategoryTag';
import { ScopeTag, AlertScope } from '../../Tags/AlertScopeTag';
import Button from '../../Button/Button';

function AlertsTable() {
  return (
    <div className="p-6 bg-gray-50">
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
            {alertData.map((alert, index) => (
              <tr className="border-b" key={index}>
                <td className="p-3 text-center">{index + 1}</td>
                <td className="p-3 text-center">
                  {`${alert.metric.name} (${alert.metric.code})`}
                </td>
                <td className="p-3 text-center">
                  {/* Using PerformanceTag to display breach category */}
                  <PerformanceTag severity={alert.breach_category as PerformanceCategory} />
                </td>
                <td className="p-3 text-center">
                  {/* Using ScopeTag to display scope */}
                  {alert.metric.agent_id && <ScopeTag type="agent" />}
                  {alert.metric.queue_id && <ScopeTag type="queue" />}
                </td>
                <td className="p-3 text-center">{new Date(alert.occurred_at).toLocaleString()}</td>
                  <td className="p-3 text-center">
                      <div className="w-full">
                          <Button title={"View"} variant={"dark"} onClick={() => console.log('Insights for ID:', alert.id)}/>
                      </div>
                  </td>
              </tr>
            ))}
          </tbody>

        </table>
        </div>
    </div>
  );
}

export default AlertsTable;
