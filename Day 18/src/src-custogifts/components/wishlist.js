import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist} from '../redux/wishlistSlice';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import { selectWishlist } from '../redux/wishlistSlice';

const wishlist = () => 
{ 
  const wishlistItems = useSelector(state=>state.wishlist.items);
  console.log(wishlistItems);
  console.log(wishlistItems.product);
  const navigate = useNavigate()
  // navigate('/wishlist')
  const dispatch = useDispatch();

const handleRemovewishlistItem = (itemId, itemName) => 
{
  dispatch(removeFromWishlist(itemId));

  toast.success(`${itemName} removed from wishlist !`, {
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
  const handleaddToWishlist = (itemId, itemName) => {
    dispatch(addToWishlist(itemId));
  }
  
return (
    <div className='main'>
      {/* <Navbar /> */}
      {wishlistItems?.length === 0 ? (
        <div className='cart-empty shadow card'>
      <img src={"data:image/png;base64,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"} alt="login-img" className='auth-svg' />
          <p>Your wishlist is empty</p>
          
        </div>
      ) : (
        <div>
          <div className='cart-title-container'>
            <h1 className='cart-title primary'>Your wishlist</h1>
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
                {wishlistItems?.map((product) => (
                  <tr key={product.pid}>
                    <td> <img src={product.img} className='mini-product-img' /></td>
                    <td>{product.title}</td>
                    <td>₹ {product.price}</td>
                    
                    <td>    
                      <button className='data-btn-mini bg-white shadow' onClick={() => handleRemovewishlistItem(product.pid, product.productname)}> ✖️</button>
                    </td>
                    <td>    
                      <button className='data-btn-mini bg-white shadow' onClick={() => handleaddToWishlist(product.pid, product.productname)}> ✖️</button>
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
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};  

export default  wishlist ;

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addToWishlist, removeFromWishlist } from '../redux/wishlistSlice';

// const Wishlist = () => {
//   const wishlist = useSelector((state) => state.wishlist);
//   const dispatch = useDispatch();

//   const handleRemoveFromWishlist = (product) => {
//     dispatch(removeFromWishlist(product));
//   };

//   return (
//     <div>
//       <h2>Wishlist</h2>
//       <ul>
//         {wishlist.map((product) => (
//           <li key={product.pid}>
//             {product.name}
//             <button onClick={() => handleRemoveFromWishlist(product)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Wishlist;




