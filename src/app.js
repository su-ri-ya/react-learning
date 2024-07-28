import React from "react"
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header'
import Body from "./components/Body/Body";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import About from "../src/components/About"
import Contact from "./components/Contact";
import Error from "../src/components/Error"
import ResMenu from "./components/ResMenu";


const AppLayout=()=>{
    
    return(
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/about",
                element:<About />,
                errorElement:<Error />
            },
            {
                path:"/contact",
                element:<Contact />,
                errorElement:<Error />
            },
            {
                path: "/restaurant/:resId",
                element:<ResMenu />,
                errorElement:<Error />
            }

        ],
        errorElement:<Error />
    },
    
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider  router={appRouter}/>)