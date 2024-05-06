import { useState , useContext} from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png";
import "../index.css"
import { AuthContext } from '../context/AuthProvider';
const NavItems = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFixed, setHeaderFixed] = useState(false);


    const { user } = useContext(AuthContext)
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFixed(true);
        } else {
            setHeaderFixed(false)
        }
    })
    return (
        <header className={`header-section style-4 ${headerFixed ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
                <div className="container">
                     {/* <div className="header-top-area">
                                <Link to="/signup" className="lab-btn"><span>Create Account</span></Link>
                                <Link to="/login" className="lab-btn"><span>Login</span></Link>
                            </div> */}
                </div>
            </div>

            <div className='header-bottom'>
                <div className='container'>
                    <div className='header-wrapper'>

                        {/* <div className='logo-search-acte'>
                            <div className='logo'>
                                <Link to={"/"}>
                                    <img src={logo} alt="" width={150}   />
                                </Link>
                            </div>
                        </div> */}

                        <div className='menu-area'>
                                    <a href="/">Home</a>
                                    <a href="/shop">Shop</a>
                                    <a href="/blog">Blog</a>
                                    <a href="/about">About</a>
                            <a href="/contract">Contact</a> 
                            <a href="https://civilizeclinic-plastic-surgeon.web.app">Civilization</a>  

                            {/* <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">Create Account</Link>
                            <Link to="/login" className="lab-btn d-none d-md-block">Log in</Link> */}


                            {/* <div onClick={()=> setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                            </div> */}


                            {/* <div className="ellepsis-bar d-md-none" onClick={()=>setSocialToggle(!socialToggle)}>
                                <i className="icofont-info-square"></i>
                            </div> */}
                            {/* {sing in and login} */}
                        </div>
                    </div>
                </div>
            </div>
      </header>
  )
}

export default NavItems