import React, { useContext, useEffect } from 'react'
import { UserContext } from 'contexts/UserContext'
import styled from 'styled-components'
import Image from 'next/image'
import arrowIconSrc from 'assets/icons/arrow.png'
import Router from 'next/router'

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #f2ec54;
`

const Item = styled.div`
  display: flex;
  margin: 0 10px;
`

const GoBack = styled.button`
  flex-direction: row;
  background-color: #f2ec54;
  border: none;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
`

const ArrowIcon = styled(Image)`
  margin-right: 10px;
`

const BreweryHeader = () => {
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (!user) {
      Router.push('/')
    }
  }, [user])

  const goBack = () => {
    Router.back()
  }

  return (
    <Container>
      <Item>
        <GoBack onClick={goBack}>
          <ArrowIcon src={arrowIconSrc} alt="go back" />
        </GoBack>
        <Text>Go back</Text>
      </Item>
      <Item>
        <Text>{user}</Text>
      </Item>
    </Container>
  )
}

export default BreweryHeader
