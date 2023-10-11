import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Product from './components/Product'
import Contact from './components/Contact'
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout'
import Dashboard from './components/Dashboard';
import Login from './components/buttons/Login';
import Signup from './components/buttons/Signup';
import { Condash } from './components/Condash';
import { Myorders } from './components/Myorders';
import Sidebar from './components/Sidebar';
import { Notifications } from './components/Notifications';
import { FAQ } from './components/FAQ';
import { Terms } from './components/Terms';
import { Privacy } from './components/Privacy';
import Feedback from './components/Feedback';
// import AdLogin from './components/AdLogin';
// import AdSignup from './components/AdSignup';
import InfiSlider from './components/HomePage/InfiSlider';
import Slider from './components/HomePage/Slider'
import AddWishlist from './components/AddWishlist';
import { UserProfile } from './components/UserProfile';
import AddProduct from './components/Admin/Product/AddProduct';
import EditProduct from './components/Admin/Product/EditProduct';
import ViewProduct from './components/Admin/Product/ViewProduct';


function App() {
  return (
    <div >
      <BrowserRouter>
     {/* <Slider/> */}
     {/* <Routes>
     <Route exact path="/adlogin" element={<AdLogin/>}/>
     <Route exact path="/adsignup" element={<AdSignup/>}/>
     </Routes> */}
      <Routes> 
        <Route exact path="/" element={<><Header/><Home/><Footer/></>} />
        <Route exact path="/products" element={<><Header/><Product/></>} />
        <Route exact path="/products/:id" element={<><Header/><ProductDetail/></>} />
        <Route exact path="/cart" element={<><Header/><Cart/></>} />
        <Route exact path='/wishlist' element={<><Header/>< AddWishlist/></>} />
        <Route exact path="/checkout" element={<><Header/><Checkout/></>} /> 
        <Route exact path="/dash" element = {<Dashboard/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element ={<Signup/>}/>
        <Route exact path="/checkout" element={<><Header/><Checkout/></>} /> 
        <Route exact path="/about" element={<><Header/><About/></>} />
        <Route exact path="/condash" element={<><Header/><Condash/></>} />
        <Route exact path="/myorders" element={<><Header/><Myorders/></>} />
        <Route exact path="/no" element={<><Header/><Notifications/></>} />
        <Route exact path='/feedback' element={<><Header/><Feedback /></>} />
        <Route exact path='/privacy' element={<Privacy />} />
        <Route exact path='/terms' element={<Terms />} />
        <Route exact path='/faq' element={<FAQ />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/userprofile' element={<UserProfile/>} />
        <Route exact path='/addproduct' element={<AddProduct/>} />
        <Route exact path='/editproduct' element={<EditProduct/>} />
        <Route exact path='/viewproduct' element={<ViewProduct/>} />
       </Routes>
      {/* <Footer/>  */}
      </BrowserRouter>
    </div>
  );
}

export default App;









// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer'
// import Home from './components/Home'
// import About from './components/About'
// import Product from './components/Product'
// import Contact from './components/Contact'
// import {  Route, Routes, BrowserRouter } from 'react-router-dom';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout'

// function App() {
//   return (
//       <BrowserRouter>
//     <div >
//       <Routes> 
//         <Route exact path="/" element={<><Header/><Home/></>} />
//         <Route exact path="/products" element={<><Header/><Product/></>} />
//         <Route exact path="/products/:id" element={<><Header/><ProductDetail/></>} />
//         <Route exact path="/cart" element={<><Header/><Cart/></>} />
//         {/* <Route exact path="/checkout" element={<><Header/><Checkout/></>} /> */}
//         <Route exact path="/about" element={<><Header/><About/></>} />
//         {/* <Route exact path="/contact" element={<><Header/><Contact/></>} />  */}
//       </Routes>
//       <Footer/>
//     </div>
//       </BrowserRouter>
//   );
// }

// export default App;







// import React , {useState} from 'react';
// import Navbar from './components/Navbar';
// import Amazon from './components/Amazon';
// import Cart from './components/Cart';
// import '../src/assets/Amazon.css'

// const App = () => {
// 	const [show, setShow] = useState(true);
// 	const [cart , setCart] = useState([]);
// 	const [warning, setWarning] = useState(false);

// 	const handleClick = (item)=>{
// 		let isPresent = false;
// 		cart.forEach((product)=>{
// 			if (item.id === product.id)
// 			isPresent = true;
// 		})
// 		if (isPresent){
// 			setWarning(true);
// 			setTimeout(()=>{
// 				setWarning(false);
// 			}, 2000);
// 			return ;
// 		}
// 		setCart([...cart, item]);
// 	}

// 	const handleChange = (item, d) =>{
// 		let ind = -1;
// 		cart.forEach((data, index)=>{
// 			if (data.id === item.id)
// 				ind = index;
// 		});
// 		const tempArr = cart;
// 		tempArr[ind].amount += d;
		
// 		if (tempArr[ind].amount === 0)
// 			tempArr[ind].amount = 1;
// 		setCart([...tempArr])
// 	}

//   return (
// 	<React.Fragment>
// 		<Navbar size={cart.length} setShow={setShow} />
// 		{
// 			show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
// 		}
// 		{
// 			warning && <div className='warning'>Item is already added to your cart</div>
// 		}
// 	</React.Fragment>
//   )
// }

// export default App
