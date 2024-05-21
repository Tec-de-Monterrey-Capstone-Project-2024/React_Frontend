// import httpInstance from "../httpInstance";

// export const getAgents = async (queue: number) => {
//     let res: any;
//     const endpoint = `api/queues/${queue}/agents`;

//     await httpInstance.get(endpoint).then((response) => {
//         res = response;
//     }).catch((err) => {
//         res = err.response
//     });
//     return res;
// }

import { IAgent } from "./types";

const dummyAgents: IAgent[] = [
    {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password123",
        username: "johndoe",
        role: "AGENT"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        password: "password123",
        username: "janesmith",
        role: "SUPERVISOR"
    },
    {
        id: 3,
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        password: "password123",
        username: "alicejohnson",
        role: "AGENT"
    }
];

export const getAgents = async (queue: number) => {
    const res = {
        data: dummyAgents
    };
    return res;
};