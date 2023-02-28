import React, {useEffect,useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../redux/slice/postSlice";
import Movies from "../components/Details";
import Header from "../components/Header";

const Shows = ()=>{
    const {movieData, setMovieData} = useSelector((state)=> state.post)
    const shouldFetchData = useRef(true);
    const dispatch = useDispatch();
    useEffect(()=> {
      if (shouldFetchData.current) {
        shouldFetchData.current = false;
  
        dispatch(getPosts());
      }
    },[dispatch])
    const handleSearch = (event) => {
      setMovieData(event.target.value);
    };
    let filterMovies = Movies;
    if (movieData) {
      filterMovies = Movies.filter(
        (movies) => movies.title.toLowerCase().includes(movieData.toLowerCase()),
      );
    }
    return (
      <div className="App">
        <div>
        <Header/>
        <input
            type="text"
            placeholder="Search"
            value={movieData}
            onChange={handleSearch}
          />
        </div>
        
        <div>
        {filterMovies.map((movies)=>(
          <div>
             title= {movies.Title}
          </div>
          ))
        }
        </div>
       
      </div>
    );
}

export default Shows;
