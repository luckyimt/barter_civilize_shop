import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const subTitle = "เสริมจมูกเชียงใหม่";
const title = "Beauty Clinic For Everyone";
const btnText = "Visit";

const categoryList = [
{
imgUrl: '/images/category/01.jpg',
imgAlt: 'เสริมจมูกเชียงใหม่',
title: 'เสริมจมูก',
},
{
imgUrl: '/images/category/02.jpg',
imgAlt: 'แก้จมูกเชียงใหม่',
title: 'แก้จมูก',
},
{
imgUrl: '/images/category/03.jpg',
imgAlt: 'เสริมคางเชียงใหม่',
title: 'เสริมคาง',
},
{
imgUrl: '/images/category/04.jpg',
imgAlt: 'แก้คางเชียงใหม่',
title: 'แก้คาง',
},
{
imgUrl: '/images/category/05.jpg',
imgAlt: 'ฌบท็อก ฟิลเลอร์ เชียงใหม่',
title: 'โบท็อก',
},
{
imgUrl: '/images/category/06.jpg',
imgAlt: 'ปากกระจับเชียงใหม่',
title: 'ปากกระจับ',
},
]

const HomeCategory = () => {
    return (
        
        <div className="category-section style-4 padding-tb" >
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">เลือกเสริมจมูกที่ศิวิไลคลินิกเลือกเสริมจมูกกับ ศิวิไล คลินิก</span>
                    <h1>{title}</h1>
                    
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
                        {
                            categoryList.map((vol, i) => (<div key={i} className="col">
                            <Link to="/shop" className="category-item">
                                    <div className="category-inner">
                                        <div className="category-thumb">
                                            <img src={vol.imgUrl} alt="" width={400} height={400 } />
                                        </div>
                                       
                                    </div>
                                    
                         </Link>
                        </div>))
                        }
                    </div>
                    <div className="text-center mt-5">
                        <Link to="/shop" className="lab-btn"><span>{ btnText }</span></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomeCategory;