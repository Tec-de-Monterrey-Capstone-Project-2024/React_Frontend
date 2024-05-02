import httpInstance from "../httpInstance";

export const getMetrics = async () => {
    let res: any;

    const endpoint = `api/metrics/agents/1`

    await httpInstance
        .get(endpoint)
        .then((response) => {
            res = response;
        })
        .catch((err) => {
            res = err.response
        });
    return res;
}