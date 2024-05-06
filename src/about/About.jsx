import React from 'react'
import { Helmet } from 'react-helmet-async';

const subTitle = "About Civilize Clinic";
const title = "บริการผ่านเกณฑ์ เพื่อมอบความประทับใจ";
const desc = "🧸🎀 🏮⛩️เปิดให้บริการแล้วค่ะ ใครที่อยากเติมความสวย อย่าลืมคลินิก ศิวิไล คุณหมอเฟิร์สนะคะ 👄🪆🪄สวย เก่ง เฮง รวย มั่นใจทุกมุมมอง มาหาหมอเฟิร์สสิคะ ปรึกษาปัญหาด้วยกัน เพราะคุณหมอมีทางออกให้เสมอค่ะ😊🪆🪄ไม่ว่าจะอยากสวยแบบไดดอลเกาหลี หรืออยากสวยแบบดารา นางแบบ หมอเฟิร์สเนรมิตรให้ค่ะ👄🎁🎀ต้องการลุคแบบไหน คุณหมอเฟิร์สออกแบบให้ออกมาตรงใจลูกค้าได้เลยนะคะ🎁🧸🎏🎎ด้วยประสบการณ์ด้านคลินิกเสริมความงามกว่า15ปี หมอเฟิร์สมีความรักใส่ใจลูกค้าทุกคนมาตลอด ด้วยใจบริการ⛩️🎎🌹หลังผ่าตัดหมอเฟิร์สมีคำแนะนำดีๆ ช่วยให้ลูกค้าสามารถดูแลให้แผลหายสนิท และออกมาสวยเนียบสุดๆไปเลยคะ👏👏❤️หมอเฟิร์สสามารถเนรมิตรใบหน้าของคุณให้ดูดีขึ้น อ่อนเยาว์ลง ถูกหลังโหงวเฮ้ง ประทับใจแน่นอนค่ะ❤️🥰🎐🪆ไม่ว่าจะเป็นปัญหา เรื่องจมูกไม่สวย เปลือกตาเหี่ยว แก้มย้อย หน้าผากเป็นรอยหยัก ตีนกาขึ้น หรือแม้แต่ไขมันส่วนเกิน 🪆🪄❤️คุณหมอเฟิร์สสามารถช่วยคุณได้🪆🌹🧸บริการที่น่าประทับใจ ราคาเบาๆสบายกระเป๋า มือเบามากๆ ทำให้ไม่เจ็บ ❤️🧸🌹🧸ออกแบบถูกหลักโหงวเฮ้งเสริมดวงรวยรับทรัพย์กันทุกคนค่ะ🥰❣️🙏หากไม่มั่นใจในลุ๊คของตัวเอง โทรมาปรึกษากับหมอเฟิร์สสิคะ ไม่มีค่าปรึกษาค่ะ สามารถโทรได้เลยนะ🎐🪆โทร 061-6439222🪆";

const year = "17+";
const expareance = "Years Of Experiences";

const aboutList = [
{
imgUrl: '/images/about/icon/01.jpg',
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Skilled Instructors',
desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
},
{
imgUrl: '/images/about/icon/02.jpg',
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Get Certificate',
desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
},
{
imgUrl: '/images/about/icon/03.jpg',
imgAlt: 'about icon rajibraj91 rajibraj',
title: 'Online Classes',
desc: 'Distinctively provide acces mutfuncto users whereas communicate leveraged services',
},
]
const About = () => {
    return (
        <div>
            
            <Helmet>
                <title>เกี่ยวกับการเสริมจมูกเชียงใหม่</title>
                <meta name='description' content='การเสริมจมูกเชียงใหม่ เสริมจมูกแบบopen เสริมจมูกครั้งแรก หรือ แก้จมูก คลินิกบริการเสริมจมูก อยากเสริมจมูก เสริมจมูกที่ไหนดี ' />
                <link rel='canonical' href='https://chiangmai-beauty-clinic.web.app/about' />

            </Helmet>
           
          <div className="about-section style-3 padding-tb section-bg">
              <div className="row justify-content-center row-cols-xl-2 row-cols-1 align-items-center">
                  
              <div>
                <h1>เกี่ยวกับเรา ศิวิไลคึลินิก เสริมจมูกจังหวัดเชียงใหม่</h1>
            </div>
              <div className="col">
                  <div className="about-left">
                      <div className="abs-thumb">
                                <img src="/images/about/customer.jpg" width={300} height={300} alt=""></img>
                      </div>
                      <div className="about-thumb">
                          <img src="/images/instructor/01.png"  width={700} height={700} alt=""></img>
                          </div>
                          <div className="about-left-content">
                              <h2>{year}</h2>
                              <p>{expareance}</p>
                          </div>
                  </div>    
                  </div>
                  
                  <div className="col">
                      <div className="about-right">
                          <div className="section-header">
                              <span className="subtitle">{subTitle}</span>
                              <h2 className="title">{title}</h2>
                              <p>{desc}</p>
                          </div>
                          <div className="section-wrapper">
                              <ul className="lab-ul">
                                  {
                                      aboutList.map((val, i) => (
                                          <li key={i} >
                                              <div className="sr-left">
                                                  <img src={val.imgUrl} alt="" width={50} height={50} />
                                              </div>
                                              <div className="sr-right">
                                                  <h2>{val.title}</h2>
                                                  <p>{val.desc}</p>
                                              </div>
                                          </li>
                                      ))
                                  }
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default About