import {img_url} from "../utils/constants"
const ResCard=(props)=>{
    const{resName,cuisine,rating,logo}=props;
    return(
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
            <img className="rounded-lg" src={img_url+logo} alt={`${resName} logo`}/>
            <h3 className="font-bold  py-4 text-lg">{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>

        </div>
    )
}

export default ResCard;