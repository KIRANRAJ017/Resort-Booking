import React, { useState } from 'react';
import './gallery.css'; 

function ImageSlider({ images, buttonTexts  }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const changeSlide = (index) => {
        setCurrentImageIndex(index);
    };
    return (
        <div className="slider">
            <div className="buttons">
                {images.map((_, index) => (
                    <button id='selectimg'
                        key={index}
                        onClick={() => changeSlide(index)}
                        className={currentImageIndex === index ? "active" : ""}
                    >
                     {buttonTexts[index]}
                    </button>
                ))}
            </div>
            <div className="slides">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={
                            index === currentImageIndex
                                ? "slide active"
                                : "slide inactive"
                        }
                    >
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ImageSlider;
