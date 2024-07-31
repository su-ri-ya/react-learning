import { useState } from "react";



const User =(props)=>{

    const [count1,setcount1]=useState(0)

    return (
        <div className="user-card">
            <h1>Count: {count1}</h1>
            <button onClick={()=>{
                setcount1((prev)=> prev+=1)
            }}>count incre</button>
            <h2>Name:{props.name} </h2>
            <h3>Location:{props.location}</h3>
            <h4>Contact:{props.contact}</h4>

        </div>
    )
}
export default User;