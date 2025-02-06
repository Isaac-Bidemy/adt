import React from 'react'
import { products } from '../datas/productData'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
  const{ id } = useParams(); 
  const product = products.find((product)=>product.id === parseInt(id))
  if (!product){
    return <div> product not found</div>
  }

  return (
    <div>
        <img src={product.image} alt={product.img}/>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.discountPrice}</p>
        <p>{product.normalPrice}</p>
    </div>
  )
}
