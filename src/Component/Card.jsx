import React,{useContext} from 'react'
import { store } from './API/ApiFile'
// import { Link } from 'react-router-dom'
const Card = (props) => {
    // const [context]=useContext(store)
    // const handleClick=(id)=>{
    //     context.setCount((preValue)=>{
    //       preValue.push(id)
    //       console.log(preValue);
    //       return preValue
    //     })
    //   }
  const {imgUrl,name,price,oprice,rating}=props
  return (
    // <Link to='/DetailPage' style={{textDecoration:'none'}} state={{
    //   imgUrl:imgUrl,
    //   description:description,
    //   title:title
    // }}>
    <div className="main_container">
    <div className='containerImg'>
    <img src={imgUrl} alt="" width='200px'/>
    </div>
    <div className='containerText'>
    <span>{name}</span> <br />
    <span><span id='oriPrice'>{oprice}</span>{price}</span> <br/>
    <img src={rating} alt="" width='100px'/> <br />
    {/* <button className='cartBtn' onClick={()=>{handleClick(context.data[index].id)}}>Add to Cart</button>
    <button className='buyBtn'>Buy Now</button> */}
    </div>
  </div>
//   </Link>
  
  )
}

export default Card