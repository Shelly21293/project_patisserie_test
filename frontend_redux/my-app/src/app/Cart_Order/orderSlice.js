import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addData } from './orderAPI';

const initialState = {
  orderList:[],
  value: 0,
  status: 'idle',
};

// Async methodes
// export const getDataAsync = createAsyncThunk('order/getData',async () => {
//     const response = await getData();
//     // console.log(response.data);
//     return response.data;
//   }
// );

export const addDataAsync = createAsyncThunk('order/addData',async (newData) => {
    const response = await addData(newData);
    // console.log(response.data);
    return response.data;
  }
);

// export const delDataAsync = createAsyncThunk('order/delData',async (id) => {
//     const response = await delData(id);
//     // console.log(response)
//     return id;
//   }
// );

// export const updDataAsync = createAsyncThunk('order/updData',async (newData) => {
//   const response = await updData(newData, newData.id);
//   // console.log(response.data);
//   return response.data;
// }
// );


// cart method
export const orderSlice = createSlice({
  name: 'order',
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
// export const { CartToSend } = orderSlice.actions;


// selctors to export
// export const selectMyOrder = (state) => state.order.myCart;
export const selectOrderList = (state) => state.order.orderList;

export default orderSlice.reducer;
