import React, {useEffect,useRef} from "react";
import { Link,useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {FaMicrophone,FaCog,FaAngleRight,FaArrowCircleRight} from 'react-icons/fa';
import { getPosts } from "../redux/slice/postSlice";


const Singleshow = () => {
const {movieSymbol} = useParams()
const dispatch = useDispatch()
const shouldFetchMovie = useRef(true)
useEffect(() => {
    if (shouldFetchMovie.current) {
      shouldFetchMovie.current = false;
      dispatch(getPosts(movieSymbol));
    }
    // eslint-disable-next-line
  }, []);
  // const { movies } = useSelector((state) => state.movies);

  // const {
  //   Title,
  //   Logo,
  //   Genre,
  //   image,
  // } = movies;

return (
    <div>
        <nav>
        <div>
            <Link to="/">
             < FaAngleRight/>
            </Link>
           
        </div>
        <div>
            <h1>Details</h1> 
        </div>
       <div>
        <FaMicrophone/>
        <FaCog/>
       </div>
        </nav>

        <div className="show-container">
            <div>
                < FaArrowCircleRight />
            </div>
            <div>
              <h2>Title</h2>
              <p>Logo</p>
            </div>
        </div>
        
    </div>
)
}

export default Singleshow;