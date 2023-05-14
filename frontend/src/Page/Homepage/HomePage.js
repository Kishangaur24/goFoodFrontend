import React,{useEffect, useState} from 'react'
import Footer from '../Footer/Footer'
import Card from '../../component/Card/Card'
import Carousel from '../../component/Carousel/Carousel'
import style from './HomePage.module.css'

const HomePage = () => {
  //const [search,setSearch]=useState("")
  const [ foodCat, setFoodCat]=useState([])
  const [ foodItem, setFoodItem]=useState([])

  const loadData = async()=>{
    let response = await fetch("http://localhost:5000/api/foodData",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    })

    response = await response.json()
    //console.log(response[0],response[1])
    setFoodItem(response[0])
    setFoodCat(response[1])
  }

  useEffect(()=>{
      loadData()
  },[])



  return (
    <div className={style.main}>
        <div><div id='program' className={style.main}>

<div className='programcomponent'>
<div className='programmain'>
<div className='scroll'>
<Carousel fade>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/700*500/?burger"
      alt="First slide"
      height="500vh"
      width="20%"
    />
    <Carousel.Caption>
      <input/>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/700*500/?pastry"
      alt="Second slide"
      height="500vh"
      width="20%"
    />

    <Carousel.Caption>
      <input type="search"/>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/700*500/?sandwitch"
      alt="Third slide"
      height="500vh"
      width="20%"
    />

    <Carousel.Caption>
      <h3>Sandwitch</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/700*500/?milkshake"
      alt="First slide"
      height="500vh"
      width="20%"
    />
    <Carousel.Caption>
      <h3>Milkshake</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/700*500/?muffin"
      alt="First slide"
      height="500vh"
      width="20%"
    />
    <Carousel.Caption>
      <h3>Muffin</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/700*500/?taco"
      alt="First slide"
      height="500vh"
      width="20%"
    />
    <Carousel.Caption>
      <h3>Taco</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/random/700*500/?burrito"
      alt="First slide"
      height="500vh"
      width="20%"
    />
    <Carousel.Caption>
      <h3>Burrito</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</div>
</div>
</div></div>



    <div className={style.container}>
      {
        foodCat !==[] ? foodCat.map((data)=>{
          return (
            <div>
          <div key={data._id} className={style.categoryName}>
            {data.CategoryName}
            </div>
            {foodItem !==[]?foodItem.filter((item)=>
              item.CategoryName ===data.CategoryName)
              .map(filterItems=>{
                return (
                  <div key={filterItems._id} className={style.card}>
                    <Card
                     //foodName={filterItems.name}
                     foodItem={filterItems}
                     options={filterItems.options[0]}
                     //imgSrc= {filterItems.img}
                    />
                  </div>
                )
              })
            : <div>No such data found</div>}
            </div>
          )
        }) : ""
      }
      {/* <Card/> */}
    </div>
    <div><Footer/></div>

    </div>
  )
}

export default HomePage
