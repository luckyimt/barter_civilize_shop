import { React , useEffect , useState } from 'react'
import { useParams } from 'react-router-dom';
import PopularPost from '../shops/PopularPost';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import ProductDisplay from "../shops/ProductDisplay";
import Review from './Review';
import { Helmet } from 'react-helmet-async';

const SingleProd = ({ products }) => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  console.log(product);

  useEffect(() => {
    fetch('/src/products.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])

  const result = product.filter((p) => p.id === id);


  return (
    <div>
      <Helmet>
        <title>เสริมจมูกที่ศิวิไลคลินิก ครั้งแรกได้รับส่วนลด</title>
        <meta name='description' content='มาเสริมจมูครั้งแรกที่ศิวิไลคลินิก' />
        <link rel='canonical' href='https://chiangmai-beauty-clinic.web.app/shop' />
      </Helmet>

        <div className="shop-single padding-tb aside-bg">
          <div className="container">
            <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
                <article>
                  <div className="product-details">
                    <div className="row align-items-center">     
                    <div className="col-md-6 col-12">
                      <div className="product-thumb">
                          <div className="swiper-container pro-single-top">

                          <Swiper 
                            spaceBetween={10}
                            slidesPerView={1}
                            loop={"true"}
                            autoPlay={{
                              delay: 2000,
                              disableOnInteraction: false
                            }}
                            modules={[Autoplay]}
                            navigation={ 
                              {
                                prevEl: ".pro-single-prev",
                                nextEl:".pro-single-next"
                              }
                            }
                          
                          className="my-swiper">
                            
                            {
                              result.map((item, i) =>
                              (
                                <SwiperSlide key={i} >
                                  <div className="single-thumb">
                                    <img src={item.img} alt=""></img>
                                    </div>
                                </SwiperSlide>
                              ))
                           }
                          </Swiper>
                          <div className="pro-single-next">
                            <i className="icofont-rounded-left"></i>
                          </div>
                          <div className="pro-single-prev">
                            <i className="icofont-rounded-right"></i>
                          </div>

                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-12">
                      <div className="post-content">
                        {
                          result.map(item => <ProductDisplay key={item.id} item={item} />)
                        }
                      </div>
                      </div>
                    </div>
                </div>
               
                <div className="review">
                  <Review/>
                </div>
                </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside className='ps-lg-4'>
              <PopularPost/>
              </aside>
            </div>
            </div>
          </div>
        </div>
      
    </div>

    
  )
}

export default SingleProd