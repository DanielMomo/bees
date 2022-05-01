import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const AgeCheckBoxInput = styled.input`
  border: 1px solid #d4d4d8;
  border-radius: 4px;
`

const Text = styled.label`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`

const AgeCheckBox = ({ onChange, checked }) => {
  return (
    <Container>
      <AgeCheckBoxInput type="checkbox" onChange={onChange} checked={checked} />
      <Text>I am 18 years old or older</Text>
    </Container>
  )
}

export default AgeCheckBox
