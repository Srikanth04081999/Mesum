import React from 'react'
import Slick from './Slick'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <img src="./images/bg.png" alt="" className='back' />
 <section className="one">
        <div className="left">
            <h1>EXPLORE 3D COLLECTIONS <br /> RANDOMLY</h1>
            <p>High accuracy 3D and realistic texture to discover the details you missed.</p>           
            <Link to="/category"><button className='btn'>EXPLORE NOW!--</button></Link>
        </div>
           </section>
           <Slick/>
            
    </div>
  )
}

export default Home
