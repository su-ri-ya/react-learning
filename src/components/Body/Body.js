import ResCard from "../ResCard/ResCard";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";



const Body=()=>{
    

    const [listofres,setlistofres]=useState([]);
    const [filterlistofres,setfilterlistofres]=useState([]);


    const[searchtext,setsearchtext] =useState("")

    useEffect(()=>{
       fetchData();
    },[]);
    
    const fetchData=async ()=>{
        const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&page_type=DESKTOP_WEB_LISTING");
        const json = await response.json();

        const resList = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        console.log(resList);
        setlistofres(resList)
        setfilterlistofres(resList)

    }

    if (listofres.length===0) {
        return <Shimmer />
        
    }


    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchtext}  onChange={(e)=>{
                            setsearchtext(e.target.value)
                            
                    }}/>
                    <button onClick={()=>{
                        console.log(searchtext);
                         const filterres=listofres.filter((res)=>
                             res.info.name.toLowerCase().includes(searchtext.toLowerCase())

                    )
                        setfilterlistofres(filterres)
                        console.log(filterres);


                    }}>search</button>

                </div>
                <button className="filter-btn" onClick={()=>{
                    const filterlist=listofres.filter(
                        (res)=>res.info.avgRating>4
                    );
                    setlistofres(filterlist)
                }}
                >
                Top Rated Restaurant</button>
            </div>
            <div className="res-container">
            {filterlistofres.map((restaurant, index) => (
                    restaurant.info && (
                        <ResCard
                            key={index}
                            resName={restaurant.info.name}
                            cuisine={restaurant.info.cuisines.join(", ")}
                            rating={restaurant.info.avgRating}
                            logo={restaurant.info.cloudinaryImageId}
                        />
                    )
                ))}
            </div>
        </div>
    )
}
export default Body;