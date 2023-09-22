import React from 'react'
import { Link } from 'react-router-dom';


const Signup = () => {
    
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Register
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-google me-2"></span> Sign up With Google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className="fa fa-facebook me-2"></span> Sign up With Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInput" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <Link to ="/login">
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Register</button>
                                </Link>
     
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup










// import React from 'react'
// import { useState } from 'react'
// import { Link,useNavigate } from 'react-router-dom'
// function Register() { 
//   const navigate = useNavigate()
//   const [formdata, setFormdata] = useState({
//     username: '',
//     email: '',
//     phone: '',
//     password: ''
//   })
//   const handleChange = (e) => {
//     setFormdata({ ...formdata, [e.target.id]: e.target.value })
//   }

//   const handleSubmit = (e)=>{
//     e.preventDefault();

//     navigate('/')
//   }


//   return (
//     <>
//       <div className='auth-container'>
//         <div className='auth-wrapper'>
//           <form className='auth-form app-x-shadow' onSubmit={handleSubmit}>
//             <h1 className='auth-heading'>Registration Form</h1>
//               <input type="text" name="username" id="username" value={formdata.username} placeholder='username' onChange={handleChange} className='auth-field' required />
//               <input type="email" name="email" id="email" value={formdata.email} placeholder='email' onChange={handleChange} className='auth-field' required />
//               <input type="number" name="phone" id="phone" value={formdata.phone} placeholder='phone' onChange={handleChange} className='auth-field' required />
//               <input type="password" name="password" id="password" value={formdata.password} placeholder='password' onChange={handleChange} className='auth-field' required />
//               <button type='submit' className='auth-btn app-x-shadow'> Register </button>
//           </form>

//           <Link to='/' className='auth-links'>Login</Link>
//         </div>
//       </div>

//     </>
//   )
// }

// export default Register







