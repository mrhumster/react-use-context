import React, {ReactNode} from "react";

export interface IUser {
    username: string | undefined
    email?: string
}

export type Props = {
    children: React.ReactElement
}

export type UserContextType = {
    user: IUser | undefined,
    setUser: React.Dispatch<React.SetStateAction<IUser>> | undefined
}