import React,{useState} from 'react'
import style from './Login.module.css'
import {NavLink,useNavigate} from 'react-router-dom'
const Login = () => {
  let navigate = useNavigate()
  const [ credential,setCredential]= useState({email:"",password:""})
  const handleSubmit=async(e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: credential.email,
        password: credential.password,
        
      })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credential");
    }
    if (json.success) {
      localStorage.setItem("userEmail",credential.email)
      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"))
      navigate("/")
    }
 
  }
  function handleChange(e){
    setCredential({...credential,[e.target.name]:e.target.value})
  }
  return (
    <>
 <div className={style.regbg}>
        <div className={style.maincontentreg}>
          <h1 style={{ color: "white" }}>Login Here</h1>
          <form onSubmit={handleSubmit}>
            <div className={style.formlogin}>
              Email{" "}
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={credential.email}
                onChange={handleChange}
              />
            </div>

            <div className={style.formlogin}>
              Password
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={credential.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <div>
                <button className={style.regbtn}>Login</button>
              </div>
              <p>
                If you are new user then register first
                <NavLink exact to="/createuser" className={style.navlogo}>
                  register
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
