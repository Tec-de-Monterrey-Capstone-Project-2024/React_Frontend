import httpInstance from "../httpInstance";

export const getQueueMetrics = async (arn: string, queueId: string) => {
    let res: any;
    const endpoint = `/api/amazon-connect/instances/queue-metrics?instanceArn=${arn}&agentId=${queueId}`;

    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => {
        res = err.response
    });
    return res;
}
