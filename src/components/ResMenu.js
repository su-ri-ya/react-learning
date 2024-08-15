import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useResMenu from "../utils/useResMenu";
import ResCategory from "./ResCategory";
import { useState } from "react";

const ResMenu = () => {
    const { resId } = useParams();
    const resInfo = useResMenu(resId);

    const [showIndex,setshowIndex]=useState(null)
    
    // Safeguard against null or undefined
    if (!resInfo) {
        return <Shimmer />;
    }

    const res_Info = resInfo.cards?.[2]?.card?.card?.info;
    const itemCards = resInfo.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

    const categories =resInfo.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]=== 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log(categories);
    
    
    
    if (!res_Info || !itemCards) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = res_Info;
    
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className=" text-2xl">
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
            {categories.map((category,index)=>(
                <ResCategory 
                key={category?.card?.card.title}  
                data ={category?.card?.card}
                showItems={index ===showIndex ? true:false}
                setshowIndex={()=> setshowIndex(index)}
                />
            ))}
        </div>
    );
};

export default ResMenu;
