import "./App.css";
import { Login } from "./components/Login";
import { Circles } from "./components/Circles";
import { detect } from "./assets/js/circles";
import { Signup } from "./components/Signup";
function App() {

    const styleCircle = detect();
    return (
        <div className="container">
            <Circles style={styleCircle[1]} />
            <Circles style={styleCircle[2]} />

            <div className="login">
                <Login />
            </div>

            <div className="signup"><Signup /></div>
            <div className="footer">
                Desenvolvido por Patrick<img src="../public/purple-heart_1f49c.gif" style={{ width: "1.3em", filter: "unset" }} />
            </div>
        </div>

    );
}

export default App;
