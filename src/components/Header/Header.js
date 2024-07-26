import { useState } from "react";
import {LOGO_URL} from "../../utils/constants"
export const Header=()=>{
    const[btnName,setbtnName]=useState("Log IN")
    return(
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}/>

            </div>
            <div className="nav-items">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>cart</li>
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

