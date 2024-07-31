import { useEffect, useState } from "react";



const User =(props)=>{

    const [count1,setcount1]=useState(0)


    useEffect(()=>{

    },[])

    return (
        <div className="user-card">
            <h2>Name:{props.name} </h2>
            <h3>Location:{props.location}</h3>
            <h4>Contact:{props.contact}</h4>

        </div>
    )
}
export default User;