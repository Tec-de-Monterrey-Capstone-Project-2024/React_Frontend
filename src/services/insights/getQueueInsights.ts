import httpInstance from "../httpInstance";

export const getQueueInsights = async (queueId: string) => {
    let res: any;
    let endpoint: string;
    if (queueId === 'all') {
        endpoint = `api/threshold-breach-insights?itemType=INSTANCE`;
    } else {
        endpoint = `api/threshold-breach-insights?connectItemId=${queueId}`;
    }

    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => {
        res = err.response
    });

    return res;
}

// import { IInsight } from "./types";

// export const getQueueInsights = async (instanceId: string, queueId: string): Promise<{ data: IInsight[] }> => {
//     const dummyInsights: IInsight[] = [
//         {
//             id: 1,
//             metricCode: "METRIC_001",
//             connectItemId: "ITEM_001",
//             connectItemType: "INSTANCE",
//             value: 95.5,
//             occurredAt: new Date().toISOString(),
//             status: "TO_DO",
//             insightName: "Improve Service Level",
//             insightSummary: "Service level needs improvement",
//             insightDescription: "Detailed description of how to improve service level.",
//             insightActions: "Actions to be taken to improve service level.",
//             insightCategory: "BELOW_EXPECTATIONS",
//             insightSeverity: "MEDIUM",
//             insightRootCause: "High call volume",
//             insightImpact: "Customer dissatisfaction",
//             insightPrevention: "Increase staff during peak hours"
//         },
//         {
//             id: 2,
//             metricCode: "METRIC_002",
//             connectItemId: "ITEM_002",
//             connectItemType: "QUEUE",
//             value: 80.0,
//             occurredAt: new Date().toISOString(),
//             status: "IN_PROGRESS",
//             insightName: "Improve Occupancy",
//             insightSummary: "Occupancy rate needs improvement",
//             insightDescription: "Detailed description of how to improve occupancy rate.",
//             insightActions: "Actions to be taken to improve occupancy rate.",
//             insightCategory: "UNSATISFACTORY",
//             insightSeverity: "HIGH",
//             insightRootCause: "Inefficient scheduling",
//             insightImpact: "Low productivity",
//             insightPrevention: "Optimize schedules"
//         },
//         {
//             id: 3,
//             metricCode: "METRIC_003",
//             connectItemId: "ITEM_003",
//             connectItemType: "AGENT",
//             value: 70.0,
//             occurredAt: new Date().toISOString(),
//             status: "DONE",
//             insightName: "Reassignment",
//             insightSummary: "Reassign tasks for better efficiency",
//             insightDescription: "Detailed description of task reassignment.",
//             insightActions: "Actions to be taken for reassignment.",
//             insightCategory: "EXCEEDS_EXPECTATIONS",
//             insightSeverity: "LOW",
//             insightRootCause: "Task mismatch",
//             insightImpact: "Improved task completion",
//             insightPrevention: "Regular task reviews"
//         }
//     ];

//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ data: dummyInsights });
//         }, 1000);
//     });
// }
