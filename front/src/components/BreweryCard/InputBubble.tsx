import React, { useState } from 'react'
import useFocus from 'hooks/useFocus'
import styled from 'styled-components'
import Image from 'next/image'
import plusSrc from 'assets/icons/plus.png'

const IconPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-left: 10px;
`

const AddButton = styled.button`
  background: none;
  border: none;
`

const BubbleText = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`

const Icon = styled(Image)``

const Bubble = styled.div`
  display: flex;
  flex-direction: row;
  width: 130px;
  height: 32px;
  left: 122px;
  top: 325px;
  background: #f2ec54;
  align-items: center;
  justify-content: flex-start;
  border-radius: 99px;
`

const InputBubble = () => {
  const [currentState, setCurrentState] = useState(0)
  const [text, setText] = useState('')
  const [inputRef, setInputFocus] = useFocus()

  const handleClick = () => {
    setCurrentState(1)
    setInputFocus()
  }

  return (
    <Bubble>
      {currentState === 0 ? (
        <>
          <IconPosition>
            <AddButton onClick={handleClick}>
              <Icon src={plusSrc} />
            </AddButton>
          </IconPosition>
          <BubbleText>add more</BubbleText>
        </>
      ) : null}
      {currentState === 1 ? (
        <input
          type="text"
          ref={inputRef}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              setCurrentState(2)
            }
          }}
        />
      ) : null}
      {currentState === 2 ? <BubbleText>{text}</BubbleText> : null}
    </Bubble>
  )
}

export default InputBubble
