import React from 'react';
import { Link } from 'react-router-dom';
import {FaAngleRight} from 'react-icons/fa';
import PropTypes from 'prop-types';

const Movies = (props) => {
    const { movieSymbol, movieTitle, movieLogo } = props;
    return (
      <div className="movie-container">
        <Link to={`/singleShow/${movieSymbol}`}>
          <FaAngleRight className="icon-right" />
        </Link>
        <div className="movie">
          <p>{movieSymbol}</p>
          <p>{movieTitle}</p>
          <p>{movieLogo}</p>
        </div>
      </div>
    );
  };
  
  Movies.propTypes = {
    movieTitle: PropTypes.string,
    movieLogo: PropTypes.string,
  }.isRequired;
  
  export default Movies;
