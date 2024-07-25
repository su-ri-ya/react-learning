import React from "react"
import ReactDOM from 'react-dom/client'

/**
 * header
 * -logo
 * -nav items
 * body
 * -search
 * -restaurant container
 *     -img
 *     -name of res,star rating,
 * footer
 * -copyrights
 * links
 * address
 * contact
 */

const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src="https://tse4.mm.bing.net/th?id=OIP.Wuvdo65dj7ghMoYmCtCCGgHaHa&pid=Api&P=0&h=180"/>

            </div>
            <div className="nav-items">
                <ul>
                    <li>home</li>
                    <li>about</li>
                    <li>contact</li>
                    <li>cart</li>
                </ul>

            </div>
            
        </div>
    )
}
const restaurantsList = [
    {
        resName: "Pizza Palace",
        cuisine: "Italian",
        rating: "4.5",
        prepTime: "30 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Sushi World",
        cuisine: "Japanese",
        rating: "4.7",
        prepTime: "25 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Burger Bonanza",
        cuisine: "American",
        rating: "4.2",
        prepTime: "20 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Curry Corner",
        cuisine: "Indian",
        rating: "4.8",
        prepTime: "35 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Taco Town",
        cuisine: "Mexican",
        rating: "4.6",
        prepTime: "15 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Noodle Nook",
        cuisine: "Chinese",
        rating: "4.3",
        prepTime: "20 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "BBQ Barn",
        cuisine: "BBQ",
        rating: "4.4",
        prepTime: "40 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Healthy Harvest",
        cuisine: "Vegan",
        rating: "4.9",
        prepTime: "30 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Seafood Shack",
        cuisine: "Seafood",
        rating: "4.1",
        prepTime: "35 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Steak Station",
        cuisine: "Steakhouse",
        rating: "4.5",
        prepTime: "45 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Falafel Feast",
        cuisine: "Middle Eastern",
        rating: "4.6",
        prepTime: "25 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Pasta Paradise",
        cuisine: "Italian",
        rating: "4.7",
        prepTime: "30 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Ramen Realm",
        cuisine: "Japanese",
        rating: "4.8",
        prepTime: "20 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Grill House",
        cuisine: "American",
        rating: "4.3",
        prepTime: "35 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    },
    {
        resName: "Biryani Bliss",
        cuisine: "Indian",
        rating: "4.9",
        prepTime: "40 mins",
        logo: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_500,h_320/83650e6ca1465c58063a70ad22be4f28"
    }
];

const ResCard=(props)=>{
    const{resName,cuisine,rating,prepTime,logo}=props;
    return(
        <div className="res-card">
            <img className="res-logo" src={logo}/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{prepTime}</h4>

        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {restaurantsList.map((restaurant,index)=> (<ResCard 
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
const AppLayout=()=>{
    return(
        <div className="app">
            <Header />
            <Body />

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)