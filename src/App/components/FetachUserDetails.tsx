import {useContext} from "react";
import {UserContext} from "../context/userDetails";

const FetchUserDetails = () => {
    const { user } = useContext(UserContext)
    return <>{user? `Hello ${user.username}` : `Hello User`}</>
}
export default FetchUserDetails