import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Shop from './pages/shop'
import OurStory from './pages/OurStory'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/signup'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'



function App() {

  return (
 <div>
  <Router>
  <Header />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/shop' element={<Shop />}/>
    <Route path='/ourstory' element={<OurStory />}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/products/:id' element={<ProductDetails/>}/>
  </Routes>
  <Footer />
  </Router>
 

  
</div>
  )
}

export default App
