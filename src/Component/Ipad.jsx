// import React,{useContext} from 'react'
// import { store } from './API/ApiFile'
// import Card from './Card'

// const Ipad = () => {
//     const [context]=useContext(store)
//   return (
//     <div>
// <div className='flexBox'>
// {context.filter((article)=>{return article.category==="Ipad" }).map((n,index)=>(
//           <Card
//           imgUrl={n.image}
//           name={n.name}
//           price={n.price}
//           oprice={n.oPrice}
//          rating={n.rating}
//           />
//         ))}

// </div>
//     </div>
//   )
// }

// export default Ipad

import React, { useContext } from "react";
import { store } from "./API/ApiFile";

const Macbook = () => {
  const context = useContext(store);
  console.log(context);

  const handleClick = (id) => {
    context.setCount((preValue) => {
      preValue.push(id);
      console.log(preValue);
      return preValue;
    });
  };

  return (
    <div className="macFlex">
      {context.data
        .filter((data) => data.category === "Ipad")
        .map((item, index) => {
          return (
            <div className="main_container">
              <div className="containerImg">
                <img src={item.image} alt="" width="200px" />
              </div>
              <div className="containerText">
                <span>{item.name}</span> <br />
                <span>
                  <span id="oriPrice">{item.oPrice}</span>
                  {item.price}
                </span>{" "}
                <br />
                <img src={item.rating} alt="" width="100px" /> <br />
                <button
                  className="cart"
                  onClick={() => {
                    handleClick(context.data[index].id);
                  }}
                >
                  Add to cart
                </button>
                <button className="buy">Buy Now</button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Macbook;
