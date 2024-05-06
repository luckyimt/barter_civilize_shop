import React , { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthProvider"

import { Link } from 'react-router-dom';

const title = "Register"
const socialTitle = "Register with Social Media"
const btnText = "Sign Up"

const Signup = () => {

  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail , createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
    
  const from = location.state?.from?.pathname || "/";

  const handleRegister = () => {
    signUpWithGmail().then((result) => {
      const user = result.user;
      navigate(from, { replace: true })
      .catch((error) => {
        const errorMsg = error.message;
        setErrorMessage("Please provide valid email and password")
      })
    })
  }
    
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password).then((userCredential) => {
            const user = userCredential.user;
            alert("Account added successfully")
            navigate(from,{replace: true})
        }).catch((error) => {
            alert(`${error.message}`);
       })
    }

    return (
        <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
                    <form className="account-form" onSubmit={handleSignUp}>
                    <div className="form-group">
                <input type="text" name="name" id="name" placeholder="Username" required />
                
              </div>
              <div className="form-group">
                <input type="email" name="email" id="email" placeholder="Email Address" required />
                
              </div>
              <div className="form-group">
                <input type="password" name="password" id="password" placeholder="Password" required />
                
              </div>

              {/* showing message */}
              <div>
                {
                  errorMessage && (
                    <div className="error-message text-danger">
                      {
                        errorMessage
                      }
                    </div>
                    
                  )
                }
              </div>
              
              <div className="form-group">
                  <button type="submit" className="d-block lab-btn">{btnText}</button>
                </div>
                    </form>
                    
            <div className="account-button">
              <span>
                Already have an Account?  <Link to="/login"> Login</Link>
              </span>
              <span className="or">Or</span>
              <h5 className='subtitle'>{socialTitle}</h5>
              <ul className='lab-ul social-icons justify-content-center'>
                <li>
                  <button className='github' onClick={handleRegister} ><i className='icofont-github'></i></button>
                  <a href="/" className='facebook' ><i className='icofont-facebook'></i></a>
                  <a href="/" className='twitter' ><i className='icofont-twitter'></i></a>
                  <a href="/" className='linkedin' ><i className='icofont-linkedin'></i></a>
                  <a href="/" className='instagram' ><i className='icofont-instagram'></i></a>

                </li>
              </ul>
            </div>
            

          </div>
        </div>
        </div>
  )
}

export default Signup