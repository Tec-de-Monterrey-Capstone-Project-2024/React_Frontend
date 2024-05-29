export interface IAgent {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    // password: string,
    username: string,
    // role: 'SUPERVISOR' | 'AGENT',
    queueName: string,
}

export interface registerAgent {
    connectId: string,
    instanceID: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    secondaryEmail: string,
    mobile: number
}