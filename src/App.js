import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// const heading =React.createElement("h1",{id:"heading"},"React Practice by  myself");
const AppLayout=()=>{
  return(
    <div>
     <Header/>
     <Body/>
    </div>
  )
}

// const heading=<h1>This is my React practice</h1>
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// const Title=()=>{
//     <h1 className="title" tabIndex="5">
//         Hello Macho!!
//     </h1>
// }
// const HeadingComponent=()=>{
//     return <h1>This is my Heading Component</h1>;
// };
root.render(<AppLayout/>);

