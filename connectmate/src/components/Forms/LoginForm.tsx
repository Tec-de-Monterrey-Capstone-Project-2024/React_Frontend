import React, { useState } from "react";


export default function LoginForm() {
    const [formData, setFormData] = useState({
        name: '',
        password: ''
    });
    
    return (
        <section className="absolute bg-white px-72 py-20 rounded-lg shadow-xl border-2 flex justify-center">
            <div className="flex justify-center">
                <h3>Login</h3>
            </div>
            <form className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center mb-4">
                <label htmlFor="iam-role">IAM Role</label>
                <input type="text" id="iam-role" placeholder="IAM Role" />
            </div>
            <div className="flex flex-col items-center mb-4">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="IAM Role" />
            </div>

                <button className="bg-blue px-20 py-5 rounded-lg">Login</button>
            </form>
        </section>
    );
}
