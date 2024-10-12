import React from "react";
import './Login.css'

function Login() {

    return (
        <>
            <div className="login">
                <h4>Login Form</h4>
                <label htmlFor="username">Enter Username</label>
                <br />
                <input type="text" name="username" id="username" />
                <br />
                <label htmlFor="password">Enter Password</label>
                <br />
                <input type="text" name="password" id="password" />
                <br />
                <br />
                <button type="button">Login</button>
            </div>

        </>

    )
}

export default Login