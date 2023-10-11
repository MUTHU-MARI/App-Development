import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { userRegister } from '../../service/api';
const Signup = () => {
    
    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password:'',
        role:'CUSTOMER'
    });

    const handleChange = (e) => {
        setSignup({ ...signup, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await userRegister(signup);
        if (res.data === "User registered successfully" && res.status==200) {
            toast.success(`Signup Successfull !`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setTimeout(() => {
                navigate('/');
            }, 1500);

        } 
         else if (res.data === "Something went wrong!" && res.status==="400") {
            console.log(res.data);
            toast.error(`Something went wrong!`, {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };
   
    const handlegoogle = () =>
    {
      window.location.href="https://www.google.com";
    };
    
    const handlefb = () =>
    {
      window.location.href="https://www.facebook.com";
    };
   
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-outline-primary ms-2" data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className="fa fa-user-plus me-1"></span> Signup
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Signup</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-40 mr-4 " onClick={handlegoogle}>
                                <span className="fa fa-google me-2"></span> Sign up With Google
                            </button>
                            <button className="btn btn-primary w-40 ml-4" onClick={handlefb}>
                                <span className="fa fa-facebook me-2"></span> Sign up With Facebook
                            </button>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label" >Username</label>
                                    <input type="text" className="form-control" id="name" onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
                                    onChange={handleChange}
                                    />
                                   
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label" >Password</label>
                                    <input type="password" className="form-control" id="password" 
                                    onChange={handleChange}
                                    />
                                </div>
                                    
                                <button type="submit" className="btn btn-outline-primary w-20 mt-5 " >Register</button>
                                <ToastContainer/>
                             
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
// import '../../assets/Signup.css';
// import { useState } from "react";
// import {  Link,useNavigate } from "react-router-dom";
// import axios from "axios";
// import "react-toastify/dist/ReactToastify.css";
// import { toast, ToastContainer } from "react-toastify";

// export default function NewSignup() {


//   const [username, setUserName] = useState("");
//   const [email,setEmail] = useState("");
//   const [password, setPassword] = useState("");
 
//   const navigate = useNavigate();
  
//   const handleUserName = (e) => {
//     console.log(e);
//     setUserName(e.target.value);
// };

// const handleEmail = (e) => {
//       console.log(e);
//       setEmail(e.target.value);
//     };
    
//     const handlePassword = (e) => {
//       console.log(e);
//   setPassword(e.target.value);
//   };
 
 
//   const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(username,email,password);
//   if (username === "" ||password === ""||email==="") 
//   {
//   toast.error("Enter all fields");
//   } 
//   else {
 
//   axios.post("http://localhost:8080/savesignupdata",{
//   username: username,
//   email: email,
//   password: password,
//   })
//   .then((res) => {
//   console.log(res.data);
//   if(res.data===' signup successfull')
//   {
//       toast.success("signup sucess");
//      setTimeout(()=>
//      {
//          navigate("/login");
//      },2000) 
//   }
//   else if(res.data==='Email & Username already exist'){
//     toast.error("Email & Username already exist");
//    }
//    else if(res.data===' Email already exist'){
//    toast.error(" Email already exist");
//     }
//    else if(res.data===' Username already exist')
//    {
//      toast.error("Username already exist");
//    }
//   });
//   }
//   };
//   return (
//     <div className="tdx">
//     <div className='demologinbody'>
//     <div class="login_form_container1">
//     <ToastContainer
//     position="top-center"
//     autoClose={3000}
//     hideProgressBar={false}
//     newestOnTop={false}
//     closeOnClick
//     rtl={false}
//     pauseOnFocusLoss
//     draggable
//     pauseOnHover
//     theme="dark"
//   />
//       <div class="login_form">
//         <h2>Signup</h2>
//         <div class="input_group">
//           <i class="fa fa-user"></i>
//           <input
//             onChange={(handleUserName)}
//             type="text"
//             placeholder="Username"
//             class="input_text"
//             autocomplete="off"
//             required
//           />
//         </div>
//         <div class="input_group">
//           <i class="fa fa-email"></i>
//           <input
//             onChange={handleEmail}
//             type="text"
//             placeholder="Email"
//             class="input_text"
//             autocomplete="off"
//             required
//           />
//         </div>
//         <div class="input_group">
//           <i class="fa fa-unlock-alt"></i>
//           <input
//           onChange={handlePassword}
//           value={password}
//             type="password"
//             placeholder="Password"
//             class="input_text"
//             autocomplete="off"
//             required
//           />
//         </div>
        
//         <div onClick={handleSubmit} class="login_button" id="login_button">
//           <a>Submit</a>
//         </div>
//         <br/>
//         <h6 className="already_exist">
  
//     Already an existing user ? <Link to="/login" className="loginword" >Login</Link>
 
//   </h6>
          
//     </div>
//     </div>
//     </div>
//     </div>
//   )
// }



















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







