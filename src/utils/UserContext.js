import {createContext} from "react";

const UserContext = createContext({
    loggedInUser:"DefualtUser",
});
export default UserContext;