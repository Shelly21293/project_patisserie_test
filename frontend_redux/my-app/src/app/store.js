import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import customerReducer from './customerSlice'
import cartReducer from './cartSlice'
import loginReducer from './loginSlice'
import categoryReducer from './categorySlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    product: productReducer,
    customer: customerReducer,
    cart: cartReducer,
    category: categoryReducer,
    
  },
});
