import { useState ,useEffect} from "react";

const useResMenu = (resId) => {
    
    const [resInfo, setResInfo] =useState(null);

    
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" + resId);
        const json = await data.json();
        const res_info = json?.data;


        setResInfo(res_info)
    };

    return  resInfo 
}

export default useResMenu
