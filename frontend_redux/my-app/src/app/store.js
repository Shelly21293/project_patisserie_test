import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopSlice';
import customerReducer from './customerSlice'
import cartReducer from './cartSlice'
import loginReducer from './loginSlice'
import categoryReducer from './categorySlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    shop: shopReducer,
    customer: customerReducer,
    cart: cartReducer,
    category: categoryReducer,
    
  },
});
