export function Login() {
    return (
        <div style={{width: "100%"}}>
            <div className="title">Login</div>
            <div className="title2">Welcome, login to your account</div>

            <div className="formdata">
                <div className="inputs">
                    <input type="text" placeholder="User Name" />
                </div>

                <div className="inputs">
                    <input type="text" placeholder="Password" />
                </div>

                <button className="btn">Login</button>

                <div className="title2">Forgot Password?</div>
            </div>
        </div>
    );
}