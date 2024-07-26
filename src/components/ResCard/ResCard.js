import {img_url} from "../../utils/constants"
const ResCard=(props)=>{
    const{resName,cuisine,rating,logo}=props;
    return(
        <div className="res-card">
            <img className="res-logo" src={img_url+logo} alt={`${resName} logo`}/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>

        </div>
    )
}

export default ResCard;