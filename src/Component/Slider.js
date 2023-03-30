import React, { useState, useEffect } from 'react'
import img1 from './Image/1.jpg'
import img2 from './Image/2.jpg'
import img3 from './Image/3.jpg'
import img4 from './Image/4.png'
import img5 from './Image/5.png'
import '../App.css'

const Slider=()=>{
    const[img,setImg]=useState(0);
    const[allImg]=useState([img1,img2,img3,img4,img5])
    useEffect(()=>{
        setInterval(()=>{
            setImg(img => img<5 ? img+1: 0)
        },3000)
    },[])
    return(
        <>
            <img src={allImg[img]} alt="Not found" className='imageSlider'/>
            
        </>
    )
}
export default Slider