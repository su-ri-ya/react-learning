const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"hi from the container"),React.createElement("h6",{},"hell from siblings")]),React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"hi from the container"),React.createElement("h6",{},"hell from siblings")])])




const root =ReactDOM.createRoot(document.getElementById("root"))
const heading=React.createElement("h1",{id:"heading"},"Hello world.......")
root.render(parent)
