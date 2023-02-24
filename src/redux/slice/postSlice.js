import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("post/getPosts",
    async () =>{
    const response = await fetch ("https://emojihub.yurace.pro/api/random/category/food-and-drink")
    const data =  await response.json();
    return data;
})

const postSlice = createSlice({
    name: "posts",
    initialState: {
        post: [],
        loading: false,
        error: null,
      },
    extraReducers: (builder) => {
     builder.addCase(getPosts.pending, (state) =>{
        const newState ={
            loading: true,
            error: null,
          };
          return { ...state, ...newState };
      }),
      builder.addCase(getPosts.fulfilled, (state,action) =>{
        const newState ={
            post: action.payload,
            loading: false,
            error: null,
          };
          return { ...state, ...newState };
      }),
      builder.addCase(getPosts.rejected, (state, action) => {
        const newState ={
            post: [],
            loading: false,
            error: action.error.message,
          };
          return { ...state, ...newState };
      })
     
    }
})

export default postSlice.reducer;