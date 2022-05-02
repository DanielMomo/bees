const get = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}

export { get }
