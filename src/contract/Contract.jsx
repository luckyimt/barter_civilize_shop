import React from 'react'
import GoogleMap from '../components/GoogleMap';
import { Helmet } from 'react-helmet-async';

const subTitle = "ติดต่อเราเพื่อรับสิทธิ พิเศษ";
const title = "เรายินดีให้คำปรึกษา ฟรี";
const conSubTitle = "ติดต่อเรา";
const conTitle =
"ส่งฟอร์มให้เรารู้ว่าคุณกำลังคิดอะไรอยู่";
const btnText = "ส่งข้อความ";

const contactList = [
{
imgUrl: "/src/assets/images/icon/01.png",
imgAlt: "contact icon",
title: "Office Address",
desc: "ปตท.สันทรายน้อย อ.สันทราย จ.เชียงใหม่ ",
},
{
imgUrl: "/src/assets/images/icon/02.png",
imgAlt: "contact icon",
title: "Phone number",
desc: "061-6439222",
},
{
imgUrl: "/src/assets/images/icon/03.png",
imgAlt: "contact icon",
title: "Send email",
desc: "firstsivilai@gmail.com",
},
{
imgUrl: "/src/assets/images/icon/04.png",
imgAlt: "contact icon",
title: "Our website",
desc: "www.civilizeclinic.com",
},
];
const Contract = () => {
  return (
      <div>
          <Helmet>
              <title>ติดต่อเสริมจมูกเชียงใหม่</title>
              <meta name='description' content='ติดต่อเสริมจมูก โทรคลิินิกเสริมจมูก เสริมจมูกกัยเรา ติดต่อเราเสริมจมูก อยากสเสริมจมูก' />
              <link rel='canonical' href='https://chiangmai-beauty-clinic.web.app/contrac/' />

          </Helmet>
          <div className="map-address-section padding-tb section-bg">
              <div className="container">
                  <div><h1>ติดต่อเราศิวิไลคลิกนิกยินดีให้บริการ</h1></div>
                  <div className="section-header text-center">
                      <span className="subtitle">{subTitle}</span>
                      <h2 className="title">{title}</h2>
                  </div>
                  <div className="section-wrapper">
                      <div className="row flex-row-reverse">
                          <div className="col-xl-4 col-lg-5 col-12">
                              <div className="contact-wrapper">
                                  {
                                      contactList.map((val, i) => (
                                          <div key={i} className="contact-item">
                                              <div className="contact-thumb">
                                                  <img src={val.imgUrl} alt=""  width={300} height={300}/>
                                              </div>
                                              <div className="contact-content">
                                                  <h3 className="title">{val.title}</h3>
                                                  <h3 className="desc">{val.desc}</h3>
                                              </div>
                                          </div>
                                      ))
                                  }
                              </div>
                          </div>

                          <div className="col-xl-8 col-lg-7 col-12">
                              <GoogleMap/>
                        </div>

                      </div>
                  </div>
              </div>
          </div>
          <div className="contact-section padding-tb">
              <div className="container">
                  <div className="section-header text-center">
                      <span className="subtitle">
                          {conSubTitle}
                      </span>
                      <h3 className="title">{conTitle}</h3>
                  </div>
                  <div className="section-wrapper">
                      <form className="contact-form">
                          <div className="form-group">
                              <input type="text" name="name" id="name" placeholder="ชื่อ" />
                          </div>
                          <div className="form-group">
                              <input type="email" name="email" id="email" placeholder="อีเมลล์" />
                          </div>
                          <div className="form-group">
                              <input type="number" name="number" id="number" placeholder="เบอร์โทร" />
                          </div>
                          <div className="form-group">
                              <input type="text" name="subject" id="subject" placeholder="ชื่อเรื่อง" />
                          </div>
                          <div className="form-group w-100">
                              <textarea name="message" id="message" rows="10" placeholder="ระบุข้อความ"></textarea>
                          </div>
                          <div className="form-group w-100 text-center">
                              <div className="lab-btn">
                                  <span>{ btnText}</span>
                              </div>
                          </div>

                      </form>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Contract