import httpInstance from "../httpInstance";
import { IInsight } from "./types";

export const getAgentInsights = async (id: string) => {
    const dummyInsights: IInsight[] = [
        {
            id: 1,
            metricCode: "METRIC_001",
            connectItemId: "ITEM_001",
            connectItemType: "INSTANCE",
            value: 95.5,
            occurredAt: new Date().toISOString(),
            status: "TO_DO",
            insightName: "Improve Service Level",
            insightSummary: "Service level needs improvement",
            insightDescription: "Detailed description of how to improve service level.",
            insightActions: "Actions to be taken to improve service level.",
            insightCategory: "BELOW_EXPECTATIONS",
            insightSeverity: "MEDIUM",
            insightRootCause: "High call volume",
            insightImpact: "Customer dissatisfaction",
            insightPrevention: "Increase staff during peak hours"
        },
        {
            id: 2,
            metricCode: "METRIC_002",
            connectItemId: "ITEM_002",
            connectItemType: "QUEUE",
            value: 80.0,
            occurredAt: new Date().toISOString(),
            status: "IN_PROGRESS",
            insightName: "Improve Occupancy",
            insightSummary: "Occupancy rate needs improvement",
            insightDescription: "Detailed description of how to improve occupancy rate.",
            insightActions: "Actions to be taken to improve occupancy rate.",
            insightCategory: "UNSATISFACTORY",
            insightSeverity: "HIGH",
            insightRootCause: "Inefficient scheduling",
            insightImpact: "Low productivity",
            insightPrevention: "Optimize schedules"
        },
        {
            id: 3,
            metricCode: "METRIC_003",
            connectItemId: "ITEM_003",
            connectItemType: "AGENT",
            value: 70.0,
            occurredAt: new Date().toISOString(),
            status: "DONE",
            insightName: "Reassignment",
            insightSummary: "Reassign tasks for better efficiency",
            insightDescription: "Detailed description of task reassignment.",
            insightActions: "Actions to be taken for reassignment.",
            insightCategory: "EXCEEDS_EXPECTATIONS",
            insightSeverity: "LOW",
            insightRootCause: "Task mismatch",
            insightImpact: "Improved task completion",
            insightPrevention: "Regular task reviews"
        }
    ];
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simulate an HTTP status code (200 for success)
    const status = 200;

    // Return mock data with axios-like structure
    return { data: dummyInsights, status };

    // let res: any;
    // const endpoint = `api/metrics/agents/${id}`;

    // await httpInstance.get(endpoint).then((response) => {
    //     res = response;
    // }).catch((err) => {
    //     res = err.response
    // });
    // return res;
}