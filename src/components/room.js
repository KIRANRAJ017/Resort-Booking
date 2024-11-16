import React from 'react';
import Card from './card';
import "./imgcard.css"
import img1 from "./singlebed.jpg"
import img2 from "./doublebedroom.jpg"
import img3 from "./deluxebedroom.jpg"

const Cardimg = () => {
  const handleBook = () => {
    console.log('Book button clicked');
  };

  return (
    <div  className="rooms" id='price'>
      <h1 style={{color:'#333',textAlign:'center'}}>Our Favorite Room</h1>
      <p style={{textAlign:'center',marginTop:'-30px',fontSize:'18px'}}>The Best Dream Happen When You're Awake</p>
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