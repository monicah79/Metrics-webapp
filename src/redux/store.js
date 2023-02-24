import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../redux/slice/postSlice";

export default configureStore ({
    reducer:{
        post: postReducer,
    }
})