import React, { useRef, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaMicrophone, FaCog, FaAngleLeft } from 'react-icons/fa';
import { getPosts } from '../redux/slice/postSlice';

const Singleshow = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.post);

  const shouldGetPosts = useRef(true);
  useEffect(() => {
    if (shouldGetPosts.current) {
      shouldGetPosts.current = false;
      dispatch(getPosts());
    }
  }, [dispatch]);

  const { id } = useParams();

  return (
    <div>
      <nav className="nav-bar">
        <div className="link">
          <Link to="/" style={{ color: 'white' }}>
            <FaAngleLeft />
          </Link>

          <h2>Description</h2>
        </div>

        <div className="icons">
          <h3>
            {' '}
            <FaMicrophone />
            {' '}
          </h3>
          <h4>
            {' '}
            <FaCog />
            {' '}
          </h4>
        </div>
      </nav>
      { posts.filter((item) => item.id === Number(id)).map((movie) => (
        <div className="single-show-container" key={movie.id}>
          <div className="image web">
            <img src={movie.logo_100px} alt={movie.item} />
            <h4 className="title">{movie.name}</h4>
          </div>

          <div className="description">
            <div className="web">
              <h2>id</h2>
              <h2>{movie.id}</h2>
            </div>
            <div className="web">
              <h3>Movies Type</h3>
              <h3>{movie.type}</h3>
            </div>
            <div className="web">
              <h4>Regions</h4>
              <h4>{movie.regions}</h4>
            </div>
            <div className="web">
              <h5>Website</h5>
              <h5>{movie.android_playstore_url}</h5>
            </div>
            <div className="web">
              <h6>Ios Website</h6>
              <h6>{movie.ios_appstore_url}</h6>
            </div>
          </div>

        </div>
      ))}
    </div>

  );
};

export default Singleshow;
