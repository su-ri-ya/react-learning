import ResCard from "../ResCard/ResCard";
import restaurantsList from "../../utils/mockdata"
import { useState } from "react";


const Body=()=>{
    
    

    

    // const [listofres,setlistofres]=useState(restaurantsList);
   const arr =useState(restaurantsList)
   const listofres=arr[0];
   const setlistofres=arr[1]

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filterlist=listofres.filter(
                        (res)=>res.rating>4
                    );
                    setlistofres(filterlist)
                }}
                >
                Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listofres.map((restaurant,index)=> (<ResCard 
                 key={index}
                 resName={restaurant.resName}
                 cuisine={restaurant.cuisine}
                 rating={restaurant.rating}
                 prepTime={restaurant.prepTime}
                 logo={restaurant.logo}
                /> 
            ))}
            </div>
        </div>
    )
}
export default Body;