import React, { useState, useEffect, ChangeEvent} from "react";
import { Link, useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

import { useDataContext } from '../../context/DataContext';
import { useAuth } from "../../context/AuthContext";

import { getInstances } from "../../services/instance/getInstances";
import { IInstance } from "../../services/instance/types";

import { signupUser } from "../../services/user/signupUser";

import './styles.css'


const SignupForm = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [selectedInstanceId, setSelectedInstanceId] = useState('');
    const [instances, setInstances] = useState<IInstance[]>([]);

    useEffect(() => {
        const fetchInstances = async () => {
            const res = await getInstances();
            setInstances(res.data);
        };
        fetchInstances();
    }, [setInstances, getInstances]);

    const handleInstanceChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedInstanceId(event.target.value);
    };

    const onRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth ,email ,password).then(async (userCredential) => {
            const firebaseId = userCredential.user.uid;
            const body = {
                firebaseId: firebaseId,
                email: email,
                instanceId: selectedInstanceId
            }
            const res = await signupUser(body);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    return(
        <form action="" onSubmit={onRegister}>
            <div className="title">
                <h3>Register</h3>
                <p className="text-sm">Make sure your email is the same as Connect.</p>
            </div>
            <div className="input-container">
                <label htmlFor="instance" className="input-label">Instance</label>
                <select name="instanceAlias" id="instanceAlias" value={selectedInstanceId} onChange={handleInstanceChange} className="btn-type-7">
                     <option value="">Select an instance</option>
                     {instances.map((instance) => (
                         <option key={instance.id} value={instance.id}>
                             {instance.instanceAlias}
                         </option>
                     ))}
                 </select>
            </div>
            <div className="input-container">
                <label htmlFor="email" className="input-label">Email</label>
                <input className="input" type="mail" name="email" id="email-register" placeholder=" email address..." onChange={(e) => setEmail(e.target.value)}  />
            </div>
            <div className="input-container">
                <label htmlFor="password" className="input-label">Password</label>
                <input className="input" type="password" name="password" id="password-register" placeholder=" password..." onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="link-container">
                <button className="button login-button" type="submit">Register</button>
                <Link className="link" to='/auth/login'>You have an account? </Link >
            </div>
        </form>
    )
}

export default SignupForm;