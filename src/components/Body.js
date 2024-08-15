import ResCard from "../components/ResCard"
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Usercontext from "../utils/UserContext";




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

    const status= useOnlineStatus();
    if (!status) {
        return (
            <h1>
                you are offline
            </h1>
        )
        
    }
    const {setusername,UserName} =useContext(Usercontext)
    
    return listofres.length===0? (
        <Shimmer />
    ):(

        <div className="body m-6 p-6">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchtext}  onChange={(e)=>{
                            setsearchtext(e.target.value)
                            
                    }}/>
                    <button className="px-4 bg-blue-400 m-4 py-2 rounded-lg" 
                        onClick={()=>{
                        console.log(searchtext);
                         const filterres=listofres.filter((res)=>
                             res.info.name.toLowerCase().includes(searchtext.toLowerCase())

                    )
                        setfilterlistofres(filterres)
                        console.log(filterres);


                    }}>search</button>

                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-400 rounded-lg" onClick={()=>{
                    const filterlist=listofres.filter(
                        (res)=>res.info.avgRating>4
                    );
                    setlistofres(filterlist)
                     }}
                    >
                    Top Rated Restaurant
                </button>
                <label className="p-4">UserName:   </label>
                <input className=" border border-black p-4" placeholder="enter the username" 
                value={UserName} 
                onChange={(e)=> setusername(e.target.value)}></input>

                </div>
                
            </div>
            <div className="flex flex-wrap">
            {filterlistofres.map((restaurant) => (
                    restaurant.info && (
                        <Link  className="link" key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                            <ResCard
                            resName={restaurant.info.name}
                            cuisine={restaurant.info.cuisines.join(", ")}
                            rating={restaurant.info.avgRating}
                            logo={restaurant.info.cloudinaryImageId}
                        />
                        </Link>
                    )
                ))}
            </div>
        </div>
    )
}
export default Body;