import React from "react";
import { Link } from "react-router-dom";
import hero from "../../../assets/images/hero.jpg"
import Wrapper from "./LoginWrapper";

function Login(){
    return(
        <Wrapper>
            <div className="login"
            style = {{backgroundImage: `url(${hero})` }}>
                
                <form>
                    <h1>Login</h1>
    
                    <div className="register-link">
                        <p>You not have an <a href="">account?</a></p>
                    </div>
    
                    <div className="input">
                        <input 
                            type ='username'
                            placeholder='Usename'
                        />
                        <input
                            type='password'
                            placeholder='Password'
                        />
    
                        <button className="summit">SIGN IN</button>
    
                        <div className="remember-forgot">
                            <label><input type="checkbox"/>Remember Me</label>
                            <Link to="/forgot-password">Forgot Password</Link>
                        </div>

                        <h3>—Or Sign In With—</h3>

                        <div className="otherway">
                            <button href="">Facebook</button>
                            <button href="">Twitter</button>
                        </div>
                    </div>
    
                </form>
    
            </div>
        </Wrapper>
    )
}

export default Login