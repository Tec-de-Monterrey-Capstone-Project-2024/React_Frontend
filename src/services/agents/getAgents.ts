import httpInstance from "../httpInstance";

export const getAgents = async (queue: number) => {
    let res: any;
    const endpoint = `api/queues/${queue}/agents`;

    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => {
        res = err.response
    });
    return res;
}