import {LOGO_URL} from "../../utils/constants"
export const Header=()=>{
    return(
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}/>

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

export default Header;

