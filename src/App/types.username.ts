import React, {ReactNode} from "react";

export interface IUser {
    username: string | undefined
}

export type Props = {
    children: ReactNode
}

export type UserContextType = {
    user: IUser,
    setUser: React.Dispatch<React.SetStateAction<IUser>> | undefined
}