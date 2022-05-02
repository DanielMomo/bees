import React from 'react'
import styled from 'styled-components'
import { BreweryData } from 'types/BreweryData'

type BreweryCardProps = {
  item: BreweryData
}

const AddressPosition = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`

const Address = styled.p`
  font-family: 'Work Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
`

const RenderAddress = ({ item }: BreweryCardProps) => {
  const { street, city, state, country } = item
  return (
    <AddressPosition>
      <Address>{street}</Address>
      <Address>
        {city}, {state} - {country}
      </Address>
    </AddressPosition>
  )
}

export default RenderAddress
