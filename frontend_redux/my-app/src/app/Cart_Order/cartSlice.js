import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  myCart: (JSON.parse(localStorage.getItem("myCart"))) ? (JSON.parse(localStorage.getItem("myCart"))) : ([]),
  id: 0,
  status: 'idle',
};


// cart method
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      // console.log(action.payload)
      state.myCart = [...state.myCart, action.payload]
      console.log(state.myCart)
      localStorage.setItem("myCart", JSON.stringify(state.myCart))

    },
    deleteCart: (state, action) => {
      // console.log(action.payload)
      state.myCart = ([])
      console.log(state.myCart)
      localStorage.clear()

    },
    removeItemFromCart: (state, action) => {
      console.log(action.payload)
      state.myCart = state.myCart.filter(x => x._id !== action.payload)
      console.log(state.myCart)

      localStorage.setItem("myCart", JSON.stringify(state.myCart))   

    },
    changeAmount: (state, action) => {
      console.log("i need to change amount")
      console.log(action.payload)
    }
  },

  extraReducers: (builder) => {

  },
});

// methods to export
export const { addItemToCart, deleteCart,removeItemFromCart, DelFromCart, changeAmount } = cartSlice.actions;


// selctors to export
export const selectMyCart = (state) => state.cart.myCart;
// export const selectOrderList = (state) => state.order.orderList;

export default cartSlice.reducer;
