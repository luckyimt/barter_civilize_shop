import { React, useState } from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';
const title = "เสริมจมูกเชียงใหม่";

const ProductData = [
{
imgUrl: '/images/categoryTab/01.jpg',
cate: 'เสริมจมูก',
title: 'เสริมจมูก',
brand: 'Takinu',
price: '฿12,000',
id: 1,
},
{
imgUrl: '/images/categoryTab/02.jpg',
cate: 'เสริมจมูก',
title: 'เสริมจมูกตัดปีก',
brand: 'Nabuko',
price:  '฿16,000',
id: 2,
},
{
imgUrl: '/images/categoryTab/03.jpg',
cate: 'เสริมคาง',
title: 'เสริมคาง',
brand: 'Ubata',
price:  '฿12,000',
id: 3,
},
{
imgUrl: '/images/categoryTab/04.jpg',
cate: 'เสริมคาง',
title: 'เสริมจมูก แก้คาง',
brand: 'Jikko',
price:  '฿18,000',
id: 4,
},
{
imgUrl: '/images/categoryTab/05.jpg',
cate: 'ตา2ชั้น',
title: 'ตา2ชั้น',
brand: 'Akiko',
price:  '฿12,000',
id: 5,
},
{
imgUrl: '/images/categoryTab/06.jpg',
cate: 'ปากกระจับ',
title: 'ปากกระจับ',
brand: 'Inosent',
price: '$12,000',
id: 6,
},
{
imgUrl: '/images/categoryTab/07.jpg',
cate: 'ร้อยไหม',
title: 'ร้อยไหม',
brand: 'Gluta',
price:  '฿12,000',
id: 7,
},
{
imgUrl: '/images/categoryTab/08.jpg',
cate: 'โบท็อกฟิลเลอร์',
title: 'โบท็อก ฟิลเลอร์',
brand: 'Gluta',
price:  '฿12,000',
id: 8,
},
]
const CategoryShowCase = () => {
    const [items, setItems] = useState(ProductData);
    const filterItem = (categItem) => {
        const updateItem = ProductData.filter((curElem) => {
            return curElem.cate === categItem;
        });
        setItems(updateItem);
        
    }
    return (
        <div className="course-section style-3 padding-tb">

            <div className="container">
                <div className="section-header">
                    <h1 className="title">{title}</h1>
                    <h2>reviews</h2>
                <div className="course-filter-group">
                    <ul className="lab-ul">
                        <li onClick={() => setItems(ProductData)}>All</li>
                        <li onClick={() => filterItem("เสริมจมูก")}>เสริมจมูก</li>
                        <li onClick={() => filterItem("เสริมคาง")}>เสริมคาง</li>
                        <li onClick={() => filterItem("ร้อยไหม")}>ร้อยไหม</li>
                            <li onClick={() => filterItem("ปากกระจับ")}>ปากกระจับ</li>
                            <li onClick={() => filterItem("โบท็อกฟิลเลอร์")}>โบทอกฟิลเลอร์</li>


                    </ul>
                    </div>
                </div>
                <div className="section-wrapper">
                    <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-md-2 row-cols-1 course-filter">
                        {items.map((product) => (
                            <div key={product.id} className="col">
                            <div className="course-item style-4">
                                <div className="course-inner">
                                    <div className="course-thumb">
                                        <img src={product.imgUrl} alt="" width={400} height={400 }></img>

                                        </div>
                                        
                                    <div className="course-content">
                                    <Link to="/shop"><h3>{product.title}</h3></Link>
                                    <div className="course-footer">
                                        <div className="course-author"></div>
                                                <Link to="/shop" className="ca-name">
                                                    <h4>{product.brand}</h4></Link>
                                  
                                    <div className="course-price">
                                        <h5>{product.price}</h5>
                                    </div>
                                            </div>
                                            </div>
                                </div>
                               
                            </div>
                        </div>))}
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default CategoryShowCase