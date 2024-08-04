import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useResMenu from "../utils/useResMenu";

const ResMenu = () => {
    const { resId } = useParams();
    const resInfo = useResMenu(resId);
    
    // Safeguard against null or undefined
    if (!resInfo) {
        return <Shimmer />;
    }

    const res_Info = resInfo.cards?.[2]?.card?.card?.info;
    const itemCards = resInfo.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;
    console.log(resInfo);
    console.log(itemCards);
    if (!res_Info || !itemCards) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = res_Info;
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item, index) => (
                    <div className="menulist" key={index}>
                        <li className="menu-no">
                            {item.card.info.name} - {" Rs."}
                            {item.card.info.price / 100 || item.card.info.defaultPrice}
                        </li>
                        {item.card.info.imageId && (
                            <img 
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} 
                                alt={item.card.info.name}
                            />
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default ResMenu;
