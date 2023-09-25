import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { selectUser } from '../redux/userSlice'
import { selectCart } from '../redux/cartSlice'

const Header = () => {
    const cart = useSelector(selectCart);
    const user = useSelector(selectUser);
    return (
       <div className='header123'>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a class="navbar-brand fw-bold fs-4" href="#">
                        ZEN MART
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        <div>
                            {user != null ? (<div className='nav-lrc'><p>{user.username}</p><CartBtn/></div> ) : (<div className='nav-lrc'>
                                <Login/>
                    <Signup/>
                    <CartBtn/>
                            </div>)}
                        </div>
                        
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Header









// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import CartBtn from './buttons/CartBtn'
// import Login from './buttons/Login'
// import Signup from './buttons/Signup'
// import {  useSelector } from 'react-redux/es/hooks/useSelector';
// import { selectUser } from '../redux/userSlice'

// const Header = () => {
//     const user = useSelector(selectUser);
//     return (
//        <div className='header123'>
//        <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container">
//                     <a class="navbar-brand fw-bold fs-4" href="#">
//                         CustoGifts
//                     </a>

//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/products">Product</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/about">About</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/contact">Contact</NavLink>
//                             </li>
//                         </ul>
//                         <div>
//                             {user != null ? (<div className='nav-lrc'><p>{user.username}</p><CartBtn/></div> ) : (<div className='nav-lrc'>
//                                 <Login/>
//                     <Signup/>
                    
//                             </div>)}
//                         </div>
                        
//                     </div>
//                 </div>
//             </nav>

//         </div>
//     )
// }
// export default Header















// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import CartBtn from './buttons/CartBtn'
// import Login from './buttons/Login'
// import Signup from './buttons/Signup'

// const Header = () => {
//     return (
//        <div>
//        <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container">
//                     <a class="navbar-brand fw-bold fs-4" href="#">
//                         CustoGifts
//                     </a>

//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/products">Product</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/about">About</NavLink>
//                             </li>
//                             <li className="nav-item">
//                                 <NavLink className="nav-link" to="/contact">Contact</NavLink>
//                             </li>
//                         </ul>
//                     <Login/>
//                     <Signup/>
//                     <CartBtn/>
//                     </div>
//                 </div>
//             </nav>

//         </div>
//     )
// }
// export default Header

           









          //   <nav class="navbar navbar-expand-lg bg-body-tertiary">
          //   <div class="container-fluid">
          //     <a class="navbar-brand" href="#">Navbar</a>
          //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          //       <span class="navbar-toggler-icon"></span>
          //     </button>
          //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
          //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          //         <li class="nav-item">
          //           <a class="nav-link active" aria-current="page" href="#">Home</a>
          //         </li>
          //         <li class="nav-item">
          //           <a class="nav-link" href="#">Link</a>
          //         </li>
          //         <li class="nav-item dropdown">
          //           <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          //             Dropdown
          //           </a>
          //           <ul class="dropdown-menu">
          //             <li><a class="dropdown-item" href="#">Action</a></li>
          //             <li><a class="dropdown-item" href="#">Another action</a></li>
          //             <li><hr class="dropdown-divider"/></li>
          //             <li><a class="dropdown-item" href="#">Something else here</a></li>
          //           </ul>
          //         </li>
          //         <li class="nav-item">
          //           <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          //         </li>
          //       </ul>
          //       <form class="d-flex" role="search">
          //         <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          //         <button class="btn btn-outline-success" type="submit">Search</button>
          //       </form>
          //     </div>
          //   </div>
          // </nav>