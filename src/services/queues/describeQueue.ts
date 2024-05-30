import httpInstance from "../httpInstance";
import { IQueue } from "./types";

export const describeQueue = async (instanceId: string, queueId: string): Promise<{ data: IQueue[] }> => {
    const usersEndpoint = `api/amazon-connect/instances/${instanceId}/queues/${queueId}/description`;
    const queuesRes = await httpInstance.get(usersEndpoint);
    console.log("describeQueue: ", queuesRes.data);

    const queueData = queuesRes.data;

    const queueInfo: IQueue[] = [
        {
            id: queueData?.queueId,
            name: queueData?.name,
            queueType: "STANDARD",
        }
    ];

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: queueInfo });
        }, 1000);
    });
}
