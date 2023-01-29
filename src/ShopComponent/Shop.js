import React,{useState} from 'react'
import Shopcard from './Shopcard'
import Bag from './Shopapi'

const Shop = () => {
  
  const [shopdata,setShopdata] = useState(Bag);
  
  return (
    <>
          <img src="./images/bg1.png" alt="" className='back'/>
          
          <div className="shop">
            <h1>SEIZE THE TREASURE</h1>
            <p>Explore our new arrivals and Top-selling 3D miniature artifacts</p>
            <h2>HAVE A LOOK</h2>
            </div>
          <Shopcard shopdata = {shopdata}/>


    </>
  )
}

export default Shop
