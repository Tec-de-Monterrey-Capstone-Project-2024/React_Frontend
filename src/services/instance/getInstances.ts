import httpInstance from "../httpInstance";

export const getInstances = async () => {
    let res: any;
    const endpoint = `api/amazon-connect/instances`;

    await httpInstance.get(endpoint).then((response) => {
        res = response;
        console.log(res);
    }).catch((err) => {
        res = err.response
    });
    return res;
}
