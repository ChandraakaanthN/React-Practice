import React from "react";
import User from "./User";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
           UserInfo:{
            name:"Chandrakanth",
            location:"Visakhapatnam",
            id:"",
            avatar_url:"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
           }  
        };
    //     // console.log("Child Constructor");
    }
   async componentDidMount(){
        const data=await fetch("https://api.github.com/users/chandraakaanthN");
        const json=await data.json();
        console.log(json);
        this.setState({
            UserInfo:json,
        });
    }
    render(){
        // const {count}=this.state;
        const {name,location,id,avatar_url}=this.state.UserInfo;
        return <div className="user-card">
             {/* <h1>{count}</h1>
             <button 
                    onClick={()=>{
                        this.setState({

                            count: this.state.count+1
                        });
                    }}>   Click Here 
             </button> */}

        <img src={avatar_url} alt="User Avatar" />
            <h2>Id:{id}</h2>
             <h2>Name:{name}</h2>
            <h2>Location:{location}</h2>
            <h4>Contact:8985219666</h4>
        </div>
    }
}
export default UserClass;