import axios from "axios";
import { useRef } from "react";
import "./register.css";
import { useNavigate } from "react-router";

export default function Login() {
const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
                    placeholder="Username" 
                    required
                    ref={username}
                    className="login-input" 
                    />
                    <input 
                    placeholder="Email" 
                    required
                    ref={email}
                    className="login-input" 
                    type="email"
                    />
                    <input 
                    placeholder="Password" 
                    required
                    ref={password}
                    className="login-input" 
                    type="password"
                    minLength="6"
                    />
                    <input 
                    placeholder="Confirm Password" 
                    required
                    ref={passwordAgain}
                    className="login-input" 
                    type="password"
                    />

                    <button className="login-button" type="submit">
                        Sign Up
                    </button>
                   
                    <button className="login-registerbutton">
                    Log In
                    </button>
                </form>
            </div>

        </div>
    </div>
  )
}
