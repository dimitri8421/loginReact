export function Login() {
    return (
        <div className="formLogin">
            <div className="title">Login</div>
            <div className="title2">Welcome, login to your account</div>

            <div className="formdata">
                <div className="inputs">
                    <input type="text" name="userName"/>
                    <label>User Name</label>
                </div>

                <div className="inputs">
                    <input type="text" name="pass"/>
                    <label>Password</label>
                </div>

                <button className="btn">Login</button>

                <a className="title2">Forgot Password?</a>
            </div>
        </div>
    );
}