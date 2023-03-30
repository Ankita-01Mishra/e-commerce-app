import React, { useContext } from 'react'
import { store } from './API/ApiFile'
import Slider from './Slider'


const Home = () => {
    const context=useContext(store)
    console.log(context)
  return (
    <>
    {/* {context.map((data,index)=>{
        return(
            <div key={index}>
                <img src={data.image} alt="image" width='50px'/>
                <br />
                {data.id}
                {data.name}
                <br />
                <img src={data.ratting} alt="ratting" width='50px'/>
                <br /> <br />
            </div>
            )
    })} */}

    {/* <Slider/> */}
    </>
  )
}

export default Home