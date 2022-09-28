import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData } from './categoryAPI';

const initialState = {
  categoryList:[],
  value: 0,
  status: 'idle',
};

// Async methodes
export const getCategoryAsync = createAsyncThunk('category/getData',async () => {
    const response = await getData();
    // console.log(response.data);
    return response.data;
  }
);

// export const addDataAsync = createAsyncThunk('cart/addData',async (newData) => {
//     const response = await addData(newData);
//     // console.log(response.data);
//     return response.data;
//   }
// );

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


// category method
export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
      },

  extraReducers: (builder) => {
    builder
      
      .addCase(getCategoryAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        console.log(action.payload);
        state.categoryList =action.payload;
      },)
      // .addCase(addDataAsync.fulfilled, (state, action) => {
      //   state.status = 'Done';
      //   // console.log(action.payload);
      //   state.categoryList =[...state.categoryList,action.payload];
      // },)
      // .addCase(delDataAsync.fulfilled, (state, action) => {
      //   state.status = 'Done';
      //   // console.log(action.payload);
      //   state.categoryList = state.customerProdList.filter((x) => x.id !== action.payload);
      // },)

      // .addCase(updDataAsync.fulfilled, (state, action) => {
      //   state.status = 'Done';
      //   // console.log(action.payload);
      //   let updProd = state.category.find((x) => x.id === action.payload.id);
      //   updProd.desc = action.payload.desc;
      //   updProd.price = action.payload.price;
      // },);
  },
});

// methods to export
// export const {  } = shopSlice.actions;


// selctors to export
export const selectCategoryList = (state) => state.category.categoryList;

export default categorySlice.reducer;
