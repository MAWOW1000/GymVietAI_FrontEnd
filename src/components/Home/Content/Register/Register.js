import React, { useState } from "react";
import Wrapper from "./RegisterWrapper";
import hero2 from "../../../../assets/images/hero2.jpg"
import { notification } from 'antd';
import { useNavigate } from "react-router-dom";
import { postSignup } from "../../../../util/api";

function Register() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const handleCreate = async () => {
        const res = await postSignup(username, email, password);

        if (!res.message) {
            localStorage.setItem("token", res.token)
            notification.success({
                message: "CREATE USER",
                description: "Success"
            });
            navigate("/login");

        } else {
            notification.error({
                message: "CREATE USER",
                description: "error"
            })
        }
    }
    return (
        <Wrapper>
            <div className="register"
                style={{ backgroundImage: `url(${hero2})` }}>

                <form>
                    <h1>Register</h1>

                    <div className="login-link">
                        <p>Already have an <a href="">account?</a></p>
                    </div>

                    <div className="input">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button type="button" className="commit" onClick={handleCreate}>CREATE ACCOUNT</button>

                    </div>

                </form>
            </div>
        </Wrapper>
    )
}

export default Register