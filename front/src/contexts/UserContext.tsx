import { createContext, Dispatch, SetStateAction } from 'react'

type UserContextState = {
  user: string
  setUser: Dispatch<SetStateAction<string>>
}

export const UserContext = createContext<UserContextState | undefined>(
  undefined
)
