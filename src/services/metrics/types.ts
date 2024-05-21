export interface IMetric {
    /**
     * Identifier of the metric
     */
    id: number,
    /**
     * Category of the metric (SL, AHT, OCC, FCR, etc)
     */
    metric_info_code: string,
    /**
     * Value of the metric
     */
    value: number,
    /**
     * Agent who has this metric 
     */
    agent_id?: number | null,
    /**
     * Queue of this metric
     */
    queue_id?: number
}
