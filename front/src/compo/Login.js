import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const Navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            Navigate('/')
        }

    }, [])
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handellogin = async () => {
        console.log(email, password)
        let result = await fetch('http://localhost:1234/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: { 'content-type': 'application/json' }
        });
        result = await result.json();
        console.log(result)
        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            Navigate("/")

        } else {
            alert('enter correct detail')
        }
    }
    return (

        <div className="login">
            <input type='text' className="signcom" placeholder='enter email' value={email}
                onChange={(e) => setEmail(e.target.value)}></input>
            <input type='text' className="signcom" placeholder='password' value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
            <button className="signbtn" onClick={handellogin}>Login</button>
        </div>
    )
}
export default Login;