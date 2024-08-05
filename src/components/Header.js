import { useState,useEffect } from "react";
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export const Header=()=>{
    const[btnName,setbtnName]=useState("Log IN")

    //if no dependency array =>ueeffect is called on every render
    //if dependency array is empty => useeffect is called on initial render(just once)
    //if dependency array is [btnname] => useeffect is called on whenever btnname changes (we can any other variable when ever variable in array change useeffect is called)
    // useEffect(()=>{
    
    // },[btnName])

    const onlinestatus =useOnlineStatus()
    return(
        <div className="flex justify-between bg-blue-100 shadow-lg sm:bg-yellow-300">
            <div className="logo">
                <img  className="w-36" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 text-xl font-bold text-blue-500 uppercase">Online status: {onlinestatus? "🟢":"🔴"}</li>
                    <li className="px-4 text-xl font-bold text-blue-500 uppercase"><Link className="link" to={"/"}>home</Link></li>
                    <li className="px-4 text-xl font-bold text-blue-500 uppercase"><Link  className="link "to="/about">about</Link></li>
                    <li className="px-4 text-xl font-bold text-blue-500 uppercase"><Link className="link" to={"/contact"}>contact</Link></li>
                    <li className="px-4 text-xl font-bold text-blue-500 uppercase"><Link className="link">cart</Link></li>
                    <button className="login px-4 bg-red-400" onClick={()=>{
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

