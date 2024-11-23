import { Link } from "react-router-dom";
import "./book.css"

export default function Bookbut(){
    return(
        <div className="bookbut">
            <div>
                <h2>BOOK YOUR <br/>RESORT</h2>
            </div>
            <div className="booksubbut">
                <label>Check In</label>
                <input type="date" />
            </div>
            <div className="booksubbut">
                <label>Check Out</label>
                <input type="date" />
            </div>
            <div className="booksubbut">
                <label>Rooms </label>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </div>
            <div className="booksubbut">
                <label>Guests </label>
                <select>
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                </select>
            </div>
            <div>
                <button className="startbut"><Link to="/book" >BOOK RESORT</Link></button>
            </div>
        </div>
    )
}