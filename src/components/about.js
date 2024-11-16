import React from 'react';
import './about.css';
import img from "./aboutimg.png"

function AboutPage() {
    return (
        <div className="about-container" id='about'>
            <div className="card">
                <div className="content">
                    <h2>About Us</h2>
                    <p>Opal Collection is a premier assortment of luxury hotels and resorts,
                    located in the most treasured destinations on the East Coast. Spanning north from our Bar Harbor,
                    Maine resorts to the southernmost tip of Key West, Florida, we offer curated, memorable getaways 
                    for every trip on your bucket list. Like the effervescent shimmer of an Opal gemstone, 
                    each destination radiates with its own unique experiences. Each property reflects a distinct connection 
                    to its destination through locally inspired design, regional culinary features, and signature activities.</p>
                    <button className='showbutt'>Show more</button>
                </div>
                <div className="image">
                    <img src={img} alt="About Us" className='abtimg' />
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
