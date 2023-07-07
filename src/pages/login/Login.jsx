import React, { useEffect, useState } from 'react'
import "./login.scss"
import {signInWithEmailAndPassword} from "firebase/auth";
import { signInWithPopup } from 'firebase/auth';
import {Link , useNavigate} from "react-router-dom";
import InputControl from '../../components/inputControl/InputControl';
import { auth , provider} from '../../firebase';

const Login = () => {
  const navigate =  useNavigate();
  const [values,setValues] = useState({
    email : "",
    pass : "",
  });
  const[details,setDetails] =useState('')
  const [errorMsg ,setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleClick =()=>{
    signInWithPopup(auth,provider)
    .then((data)=>{
      setDetails(data.user.email)
      localStorage.setItem("email" , data.user.email)
    })
  }
  useEffect(()=>{
    setDetails(localStorage.getItem('email'))
  })
  const handleSubmission = () =>{
    if(!values.email || !values.pass){
      setErrorMsg("Please Fill All The Fields");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email , values.pass)
    .then(async(res)=>{
      setSubmitButtonDisabled(false);
      navigate("/home");
    })
    .catch((err)=> {
      setSubmitButtonDisabled(false);
       setErrorMsg(err.message);
    });
  }
  return (

    <div className='login'>
      <div className="left-half">
       <h1>Board.</h1>
      </div>
      <div className="right-half">
      <h1 className='sign-in-text'>Sign In</h1>
      { details?navigate("/home"):
      <button className='google-signin' onClick={handleClick}>Sign In With Google</button>
}
      <div className="inner-box">
        
       <InputControl label ="Email" placeholder ="Enter email address"
         onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
        } />
       <InputControl label = "Password" placeholder ="Enter Password" type="password"
       onChange={(event)=>
      setValues((prev)=>({...prev, pass: event.target.value}))
      }
       ></InputControl>
       <div className="footer">
        <b className='error'>{errorMsg}</b>
      <button onClick={handleSubmission} disabled={submitButtonDisabled}>Sign In</button>
      <Link  style={{textDecoration:"none"}}>Forgot Password?</Link>
      <p>
        Don't Have an Account?{" "}
        <Link  style={{textDecoration:"none"}}>Register Here</Link>
      </p>
 
       </div>
      </div>
      </div>
    </div>
  )
}

export default Login
