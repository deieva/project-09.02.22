import React from 'react';
import '../Assets/CSS/Login.css';
function Login() {

    return (
        <div>
            <div className="logmod">
                <div className="logmod__wrapper">
                    <span className="logmod__close">Close</span>
                    <div className="logmod__container">
                        <ul className="logmod__tabs">
                            <li data-tabtar="lgm-2"><a href="#">Login</a></li>
                            <li data-tabtar="lgm-1"><a href="#">Sign Up</a></li>
                        </ul>
                        <div className="logmod__tab-wrapper">
                            <div className="logmod__tab lgm-1">
                                <div className="logmod__heading">
                                    <span className="logmod__heading-subtitle">Enter your personal details <strong>to create an acount</strong></span>
                                </div>
                                <div className="logmod__form">
                                    <form accept-charset="utf-8" action="#" className="simform">
                                        <div className="sminputs">
                                            <div className="input full">
                                                <label className="string optional" for="user-name">Email*</label>
                                                <input className="string optional" maxlength="255" id="user-email" placeholder="Email" type="email" size="50" />
                                            </div>
                                        </div>
                                        <div className="sminputs">
                                            <div className="input string optional">
                                                <label className="string optional" for="user-pw">Password *</label>
                                                <input className="string optional" maxlength="255" id="user-pw" placeholder="Password" type="text" size="50" />
                                            </div>
                                            <div className="input string optional">
                                                <label className="string optional" for="user-pw-repeat">Repeat password *</label>
                                                <input className="string optional" maxlength="255" id="user-pw-repeat" placeholder="Repeat password" type="text" size="50" />
                                            </div>
                                        </div>
                                        <div className="simform__actions">
                                            <input className="sumbit" name="commit" type="sumbit" value="Create Account" />
                                            <span className="simform__actions-sidetext">By creating an account you agree to our <a className="special" href="#" target="_blank" role="link">Terms & Privacy</a></span>
                                        </div>
                                    </form>
                                </div>
                                <div className="logmod__alter">
                                    <div className="logmod__alter-container">
                                        <a href="#" className="connect facebook">
                                            <div className="connect__icon">
                                                <i className="fa fa-facebook"></i>
                                            </div>
                                            <div className="connect__context">
                                                <span>Create an account with <strong>Facebook</strong></span>
                                            </div>
                                        </a>

                                        <a href="#" className="connect googleplus">
                                            <div className="connect__icon">
                                                <i className="fa fa-google-plus"></i>
                                            </div>
                                            <div className="connect__context">
                                                <span>Create an account with <strong>Google+</strong></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="logmod__tab lgm-2">
                                <div className="logmod__heading">
                                    <span className="logmod__heading-subtitle">Enter your email and password <strong>to sign in</strong></span>
                                </div>
                                <div className="logmod__form">
                                    <form accept-charset="utf-8" action="#" className="simform">
                                        <div className="sminputs">
                                            <div className="input full">
                                                <label className="string optional" for="user-name">Email*</label>
                                                <input className="string optional" maxlength="255" id="user-email" placeholder="Email" type="email" size="50" />
                                            </div>
                                        </div>
                                        <div className="sminputs">
                                            <div className="input full">
                                                <label className="string optional" for="user-pw">Password *</label>
                                                <input className="string optional" maxlength="255" id="user-pw" placeholder="Password" type="password" size="50" />
                                                <span className="hide-password">Show</span>
                                            </div>
                                        </div>
                                        <div className="simform__actions">
                                            <input className="sumbit" name="commit" type="sumbit" value="Log In" />
                                            <span className="simform__actions-sidetext"><a className="special" role="link" href="#">Forgot your password?<br/>Click here</a></span>
                                        </div>
                                    </form>
                                </div>
                                <div className="logmod__alter">
                                    <div className="logmod__alter-container">
                                        <a href="#" className="connect facebook">
                                            <div className="connect__icon">
                                                <i className="fa fa-facebook"></i>
                                            </div>
                                            <div className="connect__context">
                                                <span>Sign in with <strong>Facebook</strong></span>
                                            </div>
                                        </a>
                                        <a href="#" className="connect googleplus">
                                            <div className="connect__icon">
                                                <i className="fa fa-google-plus"></i>
                                            </div>
                                            <div className="connect__context">
                                                <span>Sign in with <strong>Google+</strong></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;