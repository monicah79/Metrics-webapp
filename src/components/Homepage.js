import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/slice/postSlice";
const Emojihub = ()=>{
    const {posts, loading} = useSelector((state)=> state.posts)
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(getPosts());
    },[])
  
    return (
      <div className="App">
       {
        posts.map((item)=>(
          <h2>{item.name}</h2>
        ))
       }
      </div>
    );
}

export default Emojihub;
