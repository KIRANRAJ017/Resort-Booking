import React from 'react';
import Card from './card';
import "./imgcard.css"
import img1 from "../images/singlebed.jpg"
import img2 from "../images/doublebedroom.jpg"
import img3 from "../images/deluxebedroom.jpg"

const Cardimg = () => {
  const handleBook = () => {
    console.log('Book button clicked');
  };

  return (
    <div  className="rooms" id='price'>
      <h1 data-aos="fade-right">Your dream <br/> <span className='abt-subhead'>luxurious hotel room</span> <span className='abt-subheadline'></span></h1>
      <p data-aos="fade-right" style={{marginLeft:'90px', marginTop:'-30px',fontSize:'18px'}}>The Best Dream Happen When You're Awake</p>
      <br/>
    <div className='roomcard'>
      <Card
        imgSrc={img1}
        price="$100"
        rating={5}
        onBook={handleBook}
        room={"Single Room"}
      />
      <Card
        imgSrc={img2}
        price="$150"
        rating={5}
        onBook={handleBook}
        room={"Double Room"}
      />
      <Card
        imgSrc={img3}
        price="$200"
        rating={5}
        onBook={handleBook}
        room={"Delux Room"}
      />
    </div>
    </div>
  );
};

export default Cardimg