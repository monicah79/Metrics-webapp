import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Movies = (props) => {
  const { title, logo, id } = props;

  return (
    <div className="movie-container">

      <Link to={`${id}`} className="slot">
        <FaAngleRight className="icon-right" />
      </Link>

      <div className="slot">
        <h4 className="title">{title}</h4>
        <img src={logo} className="logo" alt="" />

      </div>
    </div>
  );
};

Movies.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
export default Movies;
