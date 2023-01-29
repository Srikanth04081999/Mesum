import React,{useState} from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import About from '../HeaderComponent/About';
import Contact from '../HeaderComponent/Contact';
import Home from './Home'
import "./Product.css"
import Shop from '../ShopComponent/Shop';
import Details from './Details'




const Product = () => {
  const [menuData, setMenuData] = useState(Menu);
 
  return (

    <div>
        <Router>
      <header>
      <Link to="/"><img src="./images/logo.png" alt="" /></Link>
      <ul className="App-header">
              <li>
                <Link to="/"><p>Home</p></Link>
              </li>
              <li>
                <Link to="/about"><p>About Us</p></Link>
              </li>
              <li>
                <Link to="/contact"><p>Contact Us</p></Link>
              </li>
              
              <li>
                <Link to="/category"><p>ARTIFACTS</p></Link>
              </li> 
              <li>
                <Link to="/shop"><p>shop</p></Link>
              </li> 
              
            </ul>
      </header>
        <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/category' element={<MenuCard menuData={menuData} />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
        <Route exact path='/shop' element={< Shop />}></Route>
        <Route exact path='/curElem/:id' element={< Details />}></Route>


        </Routes>
       </Router>
    </div>
  )
}

export default Product

