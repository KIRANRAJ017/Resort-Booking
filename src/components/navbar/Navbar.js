import "./Navbarcss.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
import {AiOutlineClose} from "@react-icons/all-files/ai/AiOutlineClose"
import {CgMenu} from "@react-icons/all-files/cg/CgMenu"
import { useState } from "react"
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom"

function Navbar()
{
    const[show,setshow]=useState(true);
    function handle()
    {
        setshow(!show);
    }
    return(
        <>
            <div className="nav" style={{position:"absolute"}}>
                <div onClick={handle} className="toggicon"><div className="icon">{!show?<div><AiOutlineClose/></div>:<CgMenu/>}</div></div>
                <div className={!show?"navele":"hide"}>
                <div className="navbar">
                    <div>
                        <span style={{color:'white', fontSize:'20px', fontWeight:'bold'}}>Mm.</span>
                    </div>
                    <ul className="elements" >
                        <div><li ><div className="bor"><AnchorLink href='#home' className="comp" >Home</AnchorLink></div></li></div>
                        <div><li ><div className="bor"><AnchorLink href='#about' className="comp" >About</AnchorLink></div></li></div>
                        <div><li ><div className="bor"><AnchorLink href='#price' className="comp" >Pricing</AnchorLink></div></li></div>
                        <div><li ><div className="bor"><AnchorLink href='#gallery' className="comp" >Gallery</AnchorLink></div></li></div>
                        <div><li ><div className="bor"><AnchorLink href='#contact' className="comp" >Contact</AnchorLink></div></li></div>
                    </ul>
                    <Link to='/book'><FaUser /></Link>
                </div>
                </div>
            </div>
        </>
    )
}

export default Navbar