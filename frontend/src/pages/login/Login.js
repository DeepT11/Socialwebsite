import "./login.css"
import CircularProgress from '@mui/material/CircularProgress';
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { useContext, useRef } from "react";

export default function Login() {

    const email=useRef();
    const password=useRef();
    const { isFetching, dispatch } = useContext(AuthContext);


    const handleClick = (e) => {
        e.preventDefault();
        // console.log(email.current.value);
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
          );
    };


  return (
    <div className="login">
        <div className="login-wrapper">
            <div className="login-left">
                <h3 className="login-logo">LammaSocial</h3>
                <span className="login-desc">
                    Connect with friends ad the world around you on Lamasocial.
                </span>
            </div>

            <div className="login-right">
                <form className="login-box" onSubmit={handleClick}>
                    <input 
                    placeholder="Email" 
                    type="email" 
                    required
                    className="login-input" 
                    ref={email}
                    />

                    <input 
                    placeholder="Password" 
                    type="password"
                    required
                    minLength="6"
                    className="login-input" 
                    ref={password} 
                    />
                    <button 
                    className="login-button"
                    type="submit"
                    disabled={isFetching}>
                      {isFetching ? (
                    <CircularProgress color="white" size="20px" />
                    ) : (
                   "Log In"
                    )}
                    </button>
                    <span className="login-forgot">Forgot Password?</span>
                    <button className="login-registerbutton">
                    {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
                    </button>
                    </form>
                </div>
            </div>

        </div>
    
  )
}
