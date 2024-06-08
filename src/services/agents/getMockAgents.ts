import { IAgent } from "./types";

const mockAgentData: IAgent[] = [
    {
        id: 1,
        firstName: "Federico",
        lastName: "Zenteno",
        email: "fede@gmial.com",
        username: "fedechocomils",
        queueName: "BasicQueue"
    },
    {
        id: 2,
        firstName: "Fer",
        lastName: "Tejeda",
        email: "fertejeda@gmail.com",
        username: "nando",
        queueName: "BasicQueue"
    },
    {
        id: 3,
        firstName: "Julia",
        lastName: "Pasten",
        email: "juls@gmail.com",
        username: "juls",
        queueName: "S0S"
    },
    {
        id: 4,
        firstName: "Diego",
        lastName: "Zepeda",
        email: "ilest@gmail.com",
        username: "ilest",
        queueName: "BasicQueue"
    },
    {
        id: 5,
        firstName: "Diego",
        lastName: "Zepeda",
        email: "ilest@gmail.com",
        username: "ilest",
        queueName: "BasicQueue"
    },
    {
        id: 6,
        firstName: "Ricardo",
        lastName: "Campos",
        email: "richy@gmail.com",
        username: "ricampos",
        queueName: "BasicQueue"
    },
];

export const getMockAgents = async (instanceId: string, queueId: string) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    let agents: IAgent[] = [];

    if (queueId === 'all') {
        // Return all mock agents
        agents = mockAgentData;
    } else {
        // Filter mock agents by queueId
        agents = mockAgentData.filter(agent => agent.queueName === queueId);
    }

    return { success: true, data: agents };
}
