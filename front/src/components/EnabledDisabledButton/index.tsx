import React from 'react'
import styled from 'styled-components'

type EnabledButtonProps = {
  enabled: boolean
  onClick: () => void
  text: string
}

const EnabledButton = styled.button`
  background-color: #5d5fef;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
`

const DisabledButton = styled.button`
  background-color: #52525b;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
`

const EnabledDisabledButton = ({
  enabled,
  onClick,
  text
}: EnabledButtonProps) => {
  return enabled ? (
    <EnabledButton onClick={onClick}>{text}</EnabledButton>
  ) : (
    <DisabledButton disabled>{text}</DisabledButton>
  )
}

export default EnabledDisabledButton
