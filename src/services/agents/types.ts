export interface IAgent {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    username: string,
    role: 'SUPERVISOR' | 'AGENT'
}

export interface loginAgent {
    connectId: string,
    instanceID: string,
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    secondaryEmail: string,
    mobile: number
}