import httpInstance from "../httpInstance";

export const getAgents = async () => {
    let res: any;
    const endpoint = `api/queues/2/agents`;

    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => {
        res = err.response
    });
    return res;
}