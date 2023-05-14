import React, { useEffect, useRef, useState } from 'react';
import style from './Card.module.css';
import { useDispatchCart,useCart } from '../ContextReducer';
const Card = (props) => {
  let dispatch = useDispatchCart()
  let data = useCart()
  let options = props.options;
  const priceRef = useRef()
  //console.log(options)
  let priceOption = Object.keys(options)
  //console.log(priceOption)
  const[qty,setQty]=useState(1)
  const[size,setSize]=useState("")

  const handleAddToCart=async()=>{
    let food = []
    for(const item of data){
      if(item.id===props.foodItem._id){

        food=item;
        break;
      }
    }

    if(food !==[]){
      if(food.size=== size){
        await dispatch({ type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
        return
      
    }else if(food.size !== size){
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
    return
    }
    return
  }
    await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
  
}
  let finalPrice = qty*parseInt(options[size])
  useEffect(()=>{
   setSize(priceRef.current.value)
  },[])
    
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img src={props.foodItem.img} />

        <div className={style.title}>
          <h6>{props.foodItem.name}</h6>
        </div>
        <div className={style.select}>
          <select onChange={(e)=>setQty(e.target.value)}>
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select onChange={(e)=>setSize(e.target.value)} ref={priceRef}>
           {
            priceOption.map((item)=>{
              return <option key={item} value={item}>{item}</option>
            })
           }
          </select>
          <h6 className={style.cost}>Rs{finalPrice}/-</h6>
          <hr/>
          <button className={style.cart} onClick={handleAddToCart}>Add to Cart</button>
        </div>
        
      </div>
    </div>
  );
};

export default Card;
