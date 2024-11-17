import Navbar from "../navbar/Navbar"
import img from "../images/Beach house.jpg"
import "./book.css"

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
                    <h1>Magic Moments</h1><br/><br/>
                    <h2>Elevate your senses <br/>in paradise</h2><br/>
                    <p style={{fontSize:'18px',marginTop:'-25px'}}>A place to get away from the hustle of everyday life and grow in peace</p>
                    <div>
                        <button className="startbut"><a href="s" className="a">BOOK RESORT</a></button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Book