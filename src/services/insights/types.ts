import { UnscopedEmitHelper } from "typescript";

// export interface IInsights {
//     id: number,
//     title:string,
//     description1:string,
//     color:string,
//     borderColor: string,
//     showBoxBorder: boolean,
// }

export interface IInsight {
    id: number;
    metricCode: string;
    connectItemId: string;
    connectItemType: "INSTANCE" | "QUEUE" | "AGENT";
    value: number;
    occurredAt: string; // ISO date string for LocalDateTime
    status: "DONE" | "TO_DO" | "IN_PROGRESS";
    insightName: string;
    insightSummary: string;
    insightDescription: string;
    insightActions: string;
    insightCategory: "CRITICAL" | "UNSATISFACTORY" | "BELOW_EXPECTATIONS" | "EXCEEDS_EXPECTATIONS" | "OUTSTANDING" | "PIONEERING" | "UNKNOWN";
    insightSeverity: "LOW" | "MEDIUM" | "HIGH" | "CRITICAL" | "UNKNOWN";
    insightRootCause: string;
    insightImpact: string;
    insightPrevention: string;
}
