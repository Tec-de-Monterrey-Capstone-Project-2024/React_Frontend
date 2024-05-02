export interface IAgent {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    username: string,
    role: 'SUPERVISOR' | 'AGENT'
}
