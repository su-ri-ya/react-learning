import { useState,useEffect } from "react";
import {LOGO_URL} from "../../utils/constants"
import { Link } from "react-router-dom";
export const Header=()=>{
    const[btnName,setbtnName]=useState("Log IN")
    console.log("header render");

    //if no dependency array =>ueeffect is called on every render
    //if dependency array is empty => useeffect is called on initial render(just once)
    //if dependency array is [btnname] => useeffect is called on whenever btnname changes (we can any other variable when ever variable in array change useeffect is called)
    useEffect(()=>{
        console.log("useeffect called");

    },[btnName])
    return(
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}/>

            </div>
            <div className="nav-items">
                <ul>
                    <li><Link className="link" to={"/"}>home</Link></li>
                    <li><Link  className="link "to="/about">about</Link></li>
                    <li><Link className="link" to={"/contact"}>contact</Link></li>
                    <li><Link className="link">cart</Link></li>
                    <button className="login" onClick={()=>{
                    btnName==="login"?
                    setbtnName("Log out")
                    :setbtnName("login")
                    }}>{btnName}</button>
                </ul>

            </div>
            
        </div>
    )
}

export default Header;

