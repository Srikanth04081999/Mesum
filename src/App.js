import React from 'react'
import Product from './Component/Products'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Shop from './ShopComponent/Shop'
const App = () => {
  return (
    <div>
      <Product/>
      {/* <Router>
      <Routes>
      <Route exact path='/shop' element={< Shop />}></Route>
      </Routes>
      </Router> */}

    </div>
  )
}

export default App
