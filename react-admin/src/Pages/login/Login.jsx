import { useContext, useState } from "react";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {dispatch} = useContext(AuthContext)



  const handleLogin = (e) => {
    e.preventDefault();
    
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:"LOGIN", payload:user})
    navigate("/");
   

    // ...
  })
  .catch((error) => {
    setError(true);
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  };

  return (
    <div className="login">
      <div className="image"><img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Logo_inpt.PNG"/>
      </div>
      <div className="form2">
      <form onSubmit={handleLogin}>

      <div className="log">Login</div>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <span>Wrong email or password!</span>}
      </form>
      </div>
    </div>
  );
};

export default Login;