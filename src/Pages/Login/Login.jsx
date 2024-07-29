import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react'

import { login,signup } from '../../firebase'
import netflix_loader from '../../assets/netflix_spinner.gif'

const Login = () => {


const [signState,setSignState] = useState("LogIn")
const [load,setLoad] = useState(false)
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const user_auth = async (event)=>{
  event.preventDefault();
  setLoad(true)
  if(signState === "LogIn"){
    await login(email,password)
  }else{
    await signup(name,email,password)
  }
  setLoad(false)
}


  return (
    load ? <div className ="login-spin"> <img src={netflix_loader} alt="" /></div> :
    <div className='login'>
      
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
       <form >
        {signState==="SignUp"? <input onChange={(e)=>{setName( e.target.value)}} value={name} type="text" placeholder='Your name' />: <></>}
       
        <input onChange={(e)=>{setEmail( e.target.value)}} value={email}  type="email" placeholder='Enter Your email' />
        <input  onChange={(e)=>{setPassword( e.target.value)}} value={password}  type="password" placeholder='password' />
        <button type='submit' onClick={user_auth}>{signState}</button>
          <div className="form-help">
            <div className='remember'>
              <input type="checkbox" />
              <label htmlFor="">Remeber Me</label>
            </div>
            <p>Need Help?</p>
          </div>

       </form>
      <div className="form-switch">
        {signState === "LogIn"?  <p>New to Netflix? <span onClick={()=>{setSignState("SignUp")}}>Sign Up Now</span> </p>: <p>Already have account? <span  onClick={()=>{setSignState("LogIn")}}>Log in Now </span> </p>
      }
       
       </div>

      </div>
      
      </div>
  )
}

export default Login