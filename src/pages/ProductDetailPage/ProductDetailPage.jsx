import React from 'react'
import { useState, useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from "react-icons/io";
import {ScaleLoader} from 'react-spinners'
import './ProductDetailPage.css'

const ProductDetailPage = () => {

  const navigate = useNavigate()
  const {productId} = useParams()
  const [productData,setProductData] = useState(null)
  const [loading,setLoading] = useState(false)
  const [mainImage,setMainImage] = useState(null)

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        setLoading(true)
        const response = await fetch(`https://api.escuelajs.co/api/v1/products/${productId}`)

        if(!response.ok){
          console.log('response not OK')
          return
        }

        const result = await response.json()
        setProductData(result)
        setMainImage(result.images[0])
      }
      catch(err){
          console.log(err)
      }
      finally{
        setLoading(false)
      }
    }
    fetchData()
  },[productId])

  //only to print the product data
  useEffect(()=>{
    console.log('Product Data : ',productData)
  },[productData])
 
  //function to change main image
  const handleChange = (image) => {
    setMainImage(image)
  }

 
  return (
    <div className='product-detail-page container'>
      <div className='product-container'>
        <div className='button-container'>
          <button className='back-button'
                  onClick={()=>navigate('/')}>
                  <span><IoIosArrowBack /></span>
                  Back
          </button>
        </div>
        {loading && <div className='loader-div'>
        <ScaleLoader 
            loading={loading}
            color='#703BF7'
            cssOverride={{ margin: "80px auto", display: "block" }}/>
        </div>}
        {!loading && productData && 
        <div className='product-details-container'>
          <div className='image-container'>
            <div className='side-img-container'> 
                {
                  productData.images.map((image,index)=>
                    <div key={index} className='side-img'>
                        <img src={image}
                        alt='product-image'
                        className={image===mainImage ? 'selected' : ''}
                        onClick={()=>handleChange(image)} />
                    </div>
                  )
                }  
            </div>
            <div className='main-img-container'>
              {mainImage && <img src={mainImage} alt='product-image' />}
            </div>
          </div>
            <div className='info-container'>
              <h1>{productData.title}</h1>
              <div className='product-category'>{productData.category.name}</div>
              <p className='description'>{productData.description}</p>
              <div className='price-container'>
                <div className='price'>
                  <p className='price-header'>price</p>
                  <p className='price-value'>{`$ ${productData.price}`}</p>
                </div>
                <button onClick = {()=>navigate('/cart')}>Add To Cart</button>
              </div>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default ProductDetailPage


          