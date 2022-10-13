import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import customerReducer from './customerSlice'
import orderReducer from './orderSlice'
import loginReducer from './loginSlice'
import categoryReducer from './categorySlice'

export const store = configureStore({
  reducer: {
    login: loginReducer,
    product: productReducer,
    customer: customerReducer,
    order: orderReducer,
    category: categoryReducer,
    
  },
});
