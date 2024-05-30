export interface IQueue {
    id: string,
    name: string,
    queueType: "STANDARD" | "AGENT",
}

export interface IQueueCounts {
    agents: number,
    contacts: number,
    color: string
}