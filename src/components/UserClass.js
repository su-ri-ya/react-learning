import React from "react";
import Usercontext from "../utils/UserContext";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Userinfo:{
                name:"Dummy",
                location:"Default",
                imageurl:"httpdummy.jpg"
            }
        }
        //console.log("child contructor");

    }

     async componentDidMount(){
        //console.log("child component did mount");

        //api calls
        const  data = await fetch("https://api.github.com/users/akshaymarch7");
        const json =  await data.json();
        //console.log(json);


        this.setState({
                Userinfo:json
        })




    }
    componentDidUpdate(){
        //console.log("component did update");
    }


    render(){
        //console.log("child render")




        const {name,location,avatar_url} = this.state.Userinfo;
        return (
            <div className="user-card">
            <h2>Name:{name} </h2>
            <Usercontext.Consumer>
                {({UserName})=> <h1>USERNAME:  {UserName}</h1>}
            </Usercontext.Consumer>
            <h3>Location:{location}</h3>
            <img src={avatar_url}></img>

        </div>
        )
    }
}


export default UserClass;


/**
 * ---mounting---
 * constructor(dummy)
 * render (dummy)
 *      <html dummy>
 * components did mount 
 *   <api calls>
 *   <state varialbe update with api>
 * 
 * ---update -----
 * 
 * 
 *     render(api data)
 *    <html (new api data?)
 * 
 * 
 * component did update
 * 
 */





