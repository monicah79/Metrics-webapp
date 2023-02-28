import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import axios from 'axios'

export const getPosts = createAsyncThunk("post/getPosts",
    async () =>{
    const response = await fetch (`https://api.watchmode.com/v1/sources/?apiKey=3k9LbJOyuVf5QlGOvHLve7EeyGekF139mMvdXJ4N`)
    const data =  await response.json();
    return data;
})
// const apikey = '3k9LbJOyuVf5QlGOvHLve7EeyGekF139mMvdXJ4N'

// const test = async () => {
//   const res = await axios.get('https://api.watchmode.com/v1/genres/?apiKey=3k9LbJOyuVf5QlGOvHLve7EeyGekF139mMvdXJ4N')
  
//   console.log(res)
//   return res
// }
// test()

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
      })
      builder.addCase(getPosts.fulfilled, (state,action) =>{
        const newState ={
            post: action.payload,
            loading: false,
            error: null,
          };
          return { ...state, ...newState };
      });
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