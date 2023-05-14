import React,{useState} from 'react'
import style from './Navigationbar.module.css'
import {NavLink ,useNavigate} from "react-router-dom"
import { Badge } from 'react-bootstrap'
import Modal from '../Modal'
import Cart from '../Page/Cart'
import { useCart } from './ContextReducer'
function Navigationbar() {
  const[cartView, setCartView]=useState(false)
  let data = useCart()
const navigate= useNavigate()
  const handleLogout=()=>{
  localStorage.removeItem("authToken")
  navigate("/login")

  }
  return (
    <div className={style.container}>
   <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <NavLink  className="navbar-brand fs-1 fst-italic p-1 " to="/">GoFood</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav me-auto mb-1">
      <li className="nav-item active">
        <NavLink className="nav-Link active fs-5 bg-green text-white text-decoration-none" to="/">Home</NavLink>
      </li>
      <div className={style.myOrders}>
     {
      (localStorage.getItem("authToken"))?
      
      <li className="nav-item active">
      <NavLink className="nav-Link active fs-5 bg-green text-white " to="/myOrder">MyOrders</NavLink>
    </li>:""
   
     }
     </div>
    </ul>
    {
      (!localStorage.getItem("authToken"))?
    <div className='d-flex'>
    
        <NavLink className="btn bg-white text-success mx-1" to="/login">Login</NavLink>
        <NavLink className="btn bg-white text-success mx-1" to="/createuser">SignUp</NavLink>
       
    </div>
    :
    <div >
    <div className='btn bg-white text-success mx-2' onClick={()=>{setCartView(true)}}> My Cart{" "}
    <Badge>{data.length}</Badge>
    </div>
    {cartView?<Modal onClose={()=>setCartView(false)}><Cart/></Modal>:null}
    <div className='btn bg-white text-danger mx-2' onClick={handleLogout}> Logout</div>
    </div>
    }
  </div>
</nav>
    </div>
  );
}

export default Navigationbar;