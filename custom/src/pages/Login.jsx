
import {useContext, useState} from "react";
import {MainContext} from "../Context/MainContext.js";
import {useNavigate } from "react-router-dom";
const Login = () => {

    const {login} = useContext(MainContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        login(username, password);
        navigate("/");
    };
    return (
        <>

                <div className='content'>
                    <h1>Welcome, Please Sign in!</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text"
                                   className="form-control"
                                   value={username}
                                   id="username"
                                   placeholder="Username"
                                   autoComplete="username"
                                   onChange={(e) => {
                                       setUsername(e.target.value)
                                   }}
                            />


                            <label htmlFor="password">Password</label>
                            <input type="password"
                                   className="form-control"
                                   id="password"
                                   value={password}
                                   placeholder="Password"
                                   autoComplete="current-password"
                                   onChange={(e) => {
                                       setPassword(
                                           e.target.value
                                       )
                                   }}/>
                        </div>
                        <button type="submit" className="login-button">Sign in
                        </button>
                    </form>
                </div>
        </>
    )
}
export default Login;