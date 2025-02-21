import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Footer from './component/Footer'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import OurStory from './pages/OurStory'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Adetutu from './pages/Adetutu'
import { CartProvider } from './context/CartContext';




function App() {

  return (
 <div>
  <Router>
    <CartProvider>
  <Header />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/ourstory' element={<OurStory />}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/contact' element={<Contact />}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/Adetutu' element={<Adetutu />}/>
    <Route path='/products/:id' element={<ProductDetails/>}/>
  
  </Routes>
  </CartProvider>
  <Footer />
  </Router>
 

  
</div>
  )
}

export default App
