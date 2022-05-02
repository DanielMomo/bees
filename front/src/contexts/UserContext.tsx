import { createContext, Dispatch, SetStateAction } from 'react'

type UserContextState = {
  user: string
  setUser: Dispatch<SetStateAction<string>>
}

const userContextDefaultValue: UserContextState = {
  user: '',
  setUser: () => null
}

export const UserContext = createContext<UserContextState>(
  userContextDefaultValue
)
