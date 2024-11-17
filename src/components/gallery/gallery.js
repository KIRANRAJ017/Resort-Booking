import React, { useState, useEffect } from 'react';
import image1 from '../images/outer.jpg';
import image2 from '../images/inner.jpg';
import image3 from '../images/resort.jpg';
import "./gallery.css"
import "aos/dist/aos.css"
import Aos from "aos"

const rooms = [
  {
    name: "Classic Room",
    price: "$100/night",
    image: image1,
  },
  {
    name: "Grand Deluxe Room",
    price: "$150/night",
    image: image2,
  },
  {
    name: "Ultra Superior Room",
    price: "$200/night",
    image: image3,
  },
];
function App() {
  const images = [image1, image2, image3];
  const buttonTexts = ["Outer view", "Inner View", "Resort"];
  const [selectedRoom, setSelectedRoom] = useState(rooms[0]);
  useEffect(()=>{
    Aos.init({duration:1000});
    Aos.init({disable:'mobile'})
},[]);
  return (
    <div className="gallery" id='gallery'>
        <p style={{marginLeft:'95px', fontSize:'12px'}}  data-aos="fade-right">DISCOVER OUR ROOMS</p>
        <h1 className='abt-subhead' style={{marginTop:'5px'}}  data-aos="fade-right">Our Gallery <span className='abt-subheadline'></span></h1>
        <p className='abt-subhead' style={{marginLeft:'180px', marginTop:'-30px'}}  data-aos="fade-right">Works Of Art Often Last Forever</p>
        <div className="container">
          <div className="left-panel"  data-aos="fade-right">
            <ul className="room-list">
              {rooms.map((room, index) => (
                <li
                  key={index}
                  className={`room-item ${
                    selectedRoom.name === room.name ? "active" : ""
                  }`}
                  onClick={() => setSelectedRoom(room)}
                >
                  <img src={room.image} alt={room.name} />
                  <div>
                    <h4>{room.name}</h4>
                    <p>Starting from {room.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="right-panel"  data-aos="fade-left">
            <img
              src={selectedRoom.image}
              alt={selectedRoom.name}
              className="room-image"
            />
          </div>
        </div>
    </div>
  );
}

export default App;