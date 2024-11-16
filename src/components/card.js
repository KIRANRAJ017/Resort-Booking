import React from 'react';
import PropTypes from 'prop-types';
import "./imgcard.css"
import { FaStar } from "react-icons/fa";
import { MdOutlineMonitor } from "react-icons/md";
import { FaWifi } from "react-icons/fa";

const Card = ({ imgSrc, price, rating, onBook, room }) => {
  return (
    <div className="card1">
      <img src={imgSrc} alt="Card" className="card-img1" />
      <div className="card-body1">
        <h5 className="card-price1">{price}<text style={{fontSize:'15px'}}>/per day</text></h5>
        <div className="card-rating1">
          {[...Array(rating)].map((_, index) => ( 
            <FaStar className="star-icon1"/>
          ))}<br/>
          <div className='roomtype'>{room}</div>
        </div>
        <div>
          <button className="book-button1" onClick={onBook}>Book Now</button>
          <button className='extra'><MdOutlineMonitor /></button>
          <button className='extra'><FaWifi /></button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  onBook: PropTypes.func.isRequired,
};

export default Card;