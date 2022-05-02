import React, { Suspense } from 'react'
import { BreweryCard } from 'components'
import type { BreweryData } from 'types/BreweryData'

type BreweryListProps = {
  data: {
    currentData: BreweryData[]
    setCurrentData: (data: BreweryData[]) => void
  }
}

const BreweryList = ({ data }: BreweryListProps) => {
  const removeItem = (id: string) => {
    const filteredData = data.currentData.filter(item => item.id !== id)
    data.setCurrentData(filteredData)
  }

  return (
    <Suspense fallback={'Loading...'}>
      {data.currentData.map(item => (
        <BreweryCard item={item} key={item.id} removeItem={removeItem} />
      ))}
    </Suspense>
  )
}

export default BreweryList
