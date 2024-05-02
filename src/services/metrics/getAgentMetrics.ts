import httpInstance from "../httpInstance";

export const getAgentMetrics = async (id: number) => {
    let res: any;
    const endpoint = `api/metrics/agents/${id}`;

    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => {
        res = err.response
    });
    return res;
}