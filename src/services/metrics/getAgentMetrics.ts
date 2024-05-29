import httpInstance from "../httpInstance";
import { IMetric } from "./types";

export const getAgentMetrics = async (id: string) => {
    const mockMetricsData: IMetric[] = [
        { id: 1, metric_info_code: "SL", value: 85, agent_id: parseInt(id), queue_id: 1 },
        { id: 2, metric_info_code: "ACR", value: 15, agent_id: parseInt(id), queue_id: 1 },
        { id: 3, metric_info_code: "FCR", value: 78, agent_id: parseInt(id), queue_id: 1 },
        { id: 4, metric_info_code: "OCC", value: 25, agent_id: parseInt(id), queue_id: 1 },
        { id: 5, metric_info_code: "SA", value: 80, agent_id: parseInt(id), queue_id: 1 },
        { id: 6, metric_info_code: "ASA", value: 50, agent_id: parseInt(id), queue_id: 1 },
        { id: 7, metric_info_code: "AHT", value: 12, agent_id: parseInt(id), queue_id: 1 },
        { id: 8, metric_info_code: "VFR", value: 1.5, agent_id: parseInt(id), queue_id: 1 }
    ];
    await new Promise(resolve => setTimeout(resolve, 1000));

    const responseData = mockMetricsData.filter(metric => metric.agent_id === parseInt(id));
    
    const status = 200;

    return { data: responseData, status };
  
    // let res: any;
    // const endpoint = `api/metrics/agents/${id}`;

    // await httpInstance.get(endpoint).then((response) => {
    //     res = response;
    // }).catch((err) => {
    //     res = err.response
    // });
    // return res;
}
