import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getData,addData,delData, updData } from './shopAPI';

const initialState = {
  prodList:[],
  value: 0,
  status: 'idle',
};

// Async methodes
export const getDataAsync = createAsyncThunk('shop/getData',async () => {
    const response = await getData();
    // console.log(response.data);
    return response.data;
  }
);

export const addDataAsync = createAsyncThunk('shop/addData',async (newData) => {
    const response = await addData(newData);
    // console.log(response.data);
    return response.data;
  }
);

export const delDataAsync = createAsyncThunk('shop/delData',async (id) => {
    const response = await delData(id);
    // console.log(response)
    return id;
  }
);

export const updDataAsync = createAsyncThunk('shop/updData',async (newData) => {
  const response = await updData(newData, newData.id);
  // console.log(response.data);
  return response.data;
}
);


// shop method
export const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
      },

  extraReducers: (builder) => {
    builder
      
      .addCase(getDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.prodList =action.payload;
      },)
      .addCase(addDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.prodList =[...state.prodList,action.payload];
      },)
      .addCase(delDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        state.prodList = state.prodList.filter((x) => x.id !== action.payload);
      },)
      .addCase(updDataAsync.fulfilled, (state, action) => {
        state.status = 'Done';
        // console.log(action.payload);
        let updProd = state.prodList.find((x) => x.id === action.payload.id);
        updProd.desc = action.payload.desc;
        updProd.price = action.payload.price;
      },);
  },
});

// methods to export
// export const {  } = shopSlice.actions;


// selctors to export
export const selectProdList = (state) => state.shop.prodList;

export default shopSlice.reducer;
