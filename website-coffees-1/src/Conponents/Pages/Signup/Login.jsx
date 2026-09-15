
const Login = () => {
    return (
        <div className="container-full">
            {/* Start-login-up */}
            <div className="login-up">
                <div className="Login">
                <form>
                        <h1>Login</h1>
                        <input type="text" name="email" placeholder="Email" required />
                        <input type="text" name="password" placeholder="Password" required />
                        <div className="forget"><a href="#" >Forget Password?</a></div>
                                    <button className="button-primary" required >Login</button>
                                    <div className="forget account-signup ">Don't have account? <a href="Signup">Signup</a></div>
                </form>
                </div>
            </div>
              {/* End-login-up */}
        </div>
    )
}

export default Login