import React from 'react';
import { Link } from 'react-router-dom';
import {FaMicrophone,FaCog} from 'react-icons/fa';

const Header = () => (
    <div className='head'>
        <div className='headings'>
            <h1>Movies</h1>
            <h2><Link to="/" >Homepage</Link></h2>
        </div>
        <div className='icons'>
           <h3> < FaMicrophone /> </h3> 
           <h4> <FaCog /> </h4>  
        </div>
    </div>
)

export default Header;