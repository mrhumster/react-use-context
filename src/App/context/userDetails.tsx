import React, {createContext, useMemo, useState} from "react";
import {IUser, Props, UserContextType} from "../types.username";

const initUser: IUser = { username: undefined}
const UserContext = createContext<UserContextType>({user: initUser, setUser: undefined})

const UserProvider = (props: Props) => {
    const [user, setUser] = useState<IUser>(initUser)
    const value = useMemo(() => ({user, setUser}), [user])
    return (
        <UserContext.Provider
            value={value}
        >
            {props.children}
        </UserContext.Provider>
    )
}
export { UserContext,UserProvider}