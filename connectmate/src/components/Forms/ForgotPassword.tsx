import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
    return(
        <div className=" absolute bg-white border-green rounded-lg shadow-2xl border-l-8 top-2/4 left-2/4 -translate-x-1/2 -translate-y-3/4 max-w-xl w-full px-12 " >
            <form className=" ">
                    <div className="text-lg my-4 flex justify-center ">
                        <h3>Forgot Password</h3>
                    </div>
                    <div className="grid grid-rows-1">
                    <div className="flex flex-col justify-left mb-4">
                        <label className="pb-3" htmlFor="iam_role">IAM Role</label>
                        <input className="border rounded-md py-2" type="text" id="iam_role" placeholder="  iam role..."  />
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <button className="bg-blue px-20 py-2 rounded-2xl text-white my-4">Send recovery code</button>
                    <a className="mb-4" href="/auth">Login</a>
                </div>
            </form>
        </div>
    );
}