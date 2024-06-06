import { IInsight } from "../../services/insights/types";

export const mockInsightsResults: IInsight[] = [
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
    }
];
