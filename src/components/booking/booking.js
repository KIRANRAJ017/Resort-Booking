import React from "react";
import "./booking.css";
import img from "../images/outer.jpg"
import { IoHomeOutline } from "react-icons/io5";
import { GoPerson } from "react-icons/go";
import { IoPawOutline } from "react-icons/io5";
import { BsBoxArrowInRight } from "react-icons/bs";
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"
import Aos from "aos"


const MainContent = () => {
  return (
    <div className="book-page">
        <div className="book-home">
            <Link to='/'><h1>Magic Moments.</h1></Link>
        </div>
        <div className="book-details">
            <h1 className="book-hd" data-aos="fade-left">Book your <br/><span className="abt-subheadline" style={{marginRight:'120px'}}></span><span className="book-subhd ">Dream resort</span></h1>
            <main className="main-content">
              <section className="booking-details">
                <div className="book-head">
                  <img src={img} className="book-img"/>
                    <div>
                        <h2>A vibrant stay for leisure travellers</h2>
                        <p>Baga, North Goa |  <IoHomeOutline /> Private Room <GoPerson /> 3 Guests</p>
                    </div>
                </div>
                <div className="details-grid">
                    <div>
                        <label>Name </label>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div>
                        <label>Phone </label>
                        <input type="number" placeholder="Phone" />
                    </div>
                    <div>
                    <label>Guests </label>
                    <select>
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                    </select>
                  </div>
                  <div>
                    <label>From </label>
                    <input type="date" />
                  </div>
                  <div>
                    <label>To </label>
                    <input type="date" />
                  </div>
                  <div>
                    <label>Rooms </label>
                    <select>
                      <option>1 Room</option>
                      <option>2 Rooms</option>
                      <option>3 Rooms</option>
                    </select>
                  </div>
                  <button className="update-button">Update Details</button>
                </div>
                <div >
                    <h3 style={{fontFamily:'sans-serif'}}>House Rules</h3>
                    <div className="house-rules">
                    <span><IoPawOutline /> Pets are not allowed</span>
                    <span><BsBoxArrowInRight /> Check-in time: 11:00 AM</span>
                    <span><HiOutlineArrowTopRightOnSquare /> Check-out time: 11:00 AM</span>
                    </div>
                </div>
              </section>
              <section className="invoice-section">
                <h3>Invoice</h3>
                <p>Base Price: $5,061</p>
                <p>Discount: -$200</p>
                <p><b>Total Amount: $10,722</b></p>
                <button className="confirm-button">Confirm Booking</button>
              </section>
            </main>
        </div>
    </div>
  );
};

export default MainContent;
