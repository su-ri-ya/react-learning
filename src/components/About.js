import React from "react";
import User from "./User";
import UserClass from "./UserClass";



class  About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent contructor");
    }

    componentDidMount(){
        console.log("parent componentdid mount");
    }
    render(){
        console.log("parent render");
        return(
            <div>
            <h1>About</h1>
            <h2>this is the about page</h2>
            <UserClass  name="first" location="theni" contact="32641752148"/>
            <UserClass  name="second" location="theni" contact="32641752148"/>
        </div>

        )
    }
}
export default About;


// parent contructor
// parent render
// firstchild contructor
// firstchild render
// secondchild contructor
// secondchild render
// firstchild component did mount
// secondchild component did mount
// parent componentdid mount