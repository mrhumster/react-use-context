import {useContext} from "react";
import {UserContext} from "../context/userDetails";
import HomeBody from "./HomeBody";
import NavPanel from "./NavPanel";

const Home = () => {
    return (
        <>
            <NavPanel/>
            <HomeBody />
        </>
    )
}
export default Home
