import React from 'react';
import NotFoundImg from './four.jpg'
import './NotFound.css'





const NotFound = () => {
    return (
        <div className='not-found'>
          <h1>404</h1>
          <img src={NotFoundImg} alt="" />
        </div>
    );
};

export default NotFound;