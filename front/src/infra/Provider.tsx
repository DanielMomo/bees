import React, { useState } from 'react'
import { UserContext } from 'contexts/UserContext'

type ProviderProps = {
  children: React.ReactNode
}

const Provider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState('')

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default Provider
