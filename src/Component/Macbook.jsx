import React,{useContext} from 'react'
import { store } from './API/ApiFile'

const Macbook = () => {
    const context=useContext(store)
    console.log(context)

    const handleClick=(id)=>{
      context.setCount((preValue)=>{
        preValue.push(id)
        console.log(preValue);
        return preValue
      })
    }

  return (
    <div className='macFlex'>
      {
            context.data.filter((data)=>data.category==='laptop').map((item,index)=>{
                return(
                  <div className='macbook' key={index}>
                      <img src={item.image} alt="laptop" width='200px' />
                    <div>{item.id} </div>         
                    <div>{item.name} </div>         
                    <img src={item.rating} alt="laptop" width='100px' />   
                    <br /> 
                    <button className="cart" onClick={()=>{handleClick(context.data[index].id)}}>Add to cart</button>    
                    <button className="buy" >Buy Now</button>
                    </div>
                   
                )
            })
        }
    </div>
  )
}

export default Macbook