import React from 'react'
import styled from 'styled-components'
import graphSrc from 'assets/icons/graph.png'
import locationSrc from 'assets/icons/location.png'
import trashSrc from 'assets/icons/trash.png'
import phoneSrc from 'assets/icons/phone.png'
import Image from 'next/image'
import { BreweryData } from 'types/BreweryData'
import RenderAddress from './RenderAddress'
import InputBubble from './InputBubble'

type BreweryCardProps = {
  item: BreweryData
  removeItem: (id: string) => void
}

const Container = styled.div`
  width: 382px;
  height: 282px;
  background: #ffffff;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
`

const Header = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.p`
  font-size: 20px;
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
`

const TrashCan = styled.button`
  background: none;
  border: none;
`

const IconPosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  margin-left: 10px;
`

const Icon = styled(Image)``

const Bubbles = styled.div`
  flex: 2;
  display: flex;
  flex-flow: row wrap;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
`

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

const BubbleText = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
`

const BreweryCard = ({ item, removeItem }: BreweryCardProps) => {
  return (
    <Container>
      <Header>
        <Name>{item.name}</Name>
        <TrashCan onClick={() => removeItem(item.id)}>
          <Icon src={trashSrc} />
        </TrashCan>
      </Header>
      <RenderAddress item={item} />
      <Bubbles>
        {item.brewery_type ? (
          <Bubble>
            <IconPosition>
              <Icon src={graphSrc} />
            </IconPosition>
            <BubbleText>{item.brewery_type}</BubbleText>
          </Bubble>
        ) : null}
        {item.postal_code ? (
          <Bubble>
            <IconPosition>
              <Icon src={locationSrc} />
            </IconPosition>
            <BubbleText>{item.postal_code}</BubbleText>
          </Bubble>
        ) : null}
        {item.phone ? (
          <Bubble>
            <IconPosition>
              <Icon src={phoneSrc} />
            </IconPosition>
            <BubbleText>{item.phone}</BubbleText>
          </Bubble>
        ) : null}
        <InputBubble />
      </Bubbles>
    </Container>
  )
}

export default BreweryCard
