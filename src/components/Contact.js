import React, { useContext } from 'react'
import Usercontext from "../utils/UserContext";

const Contact = () => {

  const {UserName}= useContext(Usercontext)
  
  
  return (
    <div>
        <h1>contact page</h1>
        <h1 className="px-4 text-xl">{UserName}</h1>
        
    </div>
  )
}

export default Contact
