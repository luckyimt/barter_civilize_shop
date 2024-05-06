import React from 'react'
import { Link } from 'react-router-dom'
import blogList from '../utilis/blogdata'
import { Helmet } from 'react-helmet-async'
const Blog = () => {
  return (
    <div>
        <Helmet>
            <title>เสริมจมูกในแบบของเรา</title>
            <meta name='description' content='การเสริมจมูกของเรา เสริมจมูกใยแบบของเรา ตเองการเสริมจมูกตัวเอง อยากเสริมจมูก เสริมจมูกกับใครดี เสริมจมูกที่ไหนดี' />
        <link rel='canonical' href='https://chiangmai-beauty-clinic.web.app/blog' />
      </Helmet>
        <div className="blog-section padding-tb section-bg">
        <div className="container">
          <div className="section-wrapper">
          <div>
                  <h1>บทความเกี่ยวกับคลินิกศิวิไลของเรา</h1>
            </div> {
              <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
             
                
                {
                  blogList.map((blog, i) => (
                    <div className="col" key={i}>
                      <div className="post-item">
                        <div className="post-inner">
                          <div className="post-thumb">
                            <Link to={`/blog/${blog.id}`}><img src={blog.imgUrl} width={400} height={400} alt="ศิวิไลคลินิก เสริมจมูกเชียงใหม่"></img></Link>
                          </div>
                          <div className="post-content">
                            <Link to={'/blog/${blog.id}'}><h2>{blog.title}</h2></Link>
                            <div className="meta-post">
                              <ul className="lab-ul">
                                {blog.metaList.map((val, i) => (
                                  <li key={i}><i className={val.iconName} width={50} height={50}></i>{val.text}</li>
                                ))}
                              </ul>
                            
                            </div>
                            <p>{blog.desc}</p>
                          </div>
                          <div className="post-footer">
                            <div className="pf-left">
                              <Link to={`/blog/${blog.id}`} className="lab-btn-text">
                                {blog.btnText}
                                <i className="icofont-external-link" width={50} height={50}>
                                </i>
                              </Link>
                            </div>
                            <div className="pf-right">
                              <i className="icofont-comment">
                                <span className="comment-count">
                                  {blog.commentCount}
                                </span>
                              </i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
              
                } </div>
            }</div>
        </div>
        </div>
      </div>
  )
}

export default Blog