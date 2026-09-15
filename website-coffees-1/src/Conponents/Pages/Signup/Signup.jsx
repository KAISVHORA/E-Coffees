

const Signup = () => {
    return (
             <div className="container-full">
                  {/* Start-signup */}
            <div className="Signup-new">
                <div className="Signup">
                <form>
                        <h1>Signup</h1>
                        <input type="text" name="email" placeholder="Email" required />
                        <input type="text" name="password" placeholder="Password" required  />
                        <input type="text" name="password" placeholder="Confirme Password" required />
                                    <button className="button-primary" required >Signup</button>
                                    <div className="forget account-signup ">Don't have account? <a href="Login">Login</a></div>
                </form>
                </div>
            </div>
            {/* Start-signup */}
        </div>
    )
}

export default Signup 