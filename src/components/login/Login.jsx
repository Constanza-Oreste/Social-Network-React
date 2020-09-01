import React from 'react'
import "./Login.css"

function Login(props) {

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignUp, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    return (
        <section className="login">
            
            <div className="loginContainer">
                <div className="loginPicture"></div>
                <div className="titleLoginContainer">Welcome to <strong className="bookingTitle">Booking</strong></div>
                <div className="loginDescription">The Social Network for book readers!</div>
                <label>Username</label>
                <input type="text" autoFocus required value={email}
                onChange={(e) => setEmail(e.target.value)}>
                </input>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" require value={password} 
                onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignUp}>Sign up</button>
                            <p>Have an account? 
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;
