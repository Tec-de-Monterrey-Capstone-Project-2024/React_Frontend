export interface IMetric {
    id: number,
    metric_info_code: string,
    value: number,
    agent_id?: number | null,
    queue_id?: number
}
