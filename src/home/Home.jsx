import React from 'react';
import HomeCategory from './HomeCategory';
import CategoryShowCase from '../components/CategoryShowCase';
import AboutUs from './AboutUs';
import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    
    <div>
      <Helmet>
       <title>เสริมจมูกเชียงใหม่ใกล้บ้าน</title>
       <meta name='description' content='เกี่ยวกับเสริมจมูกเชียงใหม่ เสริมจมูกครั้งแรก เสริมจมูฏแบบ open ทรงสวย เปลี่ยนลุค ปรับโหงวเฮ้ง' />
       <link rel='canonical' href='https://chiangmai-beauty-clinic.web.app/' />
   </Helmet>
   
      <HomeCategory />
      <CategoryShowCase/>
    
      <AboutUs />
      
    </div>
  );
};

export default Home