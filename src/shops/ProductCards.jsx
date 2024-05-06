/* eslint-disable react/prop-types */
import React from 'react'
import Rating from '../components/Rating'
import { Link } from 'react-router-dom'
const ProductCards = ({ GridList, products }) => {
  
    return (
          
      <div className={`shop-product-wrap row justify-content-center ${GridList ? "grid" : "list"}`}>
            
            <div>

            <center><h1>Welcome</h1><br></br><h2>Civilize Clinic</h2><br></br>
                <h2>เสริมจมูก</h2></center>
                
          </div>{
                
              products.map((product, i) => (
                  <div key={i} className="col-lg-4 col-md-6 col-12">
                      <div className="product-item">
                          <div className="product-thumb">
                              <div className="single-thumb">
                                  <img src={product.img} width={400} height={400}  alt="รีวิวเสริมจมูกเชียงใหม่" />
                              </div>
                          </div>
                          <div className="product-content">
                              <h3>
                                  {product.name}
                              </h3>
                              <br></br>
                              <p className="product-rating">
                             <Rating/>
                              </p>
                              <br></br>
                              <h4>${product.price}</h4>
                              <br></br>
                              <h5>{product.desc}</h5>
                          </div>
                      </div>    
                    
                  

                  
                  </div>
                  
              ))
          }
    </div>
  )
}

export default ProductCards