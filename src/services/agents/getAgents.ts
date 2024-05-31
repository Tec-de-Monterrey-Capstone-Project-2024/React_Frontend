import httpInstance from "../httpInstance";
import { IAgent } from "./types";

export const getAgents = async (instanceId: string, queueId: string) => {
    const usersEndpoint = `api/amazon-connect/instances/${instanceId}/queue-users`;
    const usersRes = await httpInstance.get(usersEndpoint);
    // console.log("usersRes.data: ", usersRes.data);

    let queueUsers: { userId: string, queueName: string }[] = [];

    const fetchQueueName = async (userQueueId: string) => {
        const queueEndpoint = `api/amazon-connect/instances/${instanceId}/queues/${userQueueId}/description`;
        const queueRes = await httpInstance.get(queueEndpoint);
        return queueRes.data.name;
    };

    if (queueId === 'all') {
        const queueFetchPromises = Object.keys(usersRes.data).map(async (key) => {
            const queueData = usersRes.data[key];
            if (queueData.users.length === 0) {
                return [];
            }
            const queueName = await fetchQueueName(key);
            return queueData.users.map((userId: string) => ({ userId, queueName }));
        });

        const results = await Promise.all(queueFetchPromises);
        queueUsers = results.flat();
    } else {
        const queueData = usersRes.data[queueId];
        if (queueData?.users.length > 0) {
            const queueName = await fetchQueueName(queueId);
            queueUsers = queueData.users.map((userId: string) => ({ userId, queueName }));
        }
    }

    const agentDetails = await Promise.all(queueUsers.map(async ({ userId, queueName }) => {
        try {
            const userEndpoint = `api/amazon-connect/instances/${instanceId}/users/${userId}/description`;
            const userRes = await httpInstance.get(userEndpoint);
            return transformAgentData(userRes.data, queueName);
        } catch (error) {
            // console.error(`Error fetching data for user ${userId}:`, error);
            return null;
        }
        // const userEndpoint = `api/amazon-connect/instances/${instanceId}/users/${userId}/description`;
        // const userRes = await httpInstance.get(userEndpoint);
        // return transformAgentData(userRes.data, queueName);
    }));

    const successfulAgents = agentDetails.filter((agent): agent is IAgent => agent !== null);

    return { success: true, data: successfulAgents };
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
