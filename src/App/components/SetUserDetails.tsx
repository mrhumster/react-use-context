import {useContext, useState} from "react";
import { useNavigate } from 'react-router-dom'
import {UserContext} from "../context/userDetails";

const SetUserDetails = () => {
    const [name, setName] = useState<string>('')
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)
    const handleSetName = () => {
        if (setUser) {
            setUser({
                username: name
            })
            navigate("/user")
        }
    }
    return (
        <>
            <input
                value={name}
                onChange={(e:any) => setName(e.target.value)}
            />
            <button onClick={handleSetName}>Set name</button>
        </>
    )
}
export default SetUserDetails