import './about.css';
import img1 from "../images/IMG-20241116-WA0010.jpg"
import img2 from "../images/IMG-20241116-WA0022.jpg"
import img3 from "../images/WhatsApp Image 2024-11-16 at 18.29.02_7d336a07.jpg"
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from 'react';

function AboutPage() {
    useEffect(()=>{
        Aos.init({duration:1000});
        Aos.init({disable:'mobile'})
    },[]);
    return (
        <div className="about-container" id='about'>
            <h1 data-aos="fade-right">Giving the best <br/> <span className='abt-subhead'>just for You</span> <span className='abt-subheadline'></span></h1>
            <div className="card">
                <div className="content">
                    <p>Opal Collection is a premier assortment of luxury hotels and resorts,
                    located in the most treasured destinations on the East Coast. Spanning north from our Bar Harbor,
                    Maine resorts to the southernmost tip of Key West, Florida, we offer curated, memorable getaways 
                    for every trip on your bucket list. Like the effervescent shimmer of an Opal gemstone, 
                    each destination radiates with its own unique experiences. Each property reflects a distinct connection 
                    to its destination through locally inspired design, regional culinary features, and signature activities.</p>
                    <button className='showbutt'>Show more</button>
                </div>
                <div className="image">
                    <img src={img1} alt="About Us" className='abtimg1' data-aos="fade-right"  />
                    <img src={img2} alt='About Us' className='abtimg2' data-aos="fade-left"/>
                    <img src={img3} alt='About Us' className='abtimg3' data-aos="fade-down"/>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
