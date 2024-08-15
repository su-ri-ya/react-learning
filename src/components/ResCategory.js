import { useState } from "react";
import ItemList from "./ItemsList";

const ResCategory =({data,showItems,setshowIndex})=>{
    // console.log(data);

    
    const handleClick =()=>{
        setshowIndex();

    }
    

    return (
        <div className="w-auto">
            <div className="w-6/12 bg-gray-200 p-4 mx-auto my-4 shadow-xl">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-sl">
                    {data.title}({data.itemCards.length})
                </span>
                <span>⬇️</span>
            </div>
            {showItems && <ItemList items={data.itemCards} />}
              
            </div>
        </div>
    )
}

export default ResCategory