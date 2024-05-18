import { IMetric } from "../services/metrics/types";

const dummyGeneralMetrics: IMetric[] = [
    {
        "id": 1,
        "metric_info_code": "SL",
        "value": 100,
        "agent_id": null,
        "queue_id": 1
    },
    {
        "id": 2,
        "metric_info_code": "ACR",
        "value": 10,
        "agent_id": null,
        "queue_id": 1
    },
    {
        "id": 3,
        "metric_info_code": "FCR",
        "value": 99,
        "agent_id": null,
        "queue_id": 1
    },
    {
        "id": 4,
        "metric_info_code": "OCC",
        "value": 50,
        "agent_id": null,
        "queue_id": 1
    },
    {
        "id": 5,
        "metric_info_code": "SA",
        "value": 95,
        "agent_id": null,
        "queue_id": 1
    },
    {
        "id": 6,
        "metric_info_code": "ASA",
        "value": 70,
        "agent_id": null,
        "queue_id": 1
    },
    {
        "id": 7,
        "metric_info_code": "AHT",
        "value": 30,
        "agent_id": null,
        "queue_id": 1
    },
    {
        "id": 8,
        "metric_info_code": "VFR",
        "value": 23,
        "agent_id": null,
        "queue_id": 1
    }
]

export default dummyGeneralMetrics;
