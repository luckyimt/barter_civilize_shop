import React from 'react'
import { Link } from 'react-router-dom';
const title      = "เกี่ยวกับ civilize";
const desc       = "คลินิกเสริมความงามเชียง เสริมจมูก เสริมคาง ตา2ชั้น ร้อยไหม โบท็อกฟิลเลอร์ วิตามิน แก้จมูก แก้คาง ราคาเริ่มต้น ฿12,000";
const ItemTitle  = "Categories";
const quickTitle = "Quick Links";
const tweetTitle = "Recent Tweets";


const addressList= [
    {
        iconName: 'icofont-google-map',
        text: 'Ptt San Sai Chiang-mai',
    },
    {
        iconName: 'icofont-phone',
        text: '+66 61-6439222',
    },
    {
        iconName: 'icofont-envelope',
        text: 'sivilai@gmail.com',
    },
]

const socialList = [
    {
        iconName:  'icofont-facebook',
        siteLink:  '#',
        className: 'facebook',
    },
    {
        iconName: 'icofont-instagram',
        siteLink: '#',
        className: 'instagram',
    }
]

const ItemList = [
    {
        text: 'All Products',
        link: '/shop',
    },
    {
        text: 'Shop',
        link: '/shop',
    },
    {
        text: 'Blog',
        link: '/blog',
    },
    {
        text: 'About',
        link: '/about',
    },
    {
        text: 'Policy',
        link: '#',
    },
    {
        text: 'FAQs',
        link: '/about',
    }
]

const quickList = [
    {
        text: 'เสริมจมูก',
        link: '#',
    },
    {
        text: 'แก้จมูก',
        link: '#',
    },
    {
        text: 'เสริมคาง',
        link: '#',
    },
    {
        text: 'แก้คาง',
        link: '#',
    },
    {
        text: 'โบท็อกฟิลเลอร์',
        link: '#',
    },
    {
        text: 'ร้อยไหม',
        link: '#',
    },
    {
        text: 'ตา2ชั้น',
        link: '#',
    },
    {
        text: 'ปากกระจับ',
        link: '#',
    },

]

const tweetList =
    [
    {
        iconName: 'icofont-twitter',
        desc: "ใส่โค้ด newmember13 ลด15%"
    },
    {
        iconName: 'icofont-twitter',
        desc: "ดีมากคุณภาพดีเยี่ยม"
    },
]

const footerbottomList = [
    {
        text: 'facebook',
        link: '/shop',
    },
    {
        text: 'Instagram',
        link: '/shop',
    },
    {
        text: 'Tiktok',
        link: '/shop',
    },
    {
        text: 'Youtube',
        link: '/shop',
    },
]

const Footer = () => {

    return (
        
        <footer className="style-2">
            
            <div className="footer-top padding-tb">            
                <div className="container">
                    <div className="row g-4 row-cols-xl-4 row-cols-sm-1 row-cols-md-2 justify-content-center">
                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h2>{title}</h2>
                                        </div>
                                        <div className="content">
                                            <p>{desc}</p>
                                            <ul className="lab-ul office-address">
                                                {
                                                    addressList.map((val, i) => (
                                                        <li key={i}>
                                                            <i className={val.iconName} width={50} height={50} >{val.text}</i>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                            {/* <ul className="lab-ul social-icons">
                                                {
                                                    socialList.map((val, i) => (
                                                        <li key={i}>
                                                            <a href="/shop" className={val.className}><i className={val.iconName}>{val.text}</i></a>
                                                        </li>
                                                    ))
                                                }
                                            </ul> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                  
                        </div>

                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h3>{quickTitle}</h3>
                                        </div>
                                        <div className="content">

                                            <ul className="lab-ul office-address">
                                                {
                                                    quickList.map((val, i) => (
                                                        <li key={i}>

                                                            <a href="/shop" ><i className={val.iconName} width={50} height={50 }>{val.text}</i></a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                     
                        </div>

                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h3>{ItemTitle}</h3>
                                        </div>
                                        <div className="content">

                                            <ul className="lab-ul office-address">
                                                {
                                                    addressList.map((val, i) => (
                                                        <li key={i}>
                                                            <i className={val.iconName} width={50} height={50 }>{val.text}</i>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                 
                        </div>

                        <div className="col">
                            <div className="footer-item our-address">
                                <div className="footer-inner">
                                    <div className="footer-content">
                                        <div className="title">
                                            <h3>{tweetTitle}</h3>
                                        </div>
                                        <div className="content">

                                            <ul className="lab-ul office-address">
                                                {
                                                    tweetList.map((val, i) => (
                                                        <li key={i}>
                                                            <i className={val.iconName} width={50} height={50 }>{val.desc}</i>
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
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="section-wrapper">
                        <p>&copy; 2024 <Link to="/">shop cart</Link>Designed by <a href="/" target="_blank">XYZ</a></p>
                        <div className="footer-bottom-list">
                            {
                                footerbottomList.map((val, i) => (
                                    <a href="/" key={i} >{val.text}</a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer