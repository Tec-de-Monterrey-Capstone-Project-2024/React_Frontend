export interface IAgent {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    username: string,
    role: 'SUPERVISOR' | 'AGENT'
}