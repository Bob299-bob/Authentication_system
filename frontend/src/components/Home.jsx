import React, { useState } from 'react'
import Header from './Header'
import './Home.css'
function Home() {
    const Images=[
        '../assets/two.jpeg',
        '../assets/three.jpeg',
        '../assets/two.jpeg',
        '../assets/four.jpeg'
    ];
    const [index,setIndex]=useState(0);
    const nextImage=()=>{
        setIndex((prev)=>(prev+1)%Images.length);
    };
    const prevImage=()=>{
        setIndex((prev)=>(prev-1+Images.length)%Images.length)
    }

  return (
    <div className='Container'>
        <div className='head'><Header/></div>
        <div className='Slider'>
            <button onClick={prevImage}>Prev</button>
            <img src={Images[index]} alt='images' className='slider-img'/>
            <button onClick={nextImage}>Next</button>
        </div>
    </div>
  )
}

export default Home