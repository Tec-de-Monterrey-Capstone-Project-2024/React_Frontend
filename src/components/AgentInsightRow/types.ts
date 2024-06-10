export interface IAgentInsightRow {
    id: string;
    firstName: string;
    lastName: string | null;
    queueName: string | null;
    color: string;
    button: boolean;
}