import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/slice/postSlice';
import Movies from '../components/Details';
import Header from '../components/Header';

import '../index.css';

const Shows = () => {
  const posts = useSelector((state) => state.post.post);
  const dispatch = useDispatch();

  const shouldGetPosts = useRef(true);
  useEffect(() => {
    if (shouldGetPosts.current) {
      shouldGetPosts.current = false;
      dispatch(getPosts());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Header />

      <div className="show-container">

        {
               posts.map((post) => (
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
