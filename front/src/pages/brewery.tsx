import React, { useEffect, useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { getBreweryData } from 'services/fetchData'
import { InferGetStaticPropsType } from 'next'
import { BreweryList, BreweryHeader } from 'components'
import type { BreweryData } from 'types/BreweryData'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #F2EC54;
    padding: 0;
  }
`

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background: rgba(255, 254, 240, 1);
`

const Header = styled.div`
  display: flex;
  margin: 0px;
`

const Content = styled.div`
  display: flex;
  flex: 10;
  flex-flow: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

export const getStaticProps = async () => {
  const breweryData: BreweryData[] = await getBreweryData()
  return {
    props: {
      breweryData
    }
  }
}

const Brewery = ({
  breweryData
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [currentData, setCurrentData] = useState<BreweryData[]>([])
  useEffect(() => {
    setCurrentData(breweryData)
  }, [breweryData])

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <BreweryHeader />
        </Header>
        <Content>
          <BreweryList data={{ currentData, setCurrentData }} />
        </Content>
      </Container>
    </>
  )
}

export default Brewery
