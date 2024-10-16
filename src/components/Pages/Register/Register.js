import React from "react";
import Wrapper from "./RegisterWrapper";
import hero2 from "../../../assets/images/hero2.jpg"

function Register() {
    return(
        <Wrapper>
            <div className="register" 
            style={{backgroundImage: `url(${hero2})`}}>
                
                <form>
                    <h1>Register</h1>

                    <div className="login-link">
                        <p>Already have an <a href="">account?</a></p>
                    </div>

                    <div className="input">
                        <input
                        type="username"
                        placeholder="Enter Username"/>

                        <input 
                        type="password"
                        placeholder="Enter Password"/>

                        <input
                        type="email"
                        placeholder="Enter Email"/>

                        <button className="commit">CREATE ACCOUNT</button>

                    </div>
                    
                </form>
            </div>
        </Wrapper>
    )
}

export default Register