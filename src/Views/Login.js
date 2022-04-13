import React from 'react';
function Login() {

    return (
        <div>
            <div className="container">
                <h1>Login</h1>
                <form action="">
                    <div className="box">
                        <input type="text" placeholder="Username" required maxlength="25" />
                    </div>
                    <div className="box">
                        <input type="password" placeholder="Password" required maxlength="15" />
                    </div>
                    <input type="submit" className="btn" value="Login" />
                </form>
                <a href="#" className="b1">Forget Password?</a>
                <a href="#" className="b2">Create Account</a>
                <br /><br />
                <hr />
                <p>Or Login With</p>
                <div className="icon">
                    <i className="fab fa-github fa-2x"></i>
                    <i className="fab fa-google fa-2x"></i>
                    <i className="fab fa-facebook-square fa-2x"></i>
                </div>
            </div>

        </div>
    )
}

export default Login;