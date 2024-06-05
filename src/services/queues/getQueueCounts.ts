import httpInstance from "../httpInstance";
import { IQueueCounts } from "./types";

export const getQueueCounts = async (instanceId: string, queueId: string): Promise<{ data: IQueueCounts[] }> => {
    const usersEndpoint = `api/amazon-connect/instances/${instanceId}/queue-users`;
    const usersRes = await httpInstance.get(usersEndpoint);
    // console.log("getQueueCounts usersRes.data: ", usersRes.data);

    const queueData = usersRes.data[queueId];

    let colorSelection = "green";

    if (queueData === null || queueData === undefined || queueData?.users.length === 0) {
        colorSelection = "green";
    } else if (queueData?.contactCount / queueData?.users.length <= 1) {
        colorSelection = "green";
    } else if (queueData?.contactCount / queueData?.users.length > 1 && queueData?.contactCount / queueData?.users.length < 1.5) {
        colorSelection = "yellow";
    } else {
        colorSelection = "red";
    }

    const counts: IQueueCounts[] = [
        {
            agents: queueData?.users.length,
            contacts: queueData?.contactCount,
            color: colorSelection
        }
    ];

    return new Promise((resolve) => {
         setTimeout(() => {
             resolve({ data: counts });
         }, 1000);
     });
}
