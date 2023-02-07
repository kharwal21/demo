import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            Navigate('/')
        }
    })




    const collectData = async () => {
        console.log(name, email, password);
        let result = await fetch('http://localhost:1234/Signup', {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: { 'content-type': 'application/json' },

        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result.result))
        localStorage.setItem("token", JSON.stringify(result.auth))
        Navigate('/')
    }
    return (

        <div className="sign">
            <h1>Register</h1>
            <input className="signcom" input="text" placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}>
            </input>
            <input className="signcom" input="text" placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}>
            </input>
            <input className="signcom" input="password" placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}>
            </input>
            <button onClick={collectData} className="signbtn">sign up</button>
        </div>

    )
}
export default Signup;