import React from 'react'
import style from './Footer.module.css'
const Footer = () => {
  return (
    <div className={style.footer}>
    <a href='https://www.facebook.com/' target="_blank" >facebook</a>
    <a href='https://www.youtube.com/' target="_blank" >youtube</a>
    <a href='https://www.Instagram.com/' target="_blank" >Instagram</a>
    <span>contact | blog | catering | delivery</span>
    </div>
  )
}

export default Footer
