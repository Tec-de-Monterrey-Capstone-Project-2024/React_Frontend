import httpInstance from "../httpInstance";

export const getInstance = async (instanceId: string) => {
    let res: any;
    const endpoint = `api/amazon-connect/instances/${instanceId}`;
    await httpInstance.get(endpoint).then((response) => {
        res = response;
    }).catch((err) => {
        res = err.response
    });
    return res;
}
