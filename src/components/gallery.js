import React from 'react';
import ImageSlider from './ImageSlider';
import image1 from './outer.jpg';
import image2 from './inner.jpg';
import image3 from './resort.jpg';

function App() {
  const images = [image1, image2, image3];
  const buttonTexts = ["Outer view", "Inner View", "Resort"];

  return (
    <div className="gallery" id='gallery'>
        <h1 style={{color:'#333',textAlign:'center'}}>Our Gallery</h1>
        <p style={{textAlign:'center',marginTop:'-20px',fontSize:'18px'}}>Works Of Art Often Last Forever</p>
        <ImageSlider images={images}  buttonTexts={buttonTexts}/> {/* Pass the images array as a prop */}
    </div>
  );
}

export default App;