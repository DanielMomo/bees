import React, { useState, useEffect, useContext } from 'react'
import { AgeCheckBox, EnabledDisabledButton, Logo } from 'components'
import styled, { createGlobalStyle } from 'styled-components'
import Router from 'next/router'
import { UserContext } from 'contexts/UserContext'

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    background-color: #F2EC54;
    align-items: center;
    justify-content: center;
  }
`

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 95vh;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: 0px 20px 20px 20px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`

const TextItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const NameInput = styled.input`
  border: 1px solid #d4d4d8;
  padding: 10px;
  width: 100%;
  height: 23px;
  border-radius: 4px;
`

const Text = styled.p`
  align-text: left;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`

const App = () => {
  const { user, setUser } = useContext(UserContext)
  const [checkbox, setCheckbox] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (user.length > 0 && checkbox === true) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [user, checkbox])

  const checkboxHandler = () => {
    setCheckbox(!checkbox)
  }

  const handleClick = () => {
    Router.push({
      pathname: '/brewery'
    })
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <TextItem>
          <Text>Please, enter your full name below </Text>
        </TextItem>
        <TextItem>
          <Text>Only alphabetical characters are accepted</Text>
        </TextItem>
        <Item>
          <NameInput
            type="text"
            placeholder="Full name"
            onChange={e => setUser(e.target.value)}
          />
        </Item>
        <Item>
          <AgeCheckBox onChange={checkboxHandler} checked={checkbox} />
        </Item>
        <Item>
          <EnabledDisabledButton
            enabled={active}
            onClick={handleClick}
            text="Enter"
          />
        </Item>
      </Container>
      <Logo />
    </>
  )
}

export default App
