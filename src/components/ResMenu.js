import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom'
const ResMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [MenuInfo, setMenuInfo] = useState(null);

    const { resId } = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" + resId);
        const json = await data.json();
        const res_info = json?.data?.cards[2]?.card?.card?.info;
        const itemCards =json?.data?.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
        


        setResInfo(res_info);
        setMenuInfo(itemCards)
    };
    
    

    if (resInfo===null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo;
    
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {MenuInfo.map(item=> (
                
                <li key={item.card.info.id}>
                    {item.card.info.name} - {" Rs."} 
                    {item.card.info.price/100 || item.card.info.defaultPrice }
                </li>

            ))}
                
            </ul>
        </div>
    );
};

export default ResMenu;
