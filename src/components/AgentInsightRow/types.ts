export interface IAgentInsightRow {
    id: number;
    firstName: string;
    lastName: string | null;
    queueName: string | null;
    color: string;
    button: boolean;
}