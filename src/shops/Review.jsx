
import React, { useState } from 'react'
import Rating from '../components/Rating'
const ReviewTitle = "Add a Review";

let ReviewList = [
    {
      imgUrl: "/images/instructor/01.jpg",
      imgAlt: "Client thumb",
      name: "Ganelon Boileau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/images/instructor/02.jpg",
      imgAlt: "Client thumb",
      name: "Morgana Cailot",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/images/instructor/03.jpg",
      imgAlt: "Client thumb",
      name: "Telford Bois",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
      imgUrl: "/images/instructor/04.jpg",
      imgAlt: "Client thumb",
      name: "Cher Daviau",
      date: "Posted on Jun 10, 2022 at 6:57 am",
      desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
  ];
const Review = () => {

    const [reviewShow, setReviewShow] = useState(true);
    return (
      <>
      <ul className={`review-nav lab-ul ${reviewShow? "RevActive":"DescActive"}`}>
          <li className='desc' onClick={()=>setReviewShow(!reviewShow)}>
              Description
          </li>
          <li className='rev' onClick={()=>setReviewShow(!reviewShow)}>
              Review
          </li> 
      </ul>
      
      <div className={`review-content ${reviewShow ? "review-content-show":"description-show"}`}>
        <div className="review-showing">
                <ul className='content lab-ul'>

                    {ReviewList.map((review, i) => (
                        <li key={i}>
                            <div className='post-thumb'>
                                <img src={review.imgUrl} alt=""/>
                            </div>
                            <div className="post-content">
                                <div className="entry-meta">
                                    <div className="posted-on">
                                        <a href="#">{review.name}</a>
                                        <p>{review.date}</p>
                                        <Rating/>

                                    </div>
                                </div>
                                <div className="entry-content">
                                    <p>{review.desc}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{ReviewTitle}</h5>
                            </div>

                            <form action="action" className='row'>
                                <div className="col-md-4 col-12">
                                <input type="text" name="name" id="name" placeholder='Full Name'/>
                                </div>
                                <div className="col-md-4 col-12">
                                <input type="email" name="email" id="name" placeholder='Your Email'/>
                                </div>
                                <div className="col-md-4 col-12">
                                    <div className="rating">
                                        <span className='me-2'>Your Rating</span>
                                        <Rating/>
                                    </div>
                                </div>
                                <div className="col-md-12 col-12">
                                    <textarea name="message" id="message" placeholder="type Here A Message" rows="8"></textarea>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="default-button">

                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
                <div className="description">
                    <p>
                        nthusiast build innovativ initiatives before lonterm high-impact awesome theme 
                        nthusiast build innovativ initiatives before lonterm high-impact awesome theme 
                        nthusiast build innovativ initiatives before lonterm high-impact awesome theme 
                        nthusiast build innovativ initiatives before lonterm high-impact awesome theme 
                    </p>
                    <div className="post-item">
                        <div className="post-thumb">
                            <img src="/images/shop/01.jpg"></img>
                        </div>
                        <div className="post-content">
                            <ul className="lab-ul">
                                <li> nthusiast build innovativ initiatives before lonterm high-impact awesome theme </li>
                                <li> nthusiast build innovativ initiatives before lonterm high-impact awesome theme </li>
                                <li> nthusiast build innovativ initiatives before lonterm high-impact awesome theme </li>
                                <li> nthusiast build innovativ initiatives before lonterm high-impact awesome theme </li>
                                <li> nthusiast build innovativ initiatives before lonterm high-impact awesome theme </li>
                            </ul>
                        </div>
                        <p>
                        nthusiast build innovativ initiatives before lonterm high-impact awesome theme 
                        nthusiast build innovativ initiatives before lonterm high-impact awesome theme 
                        nthusiast build innovativ initiatives before lonterm high-impact awesome theme 
                        nthusiast build innovativ initiatives before lonterm high-impact awesome theme 
                    </p>
                    </div>
                </div>
            </div>
         </>
  )
}

export default Review