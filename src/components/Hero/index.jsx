import React from 'react'
import { heroapi } from '../../Data'

export const Hero = () => {

  const {img} = heroapi
  console.log('====================================');
  console.log(heroapi);
  console.log('====================================');
  return (
    <div>
      <div></div>
      <div>
        <div>
          <h1></h1>
          <h1></h1>
           <button></button>
           <div></div>
           <div></div>
        </div>
        <div>
          <img src={img} alt='hero-img/img'/>
        </div>
      </div>
    </div>
  )
}
