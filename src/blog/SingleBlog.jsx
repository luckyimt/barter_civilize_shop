import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PopularPost from '../shops/PopularPost';
import { Helmet } from 'react-helmet-async';


const socialList = [
    {
    link: "#",
    iconName: "icofont-facebook",
    className: "facebook",
    },
    {
    link: "#",
    iconName: "icofont-twitter",
    className: "twitter",
    },
    {
    link: "#",
    iconName: "icofont-linkedin",
    className: "linkedin",
    },
    {
    link: "#",
    iconName: "icofont-instagram",
    className: "instagram",
    },
    {
    link: "#",
    iconName: "icofont-pinterest",
    className: "pinterest",
    },
    ];
const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams();

    const result = blog.filter((b) => b.id === Number(id));
    

  return (
      <div>
           <Helmet>
            <title>หน้าบทความการเสริมจมูก</title>
            <meta name='description' content='บทความการเสริมจมูกของศิวิไลคลินิก เสริมจมูกถูกหลักโหวงเฮ้ง' />
        <link rel='canonical' href='https://chiangmai-beauty-clinic.web.app/blog' />
      </Helmet>

          <div className="blog-section blog-single padding-tb section-bg">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-lg-8 col-12">
                          <article>
                              <div className="section-wrapper">
                                  <div className="row row-cols-1 justify-content-center g-4">
                                      <div className="col">
                                          <div className="post-item style-2">
                                              <div className="post-inner">
                                                  {result.map((item) => (
                                                      <div key={item.id}>
                                                          <div className="post-thumb">
                                                              <img
                                                                  src={item.imgUrl}
                                                                  alt=""
                                                                  width={400}
                                                                  height={400}
                                                              >
                                                              </img>
                                                          </div>
                                                          
                                                              <div className="post-content">
                                                                  <h1>{item.title}</h1>
                                                                  <div className="meta-post">
                                                                  <ul className="lab-ul">
                                                                          {
                                                                              item.metaList.map((val, i) => (
                                                                                  <li key={i} >
                                                                                      <i className={val.iconName}></i>
                                                                                      {val.text}
                                                                                  </li>
                                                                              ))
                                                                      }     
                                                                  </ul>
                                                                  
                                                              </div>

                                                              <blockquote>
                                                                  <p>{item.desc}</p>
                                                              </blockquote>



                                                              <div className="tags-section">
                                                                  <ul className="tags lab-ul">
                                                                      <li>
                                                                          <a href="#">Agency</a>
                                                                      </li>
                                                                      <li>
                                                                          <a href="#">Business</a>
                                                                      </li>
                                                                      <li>
                                                                          <a href="#">Personal</a>
                                                                      </li>
                                                                  </ul>

                                                                  <ul className="lab ul social-icons">
                                                                      {
                                                                          socialList.map((val, i) => (
                                                                              <li key={i}>
                                                                                  <a href="#">
                                                                                      <i className={val.iconName}>
                                                                                          {val.className}
                                                                                      </i>
                                                                                  </a>
                                                                              </li>
                                                                          ))

                                                                      }
                                                                  </ul>
                                                              </div>
                                                              </div>
                                                      </div>
                                                      ))
                                                  }
                                              </div>
                                          </div>
                                          <div className="navigations-part">
                                              <div className="left">
                                                  <a href="#" className="prev">
                                                      <i className="icofont-double-left"></i>
                                                      Previous Blog
                                                  </a>
                                                  
                                              </div>
                                              <div className="right">
                                                  <a href="#" className="next">
                                                  Next Blog<i className="icofont-double-right"></i>
                                                      
                                                  </a>
                                                 
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </article>
                      </div>
                      <div className="col-lg-4 col-12">
                          <aside>
                              <PopularPost/>
                          </aside>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default SingleBlog