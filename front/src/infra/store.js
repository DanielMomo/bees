import React from 'react'
import { RecoilRoot } from 'recoil'

const Store = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}

export default Store
