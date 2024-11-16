import Navbar from "./Navbar"
import img from "./back2.png"
import "./book.css"

function Book(){
    return(
        <>
            <Navbar/>
            <span className="logo"><span style={{fontSize:"28px",color:"#00c5fb"}}>M</span>agic Moments .</span>
            <div className="book">
                <div className="backimg">
                    <img src={img} alt="backgound" className="img" />
                </div>
                <div className="head">
                    <h1>Elevate your senses<br/> in paradise</h1>
                    <p style={{fontSize:'20px',marginTop:'-25px'}}>A place to get away from the hustle of everyday life and grow in peace</p>
                    <div>
                        <button className="startbut"><a href="s" className="a">BOOK RESORT</a></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Book