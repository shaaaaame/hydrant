export const getVideo = async (body) => {
  const url = import.meta.env.VITE_BACKEND_ENDPOINT + 'help-requests'

  try {
    const response = await fetch(url, {
      method: 'GET',
    })
    if (!response.ok) {
      throw new Error('Failed to fetch login data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching login data:', error.message)
    throw error
  }
}

export const postVideo = async (body) => {
  const url = import.meta.env.VITE_BACKEND_ENDPOINT + 'help-requests/1'

  const formData = new FormData()
  formData.append('video', body.video)
  formData.append('latitude', body.latitude)
  formData.append('longitude', body.longitude)
  formData.append('rank', body.rank)
  formData.append('name', body.name)
  formData.append('description', body.description)

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    if (!response.ok) {
      throw new Error('Failed to fetch login data')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching login data:', error.message)
    throw error
  }
}
