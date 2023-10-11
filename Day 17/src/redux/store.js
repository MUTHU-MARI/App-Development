import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice'
import wishlistReducer from './wishlistSlice';
export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    Wishlist: wishlistReducer
  },
});








// // import rootReducers from "./reducers";
// import cartReducers from './cartSlice';
// import { configureStore } from '@reduxjs/toolkit';
// import userReducer from './userSlice'
// export default configureStore({
//     reducer :{
//         user:userReducer,
//         addItem:cartReducers,
//     }
// })
// // const store = createStore(rootReducers);