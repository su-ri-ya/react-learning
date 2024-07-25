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

export default ResCard;