import React from "react";
import { Link } from "react-router-dom";
import hero3 from "../../../assets/images/hero3.jpg";
import Wrapper from "./ForgotpasswordWrapper";

function ForgotPassword(){
    return (
        <Wrapper>
            <div className="forgotpassword"
            style={{backgroundImage: `url(${hero3})`}}>
    
                <form>
                <h1>Forget Password</h1>

                <div className="des">
                    <span>Enter your email and we'll send you new password</span>
                </div>

                <div className="input">
                    <input 
                    type="email"
                    placeholder="Enter Email"/>
                </div>

                <button className="commit">SEND EMAIL</button>

                <div className="goback">
                    <Link to="/">Back to Sign in</Link>
                </div>
    
                </form>
            </div>
        </Wrapper>
    )
}

export default ForgotPassword;