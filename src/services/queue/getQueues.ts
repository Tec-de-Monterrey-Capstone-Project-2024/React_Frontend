import httpInstance from "../httpInstance";
import { IQueue } from "./types";

export const getQueues = async (instanceId: string) => {
    let res: any;
    const endpoint = `api/amazon-connect/instances/${instanceId}/queues`;

    await httpInstance.get(endpoint).then((response) => {
        res = response;
        res = response.data.filter((queue: IQueue) => queue.queueType === "STANDARD");
    }).catch((err) => {
        res = err.response
    });
    return res;
}
