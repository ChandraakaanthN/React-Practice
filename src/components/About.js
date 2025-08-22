import User from "./User";
import React from "react";
import UserClass from "./UserClass";
// const About=()=>{
//     return(
//         <div>
//             <h1>This is About Page</h1>
//             <User/>
//             <br/>
//             <UserClass name={"Chandrakanth Nakka"} location={"Visakhapatnam"}/>
//             <p>We are a food delivery service that connects you with the best restaurants in your area. Our mission is to provide you with a seamless and enjoyable dining experience, whether you're ordering for yourself or hosting a gathering with friends and family.</p>
//             <p>Our team is dedicated to ensuring that your food arrives hot, fresh, and on time. We work closely with our restaurant partners to offer a wide variety of cuisines, so you can always find something to satisfy your cravings.</p>
//             <p>Thank you for choosing us for your food delivery needs. We look forward to serving you!</p>
//         </div>

//     );
// }
class About extends React.Component{
    render(){
        return (
             <div>
           <h1>This is About Page</h1>
           <hr/>
            <UserClass />
           <p>We are a food delivery service that connects you with the best restaurants in your area. Our mission is to provide you with a seamless and enjoyable dining experience, whether you're ordering for yourself or hosting a gathering with friends and family.</p>             <p>Our team is dedicated to ensuring that your food arrives hot, fresh, and on time. We work closely with our restaurant partners to offer a wide variety of cuisines, so you can always find something to satisfy your cravings.</p>            <p>Thank you for choosing us for your food delivery needs. We look forward to serving you!</p>
            <hr/>
      </div>


        )

    }
}
export default About;
