import httpInstance from "../httpInstance";
import { IAgent } from "./types";

export const getAgents = async (instanceId: string, queueId: string) => {
    const usersEndpoint = `api/amazon-connect/instances/${instanceId}/queue-users`;
    const usersRes = await httpInstance.get(usersEndpoint);

    let queueUsers: { userId: string, queueName: string }[] = [];

    const fetchQueueName = async (queueId: string) => {
        const queueEndpoint = `api/amazon-connect/instances/${instanceId}/queues/${queueId}/description`;
        const queueRes = await httpInstance.get(queueEndpoint);
        return queueRes.data.name;
    };

    if (queueId === 'all') {
        for (const key in usersRes.data) {
            if (usersRes.data.hasOwnProperty(key)) {
                const queueName = await fetchQueueName(key);
                queueUsers = queueUsers.concat(usersRes.data[key].users.map((userId: string) => ({ userId, queueName })));
            }
        }
    } else {
        const queueName = await fetchQueueName(queueId);
        queueUsers = usersRes.data[queueId]?.users.map((userId: string) => ({ userId, queueName })) || [];
    }

    const agentDetails = await Promise.all(queueUsers.map(async ({ userId, queueName }) => {
        const userEndpoint = `api/amazon-connect/instances/${instanceId}/users/${userId}/description`;
        const userRes = await httpInstance.get(userEndpoint);
        return transformAgentData(userRes.data, queueName);
    }));

    return { success: true, data: agentDetails };
}


const transformAgentData = (data: any, queueName: string): IAgent => {
    return {
        id: data.id,
        firstName: data.identityInfo.firstName,
        lastName: data.identityInfo.lastName,
        email: data.identityInfo.email,
        username: data.username,
        queueName,
    };
}