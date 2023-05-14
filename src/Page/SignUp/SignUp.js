import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./SignUp.module.css";
const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [address, setAddress] = useState("");
     const [ credential,setCredential]= useState({name:"",email:"",password:"",geolocation:""})
  const handleSubmit=async(e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: credential.email,
        name: credential.name,
        password: credential.password,
        location: credential.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("enter valid credential");
    }
  }
  function handleChange(e){
    setCredential({...credential,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div className={style.regbg}>
        <div className={style.maincontentreg}>
          <h1 style={{ color: "white" }}>Register Here</h1>
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
              Name
              <input
                name="name"
                type="text"
                placeholder="Username"
                value={credential.name}
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

            <div className={style.formlogin}>
              Address
              <input
                type="text"
                name="geolocation"
                placeholder="address"
                value={credential.geolocation}
                onChange={handleChange}
              />
            </div>

            <div>
              <div>
                <button className={style.regbtn}>Register</button>
              </div>
              <p>
                Already have an account?
                <NavLink exact to="/login" className={style.navlogo}>
                  Login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
