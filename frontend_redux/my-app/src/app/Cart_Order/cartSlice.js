import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  myCart: [],
  id: 0,
  status: 'idle',
};


// cart method
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    CartToSend: (state, action) => {
      // console.log("bef")
      // console.log(action.payload)
      state.myCart = action.payload
      console.log("aft")
      console.log(state.myCart)

    },
    // DelFromCart: (state, action) => {
    //   console.log("del")
    //   console.log(action.payload)
    // }
  },

  extraReducers: (builder) => {

  },
});

// methods to export
export const { CartToSend, DelFromCart } = cartSlice.actions;


// selctors to export
export const selectMyCart = (state) => state.cart.myCart;
// export const selectOrderList = (state) => state.order.orderList;

export default cartSlice.reducer;
