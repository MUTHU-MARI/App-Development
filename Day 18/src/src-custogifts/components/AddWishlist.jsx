import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
// import { addToWishlist } from '../redux/wishlistSlice';
import { addwishItem } from '../redux/actions';
import { addToWishlist,removeFromWishlist } from '../redux/wishlistSlice';
import wishItems from '../redux/reducers/wishItem';
import { ToastContainer, toast } from 'react-toastify';
import { selectWishlist } from '../redux/wishlistSlice';

const AddWishlist = ({ product }) => {
    const cartItems = useSelector(state=>state.Wishlist.items);
  console.log(cartItems);
  console.log(cartItems?.product);
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };
  const handleRemovewishlistItem = (itemId, itemName) => {
  dispatch(removeFromWishlist(itemId));

//   toast.success(`${itemName} removed from wishlist !`, {
  toast.success(`removed from wishlist !`, {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className='main'>
      {/* <Navbar /> */}
      {cartItems?.length === 0 ? (
        <div className='cart-empty shadow card'>
          <p Style="text-align:center; font-size:25px; font-family:popyrus">Your wishlist is empty</p>
          <img src={"https://i.pinimg.com/474x/81/c4/fc/81c4fc9a4c06cf57abf23606689f7426.jpg"} alt="login-img"  Style="width: 40wh; height: 80vh;"className='auth-svg' />
          {/* <img src={"data:image/png;base64,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"} alt="login-img"  Style="width: 10wh; height: 80vh;"className='auth-svg' /> */}
          {/* <img src={"data:image/png;base64,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"} alt="login-img"  Style="width: -9wh; height: 80vh;"className='auth-svg' /> */}
        </div>
      ) : (
        <div>
          <div className='cart-title-container'>
            <h1 className='cart-title primary'>Your Wishlist</h1>
            {/* <button className='cart-checkout-btn shadow' onClick={handleCheckout}>Checkout </button> */}
          </div>
          <div className='shadow bg-white cart-table-container'>
            <table className='cart-data-table'>
              <thead className='cart-data-thead shadow'>
                <tr>
                  <th>
                    <span>Product</span>
                  </th>
                  <th>
                    <span>Product Name</span>
                  </th>
                  <th>
                    <span>Price</span>
                  </th>
                  <th>
                    <span>Remove</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems?.map((product) => (
                  <tr key={product.pid}>
                    <td> <img src={product.img} className='mini-product-img' /></td>
                    <td>{product.title}</td>
                    <td>₹ {product.price}</td>
                    {/* <td>
                      <span className='d-flex-r'>
                        <button className='  bg-white shadow' onClick={() => handleDecreaseQuantity(product.pid)}> ➖ </button>
                        <h3> {product.quantity}</h3>
                        <button className='data-btn-mini bg-white shadow' onClick={() => handleIncreaseQuantity(product.pid)}>➕ </button>
                      </span>
                    </td> */}
                    <td>    
                      <button className='data-btn-mini bg-white shadow' onClick={() => handleRemovewishlistItem(product.pid, product.productname)}> ✖️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <p className='cart-total card'>Total: ₹{totalAmount}</p> */}
        </div>
      )}


      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
     {/* <Footer /> */}
    </div>
  );
}; 

//   return (
//     <div>
//       <h3>{product.pid}</h3>
//       <p>{product.title}</p>
//       <p>Rs.{product.price}</p>
//       <button onClick={handleAddToWishlist}>Your Wishlist</button>
//     </div>
//   );
// };

export default AddWishlist;





// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromWishlist ,addToWishlist } from '../redux/wishlistSlice';
// import { useNavigate } from 'react-router-dom';

// import { ToastContainer, toast } from 'react-toastify';

// import { selectWishlist } from '../redux/wishlistSlice';

// const AddWishlist = () => { 
//   const cartItems = useSelector(state=>state.cart.items);
//   console.log(cartItems);
//   console.log(cartItems.product);
//   const navigate = useNavigate()
//   const dispatch = useDispatch();

//   const handleRemoveItem = (itemId, itemName) => {
//   dispatch(removeFromWishlist(itemId));

//     toast.success(`${itemName} removed from cart !`, {
//       position: "bottom-right",
//       autoClose: 4000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   };

// return (
//     <div className='main'>
//       {/* <Navbar /> */}
//       {cartItems?.length === 0 ? (
//         <div className='cart-empty shadow card'>
//           <img src={"data:image/png;base64,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"} alt="login-img" className='auth-svg' />
//           <p>Your wishlist is empty</p>
//         </div>
//       ) : (
//         <div>
//           <div className='cart-title-container'>
//             <h1 className='cart-title primary'>Your Wishlist</h1>
//             {/* <button className='cart-checkout-btn shadow' onClick={handleCheckout}>Checkout </button> */}
//           </div>
//           <div className='shadow bg-white cart-table-container'>
//             <table className='cart-data-table'>
//               <thead className='cart-data-thead shadow'>
//                 <tr>
//                   <th>
//                     <span>Product</span>
//                   </th>
//                   <th>
//                     <span>Product Name</span>
//                   </th>
//                   <th>
//                     <span>Price</span>
//                   </th>
//                   <th>
//                     <span>Order Quantity</span>
//                   </th>
//                   <th>
//                     <span>Remove</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems?.map((product) => (
//                   <tr key={product.pid}>
//                     <td> <img src={product.img} className='mini-product-img' /></td>
//                     <td>{product.title}</td>
//                     <td>₹ {product.price}</td>
                    
//                     <td>    
//                       <button className='data-btn-mini bg-white shadow' onClick={() => handleRemoveItem(product.pid, product.productname)}> ✖️</button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}


//       <ToastContainer
//         position="bottom-right"
//         autoClose={4000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//      {/* <Footer /> */}
//     </div>
//   );
// };  

// export default  AddWishlist ;
