import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/slice/postSlice';
import Movies from '../components/Details';
import Header from '../components/Header';

import '../index.css';

const Shows = () => {
  const posts = useSelector((state) => state.post.post);
  const dispatch = useDispatch();
  const [searchItem, setSearchItem] = useState('');
  const shouldGetPosts = useRef(true);
  useEffect(() => {
    if (shouldGetPosts.current) {
      shouldGetPosts.current = false;
      dispatch(getPosts());
    }
  }, [dispatch]);

  const newSites = posts.filter((movie) => (
    movie.name.toLowerCase().includes(searchItem.toLowerCase())
    || movie.region.toLowerCase().includes(searchItem.toLowerCase())));

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <input
        className="search-bar"
        type="text"
        name="searchItem"
        placeholder="search for Movies site"
        value={searchItem}
        onChange={handleSearch}
      />
      <div className="show-container">

        {
           searchItem.length
             ? newSites.map((post) => (
               <Movies
                 key={post.id}
                 title={post.name}
                 logo={post.logo_100px}
                 id={post.id}
               />
             ))
             : posts.map((post) => (
               <Movies
                 key={post.id}
                 title={post.name}
                 logo={post.logo_100px}
                 id={post.id}
               />
             ))
         }
      </div>
    </div>
  );
};

export default Shows;
