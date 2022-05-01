import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import logoImg from 'assets/images/logo.png'

const LogoPosition = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
`

const LogoImg = styled(Image)``

const Logo = () => (
  <LogoPosition>
    <LogoImg src={logoImg} alt="logo is a bee" />
  </LogoPosition>
)

export default Logo;