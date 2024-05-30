import httpInstance from "../httpInstance";

export const signupUser = async (body: { firebaseId: string; email: string; instanceId: string; }) => {
    let res: any;
    const endpoint = `/api/auth/users/register`;

    await httpInstance.post(endpoint , body).then((response) => {
        res = response;
    }).catch((err) => {
        res = err.response
    });
    return res;
}
