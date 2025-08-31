import React,{lazy,Suspense,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuartantMenu from "./components/RestuartantMenu";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import UserContext from "./utils/UserContext.js";
const Grocery=lazy(()=>import("./components/Grocery"));
// const heading =React.createElement("h1",{id:"heading"},"React Practice by  myself");
const AppLayout=()=>{
  const [userName,SetUserName]=useState();
  useEffect(()=>{
      const data={
        name:"Chandrakanth",
      };
      SetUserName(data.name);
  },[]
  )
  
  return(
    <UserContext.Provider value={{loggedInUser:userName,SetUserName}}>
       <div>
            <Header/>
            <Outlet/>
       </div>
    </UserContext.Provider>
   
  )
}
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"restaurants/:resId",
        element:<RestuartantMenu/>
      },
      {
        path:"/grocery",
        element:<Suspense><Grocery/></Suspense>
      }
    ],

    errorElement:<Error/>
  },
  

])

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
root.render(<RouterProvider router={appRouter} />);

