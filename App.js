import React from "react";
import ReactDOM from "react-dom/client";
// const heading =React.createElement("h1",{id:"heading"},"React Practice by  myself");


const Header =()=>{
    return (
        <div className="header">
            <div className="logo-container"> 
                <img className="logo" src="https://webstockreview.net/images/clipart-restaurant-restaurant-logo-2.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>

    )
}
const stylecard={
    backgroundColor:"rgb(248,248,255)"
}
const RestuarantCard=()=>{
    return(
        <div className="res-card" style={stylecard}>
            <img className="res-logo"
            alt="res-logo"
            src="https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?cs=srgb&dl=beef-bread-buns-1633578.jpg&fm=jpg"
            />
            <h3>Meghana Foods</h3>
            <h4>Biryani,North India</h4>
            <h4>4.3 Stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestuarantCard/>
            </div>
        </div>
    )
}


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
