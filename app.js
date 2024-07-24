import React from "react"
import ReactDOM from 'react-dom/client'

//react element

//jsx

const jsxheading =<h1 id="heading">heloo...</h1>

//react component
//class based components -old
//functional components- new

const Comp1 =()=>{
    return <div>
        <h1>hello from comp1 </h1>
        <Comp2 />
    </div>
}

const  Comp2 =()=> <h1>hell from comp2</h1>


const heading=React.createElement("h1",{},"helo......")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Comp1/>)