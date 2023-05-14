import React from 'react'
import {Carousel} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './Carousel.module.css'
function Carousel1() {
  return (
    <>
    <div id='program' className={style.main}>

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
          <h3>Burger</h3>
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
          <h3>Pastry</h3>
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
          <input/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default Carousel1