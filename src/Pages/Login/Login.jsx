import React, { useContext, useState } from 'react'
import "./Login.scss"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthContext";

export const Login = () => {
  const { dispatch} = useContext(AuthContext);

  const navigate = useNavigate();

  const [error,setError] = useState(false);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin=(e)=>{
    e.preventDefault();

    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
      //Signed in user
      const user = userCredential.user;
      dispatch({type: 'LOGIN', payload: user});
      // console.log(user)
      navigate("/");

    })
    .catch((error)=>{
      // const errorCode = error.code;
      // const errorMessage = error.message;
      setError(true);
    });
  }
  return (
    <div className='login'>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
        <input type="password" placeholder='Password' onChange={e=>setPassword(e.target.value)}/>
        <button type='submit'>Login</button>
        {error && <span>Wrong email or password</span>}
      </form>
    </div>
  )
}
