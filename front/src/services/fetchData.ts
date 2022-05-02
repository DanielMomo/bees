import { get } from 'infra/requests'

const getBreweryData = async () => {
  try {
    const response = await get('https://api.openbrewerydb.org/breweries')
    return response
  } catch (error) {
    console.log(error)
  }
}

export { getBreweryData }
