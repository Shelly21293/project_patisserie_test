import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addData } from './cartAPI';

const initialState = {
  cartList:[],
  value: 0,
  status: 'idle',
};

// Async methodes
// export const getDataAsync = createAsyncThunk('cart/getData',async () => {
//     const response = await getData();
//     // console.log(response.data);
//     return response.data;
//   }
// );

export const addDataAsync = createAsyncThunk('cart/addData',async (newData) => {
    const response = await addData(newData);
    // console.log(response.data);
    return response.data;
  }
);

// export const delDataAsync = createAsyncThunk('cart/delData',async (id) => {
//     const response = await delData(id);
//     // console.log(response)
//     return id;
//   }
// );

// export const updDataAsync = createAsyncThunk('shop/updData',async (newData) => {
//   const response = await updData(newData, newData.id);
//   // console.log(response.data);
//   return response.data;
// }
// );


// cart method
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      },

  extraReducers: (builder) => {
    builder
      
      // .addCase(getDataAsync.fulfilled, (state, action) => {
      //   state.status = 'Done';
      //   // console.log(action.payload);
      //   state.cartList =action.payload;
      // },)
      .addCase(addDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.cartList =[...state.cartList,action.payload];
      },)
      // .addCase(delDataAsync.fulfilled, (state, action) => {
      //   state.status = 'Done';
      //   // console.log(action.payload);
      //   state.cartList = state.customerProdList.filter((x) => x.id !== action.payload);
      // },)

      // .addCase(updDataAsync.fulfilled, (state, action) => {
      //   state.status = 'Done';
      //   // console.log(action.payload);
      //   let updProd = state.cart.find((x) => x.id === action.payload.id);
      //   updProd.desc = action.payload.desc;
      //   updProd.price = action.payload.price;
      // },);
  },
});

// methods to export
// export const {  } = shopSlice.actions;


// selctors to export
export const selectCartList = (state) => state.cart.cartList;

export default cartSlice.reducer;
