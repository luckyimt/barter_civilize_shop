import React from 'react'
import { Link } from 'react-router-dom';

const title = "Posts";
const postList = [
    {
    id:1,
    imgUrl: '/images/blog/1.jpg',
    imgAlt: 'แก้จมูกเชียงใหม่',
    title: 'รีวิว แก้จมูกตัดปีก',
    date: 'Jun 05,2022',
    },
    {
    id:2,
    imgUrl: '/images/blog/2.jpg',
    imgAlt: 'ปากกระจับเชียงใหม่',
    title: 'รีวิวฉีดปากกระจับ',
    date: 'Jun 05,2022',
    },
    {
    id:3,
    imgUrl: '/images/blog/3.jpg',
    imgAlt: 'แก้จมูกเชียงใหม่',
    title: 'รีวิว แก้จมูกปลายเนื้อบาง ',
    date: 'Jun 05,2022',
    },
    {
    id:4,
    imgUrl: '/images/blog/4.jpg',
    imgAlt: 'ปากกระจับเชียงใหม่',
    title: 'รีวิว ฉีดปากกระจับ เต็มอิ่ม',
    date: 'Jun 05,2022',
    },
    ]

const PopularPost = () => {
  return (
      <div className="widget widget-post">
          <div className="widget-header">
              <h2 className="title">{title}</h2>
          </div>
         
          <div className='widget-wrapper'>
              {
                  postList.map((blog, i) => (
                      <li key={i} className="d-flex">
                          <div className="post-thumb">
                              <Link to={`/blog/${blog.id}`}>
                                  <img src={blog.imgUrl} alt="" width={400} height={ 400} />
                              </Link>
                            
                          </div>
                          
                          <div className="post-content">
                              <Link to={`/blog/${blog.id}`}>
                                  <h3>{blog.title}</h3>
                              </Link>
                              <p>{blog.date}</p>
                            
                          </div>
                          </li>
                  ))
              }
          </div>
      </div>
  )
}

export default PopularPost