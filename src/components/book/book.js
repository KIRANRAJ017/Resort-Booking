import Navbar from "../navbar/Navbar"
import img from "../images/back.jpg"
import "./book.css"
import Bookbut from "./bookbut"

function Book(){
    return(
        <>
        <div className="main">
            <Navbar/>
            <div className="book">
                <div className="backimg">
                    <img src={img} alt="backgound" className="img" />
                </div>
                <div className="head">
                    <h1>MAGIC MOMENTS</h1>
                    <h3 style={{marginTop:"-20px", color:'lightgrey'}}>Elevate your senses in paradise</h3><br/><br/><br/>
                    <p style={{fontSize:'18px',marginTop:'-25px'}}>A place to get away from the hustle of everyday life and grow in peace</p>
                    <Bookbut/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Book